import React from "react";
import styles from "../../styles/community.module.css";
import Data from "./text";
import ThreeCol from "./threeCol";

export default function Com() {
    return <main className={styles.com}>
        <section className={styles.hero}>
            <h3>
                We're trying to create a community for <br />Sustainable Development.
        </h3>
            <h1>
                Rewards<br />Program
        </h1>
            <h3>
                Start earning <span style={{ color: '#BC8AB3' }}>Nova Coins</span> to redeem exciting rewards
        </h3>
            <img id={styles.flower50} src={process.env.PUBLIC_URL + 'flower50.png'} alt=""></img>

        </section>
        <section className={styles.works}>
            <h1 className={styles.subH1}>How it Works?</h1>
            <img src={process.env.PUBLIC_URL + 'comparison.png'} alt=""></img>
            <h1 className={styles.subH1}>Three Easy Steps</h1>
        </section>

        <ThreeCol row={Data[0]} />
        
        <h2 id={styles.save}><span style={{ fontSize: '4.6vw' }}>Savings</span> upto <span style={{ fontSize: '4.6vw' }}><strong>5%</strong></span><br /><span style={{ fontSize: '3.6vw' }}>on all your purchases</span></h2>
        <img id={styles.voucher} src={process.env.PUBLIC_URL + 'voucher.png'} alt=""></img>
        <h1 className={styles.subH1}>
            Ways to Earn
        </h1>
        <ThreeCol row={Data[1]} />
        <h1 className={styles.subH1}>
            Pretty Perks
        </h1>
        <ThreeCol row={Data[2]} />
        <h1 className={styles.subH1}>
            Challenges
        </h1>
        <section className={styles.challenge}>
            <p>
                The perspective for a sustainable tomorrow is yet to achieve. Therefore, to accomplish this goal, our mobile app offers a gamut of weekly challenges. By logging in to our mobile app, one can participate in these challenges to earn Nova Coins and exciting hampers.
            </p>
            <img src={process.env.PUBLIC_URL + 'app-image.jpg'} alt=""></img>
        </section>
        <section className={styles.contribution}>
            <h1>Contribution to Environment<br /><span style={{ fontSize: '9.5vw' }}>Solar</span></h1>
            <h1><span style={{ color: '#CD0303', textDecoration: 'line-through', fontSize: '4.7vw' }}>OUR's?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#219653', fontSize: '4.7vw' }}>
                YOUR's
            </span></h1>
            <p style={{ fontFamily: 'Ibarra Real Nova', fontSize: '2.5vw', color: '#828282' }}>For every<span style={{ color: '#162A46', fontSize: '3vw' }}>1 kW</span>of solar panel installed</p>
        </section>
        <img style={{ height: '90vmin', width: '100vw' }} src={process.env.PUBLIC_URL + 'solarContri.svg'} alt=""></img>
        <section className={styles.comDescribe}>
            <h1>enviNova<br />
                <span style={{ fontSize: '9vw' }}>Community</span></h1>
            <p>The clock is ticking away with every passing day making our planet move a step closer towards engaging itself in a series of irreparable changes. However, it is not the planet but the human race to question in such a deplorable state. </p>
            <img src={process.env.PUBLIC_URL + 'com_end.png'} alt=""></img>
            <p>Henceforth we at enviNova Smartech are striving towards attaining the benchmark of a sustainable tomorrow and intensively working towards strengthening our community and asking people to adopt a sustainable and healthy living. </p>
        </section>

    </main>
}