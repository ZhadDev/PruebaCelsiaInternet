const { Cliente, ClienteSchema } = require("./cliente.model");
const { Servicio, ServicioSchema } = require("./servicio.model");

const setupModels = (sequelize) => {
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Servicio.init(ServicioSchema, Servicio.config(sequelize));
};

module.exports = setupModels;
