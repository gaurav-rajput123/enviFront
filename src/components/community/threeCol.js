import React from "react";
import styles from "../../styles/community.module.css";
export default function threeCol({row})
{
   return <section className={styles.threeSteps}>
    {row.map((item,index)=>{
        return <div key={index}>
        <img src={process.env.PUBLIC_URL+`${item.img}.png`} alt=""/>
        <h2>{item.h2}</h2>
        <p dangerouslySetInnerHTML={{__html:item.p}}></p>
        </div>
    })

    }
    


</section>
}
