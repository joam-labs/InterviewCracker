import React, { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard.jsx";
 

const CompanyRow = ( { bigData } ) => {

  const { 
    id,
    company_name,
    role_details,
    team,
    cards
   } = bigData

  const [card1Content, setCard1Content] = useState(cards[0]); // -> cards[0]
  const [card2Content, setCard2Content] = useState(cards[1]);
  const [card3Content, setCard3Content] = useState(cards[2]);

  const handleClick = (stage, Id) => {
    return (
      <div>
        <AddCard stage={stage} id={id}/>
      </div>
    )
  }

  return (
    <div className='companyRow'>
      <div className='companyCol'>
        <div id='companyName'>Company: {company_name}</div>  
        <div id='teamName'>Team: {team}</div>  
        <div id='roleName'>Role: {role_details}</div>
      </div>
      <div className="card__wrapper">
      <div className='cardCol'>
        {card1Content ? 
        <SimpleCard/>   :
          <div className="blankCard">
            <button className="openAddCard" onClick={(stage, id) => handleClick('Phone interview', id)}>
              + Add Card
            </button>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card2Content ? 
          // <div>it works</div> :
           <SimpleCard cardContent={card2Content}/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={(stage, id) => handleClick('First round', id)}>
              + Add Card
            </button>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card3Content ? 
          // <div>it works</div> :
           <SimpleCard cardContent={card3Content}/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={(stage, id) => handleClick('Second round', id)}>
              + Add Card
            </button>
          </div>
        }
      </div>
      </div>
    </div>
  )
}

export default CompanyRow;