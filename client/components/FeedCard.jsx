import React, { useState } from "react";

const FeedCard = () => {
  //take from store
  // display all details, maybe load a bunch at a time but not all ?
  // logic goes here, 
  return (

    <>
      <p>Date:</p>
      <p>Company:</p>
      <p>Team: </p>

      <h5>Algo problems</h5>
      {/* loop through algo problems and render a list item for each*/}
      
      <h5>Behavior questions</h5> 
      {/* loop through behavior problems and render a list item for each*/}

      <h5>System design questions</h5> 
      {/* loop through system design problems and render a list item for each*/}
      
    </>
  )
}

export default FeedCard;