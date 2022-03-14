import React from "react";
import { useGlobalContext } from '../context';
import Qbox from "./Qbox";


export default function Faq() {


    const { faqData, toggleAnswer, answerState } = useGlobalContext();



    return <>
    <div className="faq">
        <img src={process.env.PUBLIC_URL+"faq.jpg"} alt=""></img>
        <h1>Frequently Asked<br/>Questions <br/>(FAQ's)</h1>
        <h2>Section-1:About Solar</h2>
        <Qbox answerState={answerState} toggleAnswer={toggleAnswer} faqData={faqData.section1}/>
        <h2>Section-2 : About enviNova</h2>
        <Qbox answerState={answerState} toggleAnswer={toggleAnswer} faqData={faqData.section2}/>
        
    </div>
    
    </>;

}