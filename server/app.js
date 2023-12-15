const express = require("express");
const app=express();
const cors = require("cors");

if (process.env.NODE_ENV !== 'production')
    require("dotenv").config({ path: "./config/.env" });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const route = require("./Routes/userroute");
app.use("",route);

module.exports = app;