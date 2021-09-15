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
cardsController.getAllCards =async (req, res, next) => {
  
    try {
     //const {id} = req.cookies();
           //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const query = `SELECT company_name, Role_details, Team, interviewstage, date, behavioral_questions, algo_questions, system_design, followupstatus, acceptstatus, rejectstatus FROM company JOIN cards ON company.id=cards.company_id WHERE User_id=1 LIMIT 10`;
     // selecting 20 cards limit 20 and in decreasing order by time
     const { rows } = await db.query(query);

     res.locals.cards = rows;

      return next();
    } catch (err) {
      return next({
        status: 500,
        message:
          'Could not fetch data for each card from db?',
      });
    }
  };




module.exports = cardsController;













