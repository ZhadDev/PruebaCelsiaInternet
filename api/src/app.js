//import express from "express";
//import dotenv from "dotenv";
//import cors from "cors";

const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");
const routerApi = require("./routes");
const { config } = require("./config/config");

// dotenv.config();
const app = express();

const port = config.port; //process.env.NODE_LOCAL_PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Backend CELSIA port: ${port}`);
});

routerApi(app);

app.listen(port, () => {
  console.log("Port ==> ", port);
});
