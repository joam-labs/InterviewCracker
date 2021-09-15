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
   system_design,
   company_name,
   role_details
  } = everything;
 
  return (
    <>
    <div className = 'feedCards'>
      <p>Date:</p> {date.substring(0,10)}
      <p>Company: </p> {company_name} 
      <p>Role: </p> {role_details}
      <p>Algo problems: </p> {algo_questions}
      {/* loop through algo problems and render a list item for each*/}
        
      <p>Behavioral questions: </p>  {behavioral_questions}
      {/* loop through behavior problems and render a list item for each*/}
        
      <p>System design questions: </p> {system_design}
      {/* loop through system design problems and render a list item for each*/}
        
    </div>
    </>
  )
}

export default FeedCard;
