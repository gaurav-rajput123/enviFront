import React from "react";
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

export default function Qbox({answerState,toggleAnswer,faqData})
{

    
    return   <div className="Qbox">
    {
        faqData.map((QA,index) => {
            return <article key={QA.id}>
                <h4>{QA.Q}
                    <div className="mbutton">
                    {/* {answerState[QA.id] ? <RemoveIcon onClick={() => toggleAnswer(QA.id)}/> : <AddIcon onClick={() => toggleAnswer(QA.id)} />} */}
                    </div>
                </h4>
                {answerState[QA.id] && <h5>{QA.A}</h5>}
            </article>;
        })
    }
</div>
}