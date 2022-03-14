import React from "react";
import styles from "../../styles/about.module.css";
export default function About() {
    return <section className={styles.about}>
        <div className={styles.aboutHeader}>

            <img src={process.env.PUBLIC_URL + 'AboutUs.png'} alt="" className={styles.mainImg}></img>
            <h1><span style={{ color: "#89BEEF" }}>Better.</span><span style={{ color: "#162A46" }}>Brighter</span></h1>
            <h3>“A little birdie tells us that fruits of your own labour taste the<br />sweetest”</h3>
        </div>
        {/* <div className={styles.whoWhat} style={{ backgroundImage: 'url(about_back.jpg)' }}>
            <h1>Who?</h1>
            <h3>enviNova Smartech is a new-age startup with an outlook that aspires to contribute towards a sustainable environment and combat the climate crisis that our planet is thriving on. </h3>
            <h1>What?</h1>
            <h3>We at enviNova Smartech move forward with the following goals as our vision to provide you with the best experience:</h3>
        </div> */}
        {/* <div className={styles.spiral}>
            <img src={process.env.PUBLIC_URL + 'curve.png'} alt=""></img>
            <h1 id={styles.G1}>G1</h1>
            <h1 id={styles.G2}>G2</h1>
            <h1 id={styles.G3}>G3</h1>
            <h1 id={styles.G4}>G4</h1>
            <h3 id={styles.g1H3}>Sustainable</h3>
            <h3 id={styles.g2H3}>Suitable</h3>
            <h3 id={styles.g3H3}>Serviceable</h3>
            <h3 id={styles.g4H3}>Satiable</h3>
            <p className={styles.g1p}>
                A different and new nuance  to solar energy aiming at contributing to combat the cause of climate crisis around the world.
            </p>
            <p className={styles.g2p}>
                A one-stop solution for all your concerns. We assist in choosing the best option as well as aid with a gamut of financing options.
            </p>
            <p className={styles.g3p}>

                We deliver your system to your doorstep. Customer support is our priority and our dedicated team is one call away.
            </p>
            <p className={styles.g4p}>
                Become a part of enviNova community and avail exciting rewards by participating in weekly challenges.

            </p>
        </div> */}
        {/* <div className={styles.vision}>
        <h1>Vision</h1>
        <h3>“Incorporating change today to secure a<br/>tomorrow.”</h3>
        <p>Arjun Mittal</p>
        <p>(Founder & CEO)</p>

        </div> */}
    </section>
}