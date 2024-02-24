const server = require('./src/app.js');
const axios = require('axios');
const { conn } = require('./src/db.js');
const {Dog} = require('../api/src/db.js')

// require("./src/db.js") // Para prueba datos DB

//const URL = 'https://api.thedogapi.com/v1/breeds' 
const URL = 'https://api.thedogapi.com/v1/images/search?limit=15&api_key=live_TnHJR3xTl8Xm9eFPiVyrbxLdguvnd8ugbO8js75d8CgE0zxKTQIxrtP2W1UigiZP'
// ej: ,
// {
//   "weight":{"imperial":"6 - 13","metric":"3 - 6"},"height":{"imperial":"9 - 11.5","metric":"23 - 29"},
//   "id":1,"name":"Affenpinscher","bred_for":"Small rodent hunting, lapdog","breed_group":"Toy","life_span":"10 - 12 years","temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving","origin":"Germany, France","reference_image_id":"BJa4kxc4X"}

const port = 3001;

const apiToDbb = async () => {
  console.log('api to db');
  try {
    let response = await axios.get(URL);
    response.map(async (el) => {
      await Dog.create({
        id: el.breeds.id,
        name: el.name,
        image: el.url,
        altura: el.breeds.height.metric,
        peso: el.breeds.weight.metric,
        anios: el.breeds.life_span,
      })
    })
  } 
  catch (error) {
    error.message
  }
}

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server listening at ${port}`); // eslint-disable-line no-console
  });
});

apiToDbb(URL)