const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
//!!!IMPORTANT!!! Set options on cors before launching
const cors = require('cors');
//Mount the morgan logging and body parsing middleware
const logger = require('morgan');
const app = express();


//configure cors
// var whitelist = ['http://localhost:3000/', 'http://localhost:3000/*', 'http://localhost:3001/', 'https://prayersgonnapray.herokuapp.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
// app.del('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

//require dotenv
require('dotenv').config();
//and the database
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

//Mount and configure the serve-favicon & static middleware so that they serve from the build (production-ready) folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here!!
app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));
app.use('/api/prayers', require('./routes/api/prayers'));

//"Catch all" route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
