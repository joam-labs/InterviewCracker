const db = require('../db/model');

const userController = {}; 

userController.addUser = async (req, res, next) => {
  
  try {
    const params = [username, password];
    //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    const query = `INSERT INTO "public"."users" ( FirstName, LastName, Username, Password) VALUES ('Alex', 'Hord', 'alex', '1234');`
    const { rows } = await db.query(query, params);
    res.locals.id = rows[0].id; // Assign "ID" of created user to res.locals.id, so that our anonymous function in the router can pass it back to the user.
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not sign up user with that username and password. Do you already have an account?',
    });
  }

};

userController.getAllUsers = (req, res, next) => {
 
  try {

  } catch (err) {
    
  }
};



module.exports = userController;