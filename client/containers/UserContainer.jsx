import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import DetailCard from "../components/DetailCard.jsx";
import AddCard from "../components/AddCard.jsx";
import AddCompany from "../components/AddCompany.jsx";
import CompanyRow from "../components/CompanyRow.jsx";
import axios from 'axios';

const UserContainer = () => {
  const [createCompanyClicked, setNewCompany] = useState(false);
  const [listOfCompanies, setListOfCompanies] = useState(null);

  useEffect(async() => {
    axios.get('/api/companies')
    // .then(data => data.json())
      .then(data => {
        // console.log('data in userContainer =', data);
        //  listOfRows = data.data.map((e, i) => {
        //   // return (
        //     <CompanyRow bigData={listOfCompanies[i]}/>
        //   //)
        // })
        setListOfCompanies(data.data)
      }).catch(error => console.log('Error in UserContainer useEffect: ', error))
      // return <AddCompany/>
    }, [1]);
  
  // useEffect(() => 
  let listOfRows;
  if (listOfCompanies !== null) {
    listOfRows = listOfCompanies.map((e,i) => {
      return (
        <CompanyRow key={i} bigData={listOfCompanies[i]}/>
      )
    })
  }

  // iterate by date through database, render a feed card for each of entries
  // When rendering CompanyRow, pass down prop CompanyId

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
        <div className = 'spacing'>

        </div>
        <div id = 'test'>
        <div className='header'>
          Phone Screen
        </div>
        <div className='header'>
          1st Round
        </div>
        <div className='header'>
          2nd Round
        </div>
        </div>
        <div className='details'>
          Details
        </div>

        </div>
   

      {createCompanyClicked && 
        <div className = 'popup' >
          <AddCompany companyBool={setNewCompany}/>
        </div>
      }
      <div id = 'listofRows'>
       {listOfRows}
      </div>
    
    </div>
    </>
  )
}

export default UserContainer;
//DetailCard on 48 only for style testing, feel free to delete if not done already