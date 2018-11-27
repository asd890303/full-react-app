import express from 'express';
import config from './config.js';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});


// 'use strict';
// var path = require('path');
// var express = require('express');

// var app = express();

// var staticPath = path.join(__dirname, '/');
// app.use(express.static(staticPath));

// // Allows you to set port in the project properties.
// app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function() {
//     console.log('listening');
// });
