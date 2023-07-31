"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const home = require("./");



app.use(cors()); // Use this after the variable declaration

app.use(function(req, res, next)  {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credential: true");
    next();
});

const corsOptions ={
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/api", home);


module.exports = app, cors;
