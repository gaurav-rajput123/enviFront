import React from "react";
import { useGlobalContext } from "../context";

export default function Desktop7() {
  const { data: [, , , , , , d7] } = useGlobalContext();
  return <section className="desktop7">
    <div className="download-wrapper">

      <div className="app-view">
        <img src={process.env.PUBLIC_URL + "app-image.jpg"} alt=""></img>

      </div>
      <div className="download-app">
        <h1> {d7.h1}</h1>
        <h3>{d7.h3} </h3>
        <h4>{d7.h4}</h4>
        <ul>
          {d7.li.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
        <a href="/"><img id="applestore"src={process.env.PUBLIC_URL+'applestore.png'} alt="get it on apple store"></img></a>
        <a href='/'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
      </div>

    </div>

  </section>;

}