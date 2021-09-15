import React, {useState} from "react";

const DetailCard = () => {
//placeholder state
  const [company, setCompany] = useState('Dilly');
  const [team, setTeam] = useState('Dally');
  const [role, setRole] = useState('Doo');
  const [algoQs, setAlgoQs] = useState('How would you solve a astronautical problem as an astronaut if you were not an astronaut?')
  const [systemDesignQs, setSystemDesignQs] = useState('Walk through the process of building the largest Lego tower that you can fathom.')
  const [behaveQs, setBehaveQs] = useState('Tell me about a family vacation during which you had to handle two family members getting mad at each other.')
  // deconstruct props to pass down questions in different sections?
  return (
    <>
      <div id = "detailsCard">
        <div id = "Identifiers">
          <p>Company: {company}</p>
          <p>Team: {team}</p>
          <p>Role: {role}</p>
        </div>

        <div className="Questions">
          <p>Algo Questions: {algoQs}</p>
          <p>SysDes Questions: {systemDesignQs}</p>
          <p>Behavioral Questions: {behaveQs}</p>
        </div>  
      </div>
    </>
  )
}

export default DetailCard;