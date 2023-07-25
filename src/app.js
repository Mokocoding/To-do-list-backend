"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const home = require("./");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use("/api", home);


module.exports = app;
