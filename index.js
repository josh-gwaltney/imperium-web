import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const APP = express();
const HTTP = require('http').Server(APP);
const PORT = process.env.PORT || 3050;
const LOGGER = require('morgan');
const IO = require('socket.io')(HTTP);

APP.use(bodyParser.json());
APP.use(compression());
APP.use(cors());
APP.use(express.static(__dirname + '/dist'));

APP.route('*').get((req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// IO.on('connection', (socket) => {
//   console.log('client connected');
//
//   socket.on('message', (data) => {
//
//   });
//
//   socket.on('send:debugInfo', (data) => {
//     socket.emit('send:debugInfo', data);
//   });
//
//   socket.on('disconnect', () => {
//     console.log('goodbye');
//   });
// });

HTTP.listen(PORT);

console.log(`Web server started on port ${PORT}`);
