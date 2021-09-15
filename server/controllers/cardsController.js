const db = require('../db/model');

const cardsController = {}; 

cardsController.getAllCards =async (req, res, next) => {
  
    try {
     //const {id} = req.cookies();
           //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const query = `SELECT company_name, interviewstage, date, behavioral_questions, algo_questions, system_design, followupstatus, acceptstatus, rejectstatus FROM company JOIN cards ON company.id=cards.company_id WHERE User_id=1 LIMIT 10`;
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













