const express = require('express');
const path = require('path');
const PORT = 3333;
// const cors = require('cors');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
//import controllers
const usersController = require('./controllers/userController.js');
const companyController = require('./controllers/companyController.js');
const cardsController = require('./controllers/cardsController.js');

const app = express();

// parsing request body application/json
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
// app.use(cors());
app.use(cookieParser());


//Route handler
app.get('/api/users', usersController.getAllUsers, (req, res)=>{
  res.status(200).json(res.locals.allUsers);
});

app.post('/api/users', usersController.addUser, (req, res)=>{
  res.status(200).json(res.locals.username);
});

app.post('/api/company/addCompany', companyController.addCompany, (req, res) => {
  res.status(200);
});

app.post('/api/addCard', cardsController.postCard, (req, res) => {
  res.status(200);
});

app.post('/api/login', usersController.verifyUser , async (req, res)=>{
  res.status(200).send('done');//route for logining
})

app.get('/api/companies', companyController.getAllData, async (req, res)=>{
 res.status(200).json(res.locals.data);//route for getting all the companies and cards all together but objects have cards only belonging to this companies
});

app.get('/api/cards', cardsController.getAllCards, async (req, res)=>{
  res.status(200).json(res.locals.cards);//route for getting all cards
 })
// app.use('/api/company', companyController);
// app.use('/api/cards', cardsController);

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
  