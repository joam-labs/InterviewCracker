import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import DetailCard from "../components/DetailCard.jsx";
import AddCard from "../components/AddCard.jsx";
import AddCompany from "../components/AddCompany.jsx";
import SimpleCard from "../components/SimpleCard.jsx";
import CompanyRow from "../components/CompanyRow.jsx";
import axios from 'axios';

const UserContainer = () => {
  const [createCompanyClicked, setNewCompany] = useState(false);
  useEffect(async() => {
    axios.get('/api/companies')
      .then(data=>console.log(data))
      .catch(error=>console.log('Error in UserContainer useEffect: ', error))
    return <AddCompany/>
  }, []);

  // iterate by date through database, render a feed card for each of entries
  return (
    <>
    <NavBar/>
    <div className='userContainer'>
       <button className='addCompanyBtn' onClick={() => setNewCompany(true)}>
          Add new company/
          <br></br>
          team/role
        </button>
      <div className='columnHeaders'>
        <div className='header'>
          Phone Screen
        </div>
        <div className='header'>
          1st Round
        </div>
        <div className='header'>
          2nd Round
        </div>
        <div className='header'>
          Details
          <DetailCard />
        </div>
      </div>
      {createCompanyClicked && 
        <div className = 'popup' >
          <AddCompany companyBool={setNewCompany}/>
        </div>
      }
    </div>
    </>
  )
}

export default UserContainer;
//DetailCard on 48 only for style testing, feel free to delete if not done already