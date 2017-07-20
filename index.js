import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const APP = express();
const HTTP = require('http').Server(APP);
const PORT = process.env.PORT || 3050;
const LOGGER = require('morgan');
//var io = require('socket.io')(HTTP);

APP.use(bodyParser.json());
APP.use(compression());
APP.use(cors());
APP.use(express.static(__dirname + '/dist'));

//APP.route('/').get((req, res) => {
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
//});
APP.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//io.on('connection', function (socket) {
//  socket.emit('news', { hello: 'world' });
//  socket.on('my other event', function (data) {
//    console.log(data);
//  });
//});

HTTP.listen(PORT);

console.log(`Web server started on port ${PORT}`);
