import React, { useState, useEffect } from "react";

const AddCard = () => {
  // event to input details, passed down through add company from user container
  return (
    <>
      <div className="addCard">

        {/* labels needed..? */}
        <input>Interview date: </input> 
        <input>Interview contact: </input>

        <label htmlFor= "behaveqs">Behavioral Qs:</label>
        {/* <input type="text" id="behaveqs" onChange={}/>
        <input type="text" id="behaveqs" onChange={}/>
        <input type="text" id="behaveqs" onChange={}/> */}

        <label htmlFor= "algoQs">Algo Qs</label>
        {/* <input type="text" id="algoQs" onChange={}/>
        <input type="text" id="algoQs" onChange={}/>
        <input type="text" id="algoQs" onChange={}/> */}

        <label htmlFor= "systemDesignQs">Behavioral Qs</label>
        {/* <input type="text" id="systemDesignQs" onChange={}/>
        <input type="text" id="systemDesignQs" onChange={}/>
        <input type="text" id="systemDesignQs" onChange={}/> */}

        {/* <button className = "submitCardBtn" onClick={}> */}
        <button className = "submitCardBtn">
          Add Card
        </button>

      </div>
    </>    
  )
}

export default AddCard;