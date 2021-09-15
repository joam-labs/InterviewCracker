import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import interviewcracker from '../picture/interviewcracker.png';

const Login = () => {
  // event to input details, passed down through add company from user container
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const userLogin = () =>{
    axios.post('/api/login', { username, password })
      .then(data=>{
         console.log(data)
         history.push('/feed')
        })
      .catch(error=>console.log('Error in Login ', error))
  }

  return (
    <>
    
    <div id="logindiv">
      <img className="logo" src={interviewcracker}/>
      <div className = "addCard">
    
        <label htmlFor="user-name">User Name</label>
        <input id="user-name" onChange={e=>{setUsername(e.target.value)}}></input> 
          
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={e=>{setPassword(e.target.value)}}></input> 
        <button id="submit-login" onClick ={() => userLogin()}>Submit</button>
      </div>
       
    </div>
    </>    

  )
}

export default Login;
