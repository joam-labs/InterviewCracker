import React, { useState, useEffect } from "react";

const AddCard = ( { stage, id, setShowAddCard }) => {
  // event to input details, passed down through add company from user container
  // console.log({stage, id, setShowAddCard})
  const [date, setDate] = useState('');
  const [bQuestions, setBQs] = useState('');
  const [aQuestions, setAQs] = useState('');
  const [sQuestions, setSQs] = useState('');

  const handleClick = async () => {
    setShowAddCard(false);
    const response = await fetch('api/addCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Company_id: id,
        Date: date,
        InterviewStage: stage,
        Behavioral_questions: bQuestions,
        Algo_questions: aQuestions,
        System_design: sQuestions,
        FollowupStatus: false,
        AcceptStatus: false,
        RejectStatus: false
      })
    })
  }

  return (
    <>
      <div className="addCard2">
        
        <label htmlFor='Date'>Date of Interview</label>
        <input type="text" id='Date' onChange={e => setDate(e.target.value)} />
     
        <label htmlFor='BehavioralQs'>Behavioral Questions</label>
        <input type="text" id='BehavioralQs' onChange={e => setBQs(e.target.value)} />

        
        <label htmlFor="AlgoQs">Algo Questions</label>
        <input type="text" id="AlgoQs" name="fname" onChange={e => setAQs(e.target.value)}/>

        <label htmlFor="SystemQs">SDI Questions</label>
        <input type="text" id="SystemQs" name="fname" onChange={e => setSQs(e.target.value)}/>
        
        <button className="submitCardBtn" onClick={() => handleClick()}>
          Submit
        </button>

      </div>
    </>    
  )
}

 export default AddCard;