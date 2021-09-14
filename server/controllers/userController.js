const db = require('../db/model');

const userController = {}; 

userController.addUser = async (req, res, next) => {
  
  try {
      conmouseleave.log()
    const params = [ firstName, lastName, username, password ];
    console.log(params);
    //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    const query = `INSERT INTO "public"."users" ( FirstName, LastName, Username, Password) VALUES ($1, $2, $3, $4) RETURNING Username;`
    const { rows } = await db.query(query, params);
    console.log('rows =', rows);
    res.locals.username = rows[0].username; // To return to client the username that was added
    console.log('res locals username =', res.locals.username);
    return next();
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not sign up user with that username and password. Do you already have an account?',
    });
  }
};

userController.getAllUsers = async (req, res, next) => {
 
  try {
    // const params = [ firstName, lastName, username, password];
    const query = `SELECT * FROM users`
    const { rows } = await db.query(query);
    let result = rows; // check this later
    res.locals.allUsers = result; // Assign "ID" of created user to res.locals.id, so that our anonymous function in the router can pass it back to the user.
    return next();
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not sign up user with that username and password. Do you already have an account?',
    });
  }
};

module.exports = userController;