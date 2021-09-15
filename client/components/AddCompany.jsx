import React, { useState, useEffect } from "react";

const AddCompany = ({ companyBool }) => {
  //dispatch
const [company, setCompany] = useState('');
const [team, setTeam] = useState('');
const [role, setRole] = useState('');

const handleClick = async() =>{
  console.log('this is inside handleClick', company, team, role)
  companyBool(false);
  const response = await fetch('api/company/addCompany', {
    method: 'POST', 
       headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({ Company_Name:company, Team:team, Role:role }) // body data type must match "Content-Type" header
  });

  
};

  return (
    <>
      <div className="addCompany">

        <label htmlFor='Company'>Company</label>
        <input type="text" id='Company' onChange={e => setCompany(e.target.value)} />
        
        <label htmlFor="team">Team</label>
        <input type="text" id="team" name="fname" onChange={e => setTeam(e.target.value)}/>

        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="fname" onChange={e => setRole(e.target.value)}/>

        <button className='submitCompanyBtn' onClick={() => handleClick()}>
          Submit
        </button>
      </div>
    </>
  )
}

export default AddCompany;