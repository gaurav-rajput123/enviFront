import React from "react";
import { useGlobalContext } from "../context"
export default function Desktop5() {

    const { data:[, , , ,{d5}] } = useGlobalContext();
 
    
    


    return <section className="desktop5">
        <h1>How we do?</h1>
        <img src={process.env.PUBLIC_URL + "step.png"} className="step" alt="process" />
        <h1>The Art</h1>
        <div className="installation">
            {/* <img src={process.env.PUBLIC_URL + "design.jpg"} className="design" alt=""></img> */}
            <img src={process.env.PUBLIC_URL + "manufacture.jpg"} className="manufacture" alt=""></img>
            <img src={process.env.PUBLIC_URL + "order.jpg"} className="order" alt=""></img>
            <img src={process.env.PUBLIC_URL + "TRUCK.jpg"} className="truck" alt=""></img>
            <img src={process.env.PUBLIC_URL + "deliver.jpg"} className="deliver" alt=""></img>
            <img src={process.env.PUBLIC_URL + "rewards.jpeg"} className="rewards" alt=""></img>
            <img src={process.env.PUBLIC_URL + "money.jpeg"} className="money" alt=""></img>
            <img src={process.env.PUBLIC_URL + "arrow.png"} className="arrow" alt=""></img>
             <img src={process.env.PUBLIC_URL + "happy.png"} className="happy" alt=""></img>
            </div> 
            
          

           <div className="steps-container" >
            {
                d5.map((text, index) => {
                    return <div id={text.id} key={index} >

                        <h3>{text.h3}</h3>
                        <p>{text.p}</p>
                    </div>;
                    })
            }
        </div>
    <div className="the-artist">
        <h1>The Artist</h1>
        <img src={process.env.PUBLIC_URL+'logo.PNG'} alt=""></img>
        </div>


        

        

    </section>;
}