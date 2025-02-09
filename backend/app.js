const express = require('express');
const app = express();
const errorhandler = require('errorhandler');
const cors=require('cors');
const moragn = require('morgan');

//middlewares
app.use(cors());
app.use(moragn('dev'));
app.use(express.json());

//routes

//error handling
app.use(errorhandler());
module.exports = app;