import React, { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard.jsx";
import AddCard from "./AddCard.jsx";


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
  const [showAddCard1, setShowAddCard1] = useState(false);
  const [showAddCard2, setShowAddCard2] = useState(false);
  const [showAddCard3, setShowAddCard3] = useState(false);

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
        <SimpleCard cardContent={card1Content}/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={() => setShowAddCard1(true)}>
              + Add Card
            </button>
          </div>  
        }
        {showAddCard1 &&
          <div className='popup'>
            <AddCard  stage="Phone interview" id={id} setShowAddCard={setShowAddCard1}/>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card2Content ? 
          <SimpleCard cardContent={card2Content}/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={(stage, id) => setShowAddCard2(true)}>
              + Add Card
            </button>
          </div>
        }
        {showAddCard2 &&
          <div className='popup'>
            <AddCard  stage="First interview" id={id} setShowAddCard={setShowAddCard2}/>
          </div>
        }
      </div>
      <div className='cardCol'>
        {card3Content ? 
          <SimpleCard cardContent={card3Content}/> :
          <div className="blankCard">
            <button className="openAddCard" onClick={(stage, id) => setShowAddCard3(true)}>
              + Add Card
            </button>
          </div>
        }
        {showAddCard3 &&
          <div className='popup'>
            <AddCard stage="Second interview" id={id} setShowAddCard={setShowAddCard3}/>
          </div>
        }
      </div>
      </div>
    </div>
  )
}

export default CompanyRow;