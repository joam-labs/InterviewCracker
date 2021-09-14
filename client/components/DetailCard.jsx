import React, { useState } from "react";

const DetailCard = () => {

  // deconstruct props to pass down questions in different sections?
  return (
    <>
      <div id = "DetailsCard">
        <div id = "Identifiers">
          <p>Company: </p>
          <p>Team: </p>
          <p>Role: </p>
        </div>

        <div class = "Questions">
          <ol>
            {/* //loop through array of behavior questions passed down and render a list item for each */}
            1.
            2.
            3.
          </ol>
        </div>
        
        <div class = "Questions">
          <ol>
            {/* //loop through array of algo questions passed down and render a list item for each */}
            1.
            2.
            3.
          </ol>
        </div>

        <div class = "Questions">
          <ol>
            {/* //loop through array of system questions passed down and render a list item or each */}
            1.
            2.
            3.
          </ol>
        </div>
        
      </div>
    </>
  )
}

export default DetailCard;