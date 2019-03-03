var express = require('express');
var path = require('path');
var ejs = require('ejs');

const app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
var port = 3000;
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`);
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