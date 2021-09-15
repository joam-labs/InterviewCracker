import React from "react";

const AddCard = () => {
  // event to input details, passed down through add company from user container
  return (
    <>
      <div className="addCard">

        {/* labels needed..? */}
        <input>Interview date: </input> 
        <input>Interview contact: </input>

        <label htmlFor= "behaveqs">Behavioral Qs:</label>
        <input type="text" id="behaveqs1" onChange={}/>
        <input type="text" id="behaveqs2" onChange={}/>
        <input type="text" id="behaveqs3" onChange={}/>

        <label htmlFor= "algoQs">Algo Qs</label>
        <input type="text" id="algoQs1" onChange={}/>
        <input type="text" id="algoQs2" onChange={}/>
        <input type="text" id="algoQs3" onChange={}/>

        <label htmlFor= "systemDesignQs">Behavioral Qs</label>
        <input type="text" id="systemDes1" onChange={}/>
        <input type="text" id="systemDes2" onChange={}/>
        <input type="text" id="systemDes3" onChange={}/>

        <button className = "submitCardBtn" onClick={}>
          Add Card
        </button>

      </div>
    </>    
  )
}

export default AddCard;