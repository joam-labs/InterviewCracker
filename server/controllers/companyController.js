const db = require('../db/model');
const companyController = {}; 

companyController.getAllData =async (req, res, next) => {
  
    try {
      // const {id} = req.cookies;
      const id = '1';
      const params = [ id ];
      //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const query = `SELECT * FROM company WHERE User_id=$1 LIMIT 10`;
     //` SELECT * FROM company JOIN cards ON company.id=cards.company_id WHERE User_id=1 LIMIT 10`
      const { rows } = await db.query(query, params);
      const array = rows.slice();
      const finalArray = [];
      for(let i=0; i<array.length; i++){
        //   console.log(el.id)
            let params2 = [array[i].id];

            const query2 = `SELECT * FROM cards WHERE company_id=$1`;
      
            const { rows } = await db.query(query2, params2);
         
            array[i].cards = rows; 

            //console.log(array[i])   
            finalArray.push(array[i])
        }; 
            // console.log('rows =', rows);
     // To return to client the username that was added
    res.locals.data = finalArray;
      return next();
    } catch (err) {
      return next({
        status: 500,
        message:
          'Could not sign up user with that username and password. Do you already have an account?',
      });
    }
  };

  companyController.addCompany =async (req, res, next) => {
  
    try {
      const {id} = req.cookies;
      const { Company_Name, Team, Role } = req.body;
      console.log('req.body=', req.body);
      const params = [ id, Company_Name, Team, Role ];
      //const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
      const query = `INSERT INTO "public"."company" (User_id, Company_Name, Role_details, Team )
      VALUES ( $1, $2, $3, $4);`;
     //` SELECT * FROM company JOIN cards ON company.id=cards.company_id WHERE User_id=1 LIMIT 10`
      await db.query(query, params);
      return next();
    } catch (err) {
      return next({
        status: 500,
        message:
          'Could not sign up user with that username and password. Do you already have an account?',
      });
    }
  };


















module.exports = companyController;