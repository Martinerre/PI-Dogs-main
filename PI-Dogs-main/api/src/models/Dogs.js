const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 's/d'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate:
      // {
      //   min: 0,
      //   max: 5,
      //   isEven(value) {
      //     if (value < 0 || value > 2) {
      //       throw new Error("Altura errónea")
      //     }
      //   }
      // }
    },
    peso: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate:
      // {
      //   min: 0,
      //   max: 130,
      //   isEven(value) {
      //     if (value < 0 || value > 130) {
      //       throw new Error("Peso erróneo")
      //     }
      //   }
      // }
    },
    anios: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate:
      // {
      //   min: 0,
      //   max: 40,
      //   isEven(value) {
      //     if (value < 0 || value > 40) {
      //       throw new Error("Años no correcto")
      //     }
      //   }
      // }
    }
  }, { timestamps: true }
  );
};
