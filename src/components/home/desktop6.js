import React from "react";
import {Link}from "react-router-dom";
import {useGlobalContext} from "../context"

export default function Desktop6()
{
    const {data:[,,,,,d6]}=useGlobalContext();
    
    return <section className="desktop6">
        <div className="product-range">
        <h1 id="product-range-h1">
            Product<br/>Range
        </h1>
        <h5>
            Serving beyond ordinary
        </h5>
       
        </div>

     
        <div className="product-type">
        <div id="Residential">

        <h1>{d6.residential.h1}</h1>
        <p>{d6.residential.p}</p>

        </div>
        <div id="Commercial">

        <h1>{d6.commercial.h1}</h1>
        <p>{d6.commercial.p}</p>
        </div>


        </div>
        <Link to="/shop">

        <button >Shop Now</button>
        </Link>
        

    </section>;
}