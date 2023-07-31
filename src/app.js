"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const home = require("./");



app.use(cors()); // Use this after the variable declaration

app.use(function(req, res, next)  {
    res.header("Access-Control-Allow-Origin", "ec2-3-35-134-247.ap-northeast-2.compute.amazonaws.com:3000/");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credential: true");
    res.header("ngrok-skip-browser-warning: true");
    next();
});

const corsOptions ={
    origin: "ec2-3-35-134-247.ap-northeast-2.compute.amazonaws.com:3000/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/api", home);


module.exports = app, cors;
