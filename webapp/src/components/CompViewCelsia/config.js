const CLIENTE = [
  {
    KEY: "1",
    ID: "identificacion",
    POSITION: "1",
    LABEL: "Identificacion",
    NAME: "identificacion",
    TYPE: "text",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
  },
  {
    KEY: "2",
    ID: "nombres",
    POSITION: "2",
    LABEL: "Nombres",
    NAME: "nombres",
    TYPE: "text",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
  },
  {
    KEY: "3",
    ID: "apellidos",
    POSITION: "3",
    LABEL: "Apellidos",
    NAME: "apellidos",
    TYPE: "text",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
  },
  {
    KEY: "4",
    ID: "tipoIdentificacion",
    POSITION: "4",
    LABEL: "tipo identificacion",
    NAME: "tipoIdentificacion",
    TYPE: "foreign",
    MAX_LENGTH: 28,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {
      CC: "Cedula",
      TI: "Tarjeta de Identidad",
      CE: "Cedula extranjera",
      RC: "Registro civil",
    },
  },
  {
    KEY: "5",
    ID: "fechaNacimiento",
    POSITION: "5",
    LABEL: "Fecha nacimiento",
    NAME: "fechaNacimiento ",
    TYPE: "date",
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
  },
  {
    KEY: "6",
    ID: "numeroCelular",
    POSITION: "6",
    LABEL: "Numero de celular",
    NAME: "numeroCelular",
    TYPE: "text",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
  },
  {
    KEY: "7",
    ID: "correoElectronico",
    POSITION: "7",
    LABEL: "Correo electronico",
    NAME: "correoElectronico",
    TYPE: "text",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
  },
];

const SERVICIOS = [
  {
    KEY: "1",
    ID: "identificacion",
    POSITION: "1",
    LABEL: "Identificacion",
    NAME: "identificacion",
    TYPE: "foreign",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {
      1113625352: "John Arteaga",
      1: "jon doe",
    },
  },
  {
    KEY: "2",
    ID: "servicio",
    POSITION: "2",
    LABEL: "servicio",
    NAME: "servicio",
    TYPE: "foreign",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {
      "Internet 200 MB": "Internet 200 MB",
      "Internet 400 MB": "Internet 400 MB",
      "Internet 600 MB": "Internet 600 MB",
      "Directv Go": "Directv Go",
      "Paramount+": "Paramount+",
      "Win+": "Win+",
    },
  },
  {
    KEY: "3",
    ID: "fechaInicio",
    POSITION: "3",
    LABEL: "Fecha inicio",
    NAME: "fechaInicio ",
    TYPE: "date",
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
  },
  {
    KEY: "4",
    ID: "ultimaFacturacion",
    POSITION: "4",
    LABEL: "Ultima facturacion",
    NAME: "ultimaFacturacion ",
    TYPE: "date",
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
  },
  {
    KEY: "5",
    ID: "ultimoPago",
    POSITION: "5",
    LABEL: "Ultimo pago",
    NAME: "ultimoPago",
    TYPE: "number",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: 0,
    FOCUS: false,
  },
];

export { CLIENTE, SERVICIOS };
