import { Box } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../context";


export default function Desktop2()
{
   const {data:[,d2]}=useGlobalContext();
   
    return  <section className ="desktop2" >
       <Box sx={{
          background: "white"
       }}>
    <h1 >{d2.h1}</h1>
    <div className="imageWrapper">
    <div className="road-img">
    <img  src={process.env.PUBLIC_URL+"road.jpg"} alt ="road"></img>
     
    </div>
    <div className="road-text">
    <h2>{d2.h2}</h2>
    <h6>Guaranteed up to <strong style={{color:"#162A46"}}>32% return</strong> on your investment. By investing your trust is us, you are investing in a future that is bright not just for you but for the planet as well. ​</h6>
    </div>
    </div>
    
    <ul>
     {d2.li.map((text,index)=>{
        return <li key={index}>{text}</li>

     })}
    </ul>
    <h3><span style={{color:'red'}}>Cut down </span>on your electricity bills by <span style={{color:'green'}}>saving upto <strong>₹7500 per kW</strong></span> annually</h3>
    </Box>
 </section>;
}