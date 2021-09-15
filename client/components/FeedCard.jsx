import React from "react";

const FeedCard = ({everything}) => {
  //take from store
  // display all details, maybe load a bunch at a time but not all ?
  // logic goes here, 
  console.log('Inside feedCard', everything)
 const {
   id, 
   company_id, 
   interviewstage, 
   date, 
   behavioral_questions, 
   acceptstatus, 
   algo_questions, 
   followupstatus, 
   rejectstatus, 
   system_design 
  } = everything;
 
  return (
    <>
    <div className = 'feedCards'>
      <p>Date: {date}</p>
      <p>Company: </p>
      <p>Team: </p>
      <p>Role: </p>
      <h2>Algo problems</h2>
      {/* loop through algo problems and render a list item for each*/}
        {algo_questions}
      <h2>Behavior questions</h2> 
      {/* loop through behavior problems and render a list item for each*/}
        {behavioral_questions}
      <h2>System design questions</h2> 
      {/* loop through system design problems and render a list item for each*/}
        {system_design}
    </div>
    </>
  )
}

export default FeedCard;
