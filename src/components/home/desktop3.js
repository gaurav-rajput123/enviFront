import React from "react";
import { useGlobalContext } from "../../components/context";


export default function Desktop3() {
    const { data:[,,d3] } = useGlobalContext();


    return <section className="desktop3">
        <h1>Why?</h1>
        <img src={process.env.PUBLIC_URL + "Why.jpg"} alt="solar benefits" style={{
            objectFit: "contain"
        }}/>
        <h3 dangerouslySetInnerHTML={{__html:d3.footer}}></h3>
        

        


    </section>;
}

 {/* <div className="solar-benefits">

        {d3.p.split('\n').map((text,index) => {
            return <p key={index}>{text}</p>;
        })}
       
        </div> */}