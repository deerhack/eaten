var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require("dotenv")
var bodyParser = require("body-parser");

dotenv.config()


var eventRouter = require('./routes/event');
var adminRouter = require('./routes/admin');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/event', eventRouter);
app.use('/admin', adminRouter);

module.exports = app;
