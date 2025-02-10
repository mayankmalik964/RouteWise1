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
app.use('/api',(req,res,next)=>{
    res.send('Hello from the API');
});
app.use('*', (req, res, next) => {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});

//error handling
app.use(errorhandler());
module.exports = app;