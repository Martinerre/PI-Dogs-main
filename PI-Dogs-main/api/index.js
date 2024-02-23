const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// require("./src/db.js") // Para prueba datos DB

const URL = 'https://api.thedogapi.com/v1/breeds' //url img https://api.thedogapi.com/v1/images/search?limit=15&api_key=${API_KEY}
const port = 3001;

const apiToDbb = async () => {
  console.log('api to db');
  try {
    let response = await axios.get(URL);
    let dataResponse = response.data;
    dataResponse.map(async (el) => {
      await Country.create({
        id: el.alpha3Code,
        name: el.name,
        flag: el.flag,
        continent: el.region,
        subregion: el.subregion,
        capital: el.capital,
        area: el.area,
        population: el.population,
      })
    })
  } catch (error) {
    error.message
  }
}

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server listening at ${port}`); // eslint-disable-line no-console
  });
});
