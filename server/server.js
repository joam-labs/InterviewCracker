const express = require('express');
const path = require('path');
const PORT = 3333;
const cors = require('cors');
const bodyParser = require('body-parser');

//import controllers
const usersController = require('./controllers/usersController.js');
const companyController = require('./controllers/companyController.js');
const cardsController = require('./controllers/cardsController.js');

const app = express();

// parsing request body application/json
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

//Route handler
app.use('/api/users', usersController);
app.use('/api/company', companyController);
app.use('/api/cards', cardsController);

// Global error handler
app.use(function (err, req, res, next) {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  module.exports = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
  