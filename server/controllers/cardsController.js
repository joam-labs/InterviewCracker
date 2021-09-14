const db = require('../db/model');

const cardsController = {}; 

cardsController.addCard = async (req, res, next) => {
  
  try {
    const { firstName, lastName, username, password } = req.body;
    const params = [ firstName, lastName, username, password ];
    //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    const query = ``
    const { rows } = await db.query(query, params);
    // console.log('rows =', rows);
    res.locals.username = rows[0].username;
    res.locals.id = rows[0].id; // To return to client the username that was added

    return next();
  } catch (err) {
    return next({
      status: 500,
      message:
        'Could not add Card',
    });
  }
};




module.exports = cardsController;













