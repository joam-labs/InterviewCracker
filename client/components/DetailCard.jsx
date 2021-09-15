import React from "react";

const DetailCard = ({ algo_questions,  system_design, behavioral_questions, setShowDetail }) => {
 // setShowDetail(false);
  // deconstruct props to pass down questions in different sections?
  return (
    <>
      {/* <div id = "DetailsCard">
        <div id = "Identifiers">
          <p>Company: </p>
          <p>Team: </p>
          <p>Role: </p>
        </div> */}
      <div id = "DetailsCard">
        <div className="Questions">
          <ol>
            {/* //loop through array of behavior questions passed down and render a list item for each */}
            {/* 1.
            2.
            3. */}
            {algo_questions}
          </ol>
        </div>
        
        <div className="Questions">
          <ol>
            {/* //loop through array of algo questions passed down and render a list item for each */}
            {/* 1.
            2.
            3. */}
            {system_design}
          </ol>
        </div>

        <div className="Questions">
          <ol>
            {/* //loop through array of system questions passed down and render a list item or each */}
            {/* 1.
            2.
            3. */}
            {behavioral_questions}
          </ol>
        </div>
        
    </div>
    </>
  )
}

export default DetailCard;