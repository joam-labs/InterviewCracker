import React from "react";
import {useSelector, useDispatch} from 'react-redux';


const SimpleCard = () => {
  // need event for update Status
  // state passed down is interviewer contact & interview date from AddCard
  // const interviewDate = useSelector({state => state.interviewDate});
  // const interviewContact = useSelector({state => state.interviewContact});

  return (
    <>
    <div id = 'simpleCardOutline'>
      <div className="simpleCard">
        <p>Interview date: </p> 
        <p>Interview contact: </p>
      </div>

      <div className="statusLights">
      
        <input type = "checkbox" id='followed-up'></input>
        <label htmlFor='followed-up'></label>

        <input type = "checkbox" id= 'accepted'></input>
        <label htmlFor='accepted'></label>

        <input type = "checkbox" id= 'rejected'></input>
        <label htmlFor='rejected'></label>

      </div>
    </div>
    </>
  )
}

export default SimpleCard;