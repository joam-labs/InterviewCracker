const db = require('../db/model');

const userController = {}; 

userController.addUser = async (req, res, next) => {
  
  try {
    const { firstName, lastName, username, password } = req.body;
    const params = [ firstName, lastName, username, password ];
    //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    const query = `INSERT INTO "public"."users" ( FirstName, LastName, Username, Password) VALUES ($1, $2, $3, $4) RETURNING Username, id;`
    const { rows } = await db.query(query, params);
    // console.log('rows =', rows);
    res.locals.username = rows[0].username;
    res.locals.id = rows[0].id; // To return to client the username that was added
    res.cookie("id", res.locals.id )
    res.cookie("username", res.locals.username)
    // console.log('res locals username =', res.locals.username);
    // console.log('res locals id =', res.locals.id);
    return next();
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not sign up user with that username and password. Do you already have an account?',
    });
  }
};

userController.verifyUser = async (req, res, next) => {
 
  try {
    // const params = [ firstName, lastName, username, password];
    const { username, password } = req.body;
    const params = [ username, password ];
    // console.log(username)
    // console.log(password)
    const query = `SELECT * FROM users WHERE username=$1 AND password=$2`;
    const { rows } = await db.query(query, params);
    res.locals.username = rows[0].username;
    res.locals.id = rows[0].id; 
    res.cookie("id", res.locals.id) //append id to a cookie
    res.cookie("username", res.locals.username) //append username to a cookie
    return next();
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not verify user',
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
        'Could not get all users',
    });
  }
};

module.exports = userController;