const { Model, DataTypes } = require("sequelize");

const CLIENT_TABLE = "clientes";

class Cliente extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: "Cliente",
      timestamp: true,
    };
  }
}

const ClienteSchema = {
  identificacion: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(20),
    field: "identificacion",
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING(80),
    field: "nombres",
  },
  apellidos: {
    allowNull: false,
    type: DataTypes.STRING(80),
    field: "apellidos",
  },
  tipoIdentificacion: {
    allowNull: false,
    type: DataTypes.STRING(2),
    field: "tipoIdentificacion",
  },
  fechaNacimiento: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fechaNacimiento",
  },
  numeroCelular: {
    allowNull: false,
    type: DataTypes.STRING(20),
    field: "numeroCelular",
  },
  correoElectronico: {
    allowNull: false,
    type: DataTypes.STRING(80),
    field: "correoElectronico",
    validate: {
      isEmail: {
        msg: "Ingresar un email correcto",
      },
    },
  },
};

module.exports = { Cliente, ClienteSchema };
