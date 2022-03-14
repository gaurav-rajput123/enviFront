import React from "react";
import "../../styles/desktop1.css";


 export default function Desktop1 ()
 {         
     return<div className="desktop1">
     <h1 className="centered" >Your Aspiration,<br/>Our Inspiration</h1>
     <img src={process.env.PUBLIC_URL+"solar.jpg"} alt ="solar panel" />
     <h1 id="ComingSoon">Coming Soon</h1>
      </div>;

 }