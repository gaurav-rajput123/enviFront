import React from "react";
import styles from "../../styles/desktop4.module.css";
import { useGlobalContext } from "../context";


export default function Desktop4() {
    const { data:[,,,d4] } = useGlobalContext();
   

    return <section className={styles.desktop4}>
        <h1 id={styles.whatWeDo}>{d4.h1}</h1>
        <p id={styles.whatWeDoP}>{d4.p}</p>
       
        <div className={styles.spiral}>
            <img src={process.env.PUBLIC_URL + 'curve.png'} alt=""></img>
            <h1 id={styles.G1}>G1</h1>
            <h1 id={styles.G2}>G2</h1>
            <h1 id={styles.G3}>G3</h1>
            <h1 id={styles.G4}>G4</h1>
            <h3 id={styles.g1H3}>SUSTAINABILITY</h3>
            <h3 id={styles.g2H3}>SUITABILITY</h3>
            <h3 id={styles.g3H3}>SERVICE</h3>
            <h3 id={styles.g4H3}>SEEK SMART</h3>
            <p className={styles.g1p}>
            We provide you with a product range that is both commercial and residential. A futuristic technology that is new to solar energy and aims at contributing to the cause of climate change. So go ahead, browse your options and enquire us.</p>
            <p className={styles.g2p}>
            Of-course yes. We are a one-stop solution for all your concerns. We assist in choosing the best option as well as aid with a gamut of financing options.
            </p>
            <p className={styles.g3p}>

            We deliver your system to your doorstep. The installation process will approximately take two working days to complete. Since your support is our priority, our dedicated team of customer support is one call away
            </p>
            <p className={styles.g4p}>
            With the help of our advanced customer support, track your solar savings on our mobile app. Get an opportunity to become a part of our community and avail exciting rewards by participating in weekly goals.</p>
        </div>
    </section>;
}
