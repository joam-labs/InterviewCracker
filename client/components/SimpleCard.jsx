import React, {useState} from "react";
import DetailCard from "./DetailCard.jsx";


const SimpleCard = ({ cardContent }) => {
  // need event for update Status
  // state passed down is interviewer contact & interview date from AddCard
  // "company_id": 1,
  //               "interviewstage": "Phone screen",
  //               "date": "2021-07-23T04:00:00.000Z",
  //               "behavioral_questions": "Tell me about yourself. Where do you see yourself 5 years from now? Describe the best job youve ever had.",
  //               "algo_questions": "none",
  //               "system_design": "none",
  //               "followupstatus": true,
  //               "acceptstatus": false,
  //               "rejectstatus": false

  const {
    date,
    behavioral_questions,
    algo_questions,
    system_design,
    followupstatus,
    acceptstatus,
    rejectstatus
  } = cardContent;


  // const [date, setDate] = useState('');
  // const [ behavioral_questions, setBehavioral_questions] = useState('');
  // const [algo_questions, setAlgo_questions] = useState('');
  // const [ system_design, setSystem_design] = useState('');
  const [FStatus, setFollowupstatus] = useState(followupstatus);
  const [AStatus, setAcceptstatus] = useState(acceptstatus);
  const [RStatus, setRejectstatus] = useState(rejectstatus);
  const [showDetail, setShowDetail] = useState(false);


  return (
    <>
      <div className="simpleCard">
        <button className="simpleCardBtn" onClick={() => setShowDetail(true)}>
          <p>Interview date: {date.substring(0,10)}</p> 
          <div className="statusLights">
            <label>Followup Status</label>
            <input type = "checkbox" checked={FStatus} onChange = {()=>setFollowupstatus(!FStatus)}></input>
            <label>Accept Status</label>
            <input type = "checkbox" defaultChecked={AStatus} onChange = {()=>setAcceptstatus(!AStatus)}></input>
            <label>Reject Status</label>
            <input type = "checkbox" defaultChecked={RStatus} onChange = {()=>setRejectstatus(!RStatus)}></input>
          </div>
        </button>
      </div>
      {showDetail && 
        <DetailCard algo_questions={algo_questions}  system_design={system_design} behavioral_questions={behavioral_questions} setShowDetail={setShowDetail}/>
      }
    </>
  )
}

export default SimpleCard;