require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.NODE_LOCAL_PORT || process.env.NODE_DOCKER_PORT || 3001,
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "Zhad",
  dbRootPassword: process.env.DB_ROOT_PASSWORD || "",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "pruebacelsia",
  dbPort: process.env.DB_LOCAL_PORT || "3307",
};

module.exports = { config };
