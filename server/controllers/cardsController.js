const db = require('../db/model');

const cardsController = {}; 

cardsController.getAllCards =async (req, res, next) => {
  
    try {
     //const {id} = req.cookies();
           //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const query = `SELECT company_name, Role_details, Team, interviewstage, date, behavioral_questions, algo_questions, system_design, followupstatus, acceptstatus, rejectstatus FROM company JOIN cards ON company.id=cards.company_id ORDER BY date DESC LIMIT 10`;
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
  
  cardsController.postCard = async (req, res, next) => {
  
    try {
     //const {id} = req.cookies();
     const { Company_id, InterviewStage, Date, Behavioral_questions, Algo_questions, System_design, FollowupStatus, AcceptStatus, RejectStatus } = req.body;
           //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
          
    const params = [ Company_id, InterviewStage, Date, Behavioral_questions, Algo_questions, System_design , FollowupStatus, AcceptStatus, RejectStatus];
    console.log(params) 
    const query = `INSERT INTO "public"."cards" (Company_id, InterviewStage, Date, Behavioral_questions, Algo_questions, System_design , FollowupStatus, AcceptStatus, RejectStatus)
      VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9);`;
     // selecting 20 cards limit 20 and in decreasing order by time
     const { rows } = await db.query(query, params);

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













