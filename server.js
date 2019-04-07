const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
//Mount the morgan logging and body parsing middleware
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

//Mount and configure the serve-favicon & static middleware so that they serve from the build (production-ready) folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//"Catch all" route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});