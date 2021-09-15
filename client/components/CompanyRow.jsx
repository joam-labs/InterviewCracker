import React, { useState, useEffect } from "react";


const CompanyRow = () => {

  const [card1Content, setCard1Content] = useState(null);
  const [card2Content, setCard2Content] = useState(null);
  const [card3Content, setCard3Content] = useState(null);

  const handleClick = () => {
    return (
      <div>
        <AddCard/>
      </div>
    )
  }

  return (
    <div className='companyRow'>
      <div className='companyCol'>
        <div id='companyName'>Company: </div>  
        <div id='teamName'>Team: </div>  
        <div id='roleName'>Role: </div>
      </div>
      <div className='cardCol'>
        {card1Content ? 
          <SimpleCard/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={() => handleClick()}>
              + Add Card
            </button>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card2Content ? 
          <SimpleCard/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={() => handleClick()}>
              + Add Card
            </button>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card3Content ? 
          <SimpleCard/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={() => handleClick()}>
              + Add Card
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default CompanyRow;