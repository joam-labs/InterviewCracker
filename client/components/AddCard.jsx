import React, { useState } from "react";

const AddCard = () => {
  // event to input details, passed down through add company from user container
  return (
    <>
      <div class = "addCard">

        <input>Interview date: </input> 
        <input>Interview contact: </input>

        <label for = "behaveqs">Behavioral Qs:</label>
        <textarea name="behaveqs" id="behaveqs" cols="30" rows="10"></textarea>

        <label for = "algoQs">Algo Qs</label>
        <textarea name="algoQs" id="" cols="30" rows="10"></textarea>

        <label for = "systemDesignQs">Behavioral Qs</label>
        <textarea name="systemDesignQs" id="systemDesignQs" cols="30" rows="10"></textarea>
      </div>
      <button id = "addCardSubmit">
        Add Card
      </button>

    </>    

  )
}

export default AddCard;