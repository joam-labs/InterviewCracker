import React from "react";

const SimpleCard = () => {
  // need event for update Status
  // state passed down is interviewer contact & interview date from AddCard

  return (
    <>
    <div className="simpleCard">
      <p>Interview date: </p> 
      <p>Interview contact: </p>
    </div>

    <div className="statusLights">
      <input type = "checkbox"></input>
      <input type = "checkbox"></input>
      <input type = "checkbox"></input>
    </div>
    </>
  )
}

export default SimpleCard;