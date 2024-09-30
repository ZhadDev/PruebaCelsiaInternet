const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("./../db/models");

const sequelize = new Sequelize(
  config.dbName, // name database
  config.dbUser, // user database
  config.dbRootPassword, // password database
  {
    host: config.dbHost,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado con exito a la BD.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la BD: ", error);
  });

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
