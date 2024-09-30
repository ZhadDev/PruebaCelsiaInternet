const { Model, DataTypes, Deferrable } = require("sequelize");
const { Cliente } = require("./cliente.model");

const SERVICES_TABLE = "servicios";

class Servicio extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICES_TABLE,
      modelName: "Servicio",
      timestamp: true,
    };
  }
}

const ServicioSchema = {
  identificacion: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(20),
    field: "identificacion",
    references: {
      model: Cliente,
      key: "identificacion",
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  },
  servicio: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(80),
    field: "servicio",
  },
  fechaInicio: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaInicio",
  },
  ultimaFacturacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "ultimaFacturacion",
  },
  ultimoPago: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "ultimoPago",
    defaultValue: 0,
  },
};

module.exports = { Servicio, ServicioSchema };
