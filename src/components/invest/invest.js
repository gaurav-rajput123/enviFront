import React from "react";
import styles from "../../styles/invest.module.css";
export default function Invest() {
    return <section className={styles.invest}>
        <main>

            <h1 id={styles.solarInvestment}>Solar as an Investment</h1>
            <h1 id={styles.sayWht}>Say What?</h1>
            <h2>Sounds absurd right?<br /><span style={{ color: 'green' }}>Well,not anymore</span></h2>
            <figure>

                <img src={process.env.PUBLIC_URL + 'investment1.png'} alt=""></img>
                <figcaption>Let us understand the investment risk pyramid first.</figcaption>
            </figure>
        </main>
        <article className={styles.riskPyramid}>
            <div>
                <p className={styles.number}>
                    1
                </p>
                <p>
                    The pyramid comprises the low-risk investment kind lying at the base. It offers the least amount of investment in exchange for a lower rate of return.
                    (e.g. cash and cash equivalents or treasuring bills).
                </p>
            </div>

            <div>
                <p className={styles.number}>2</p>
                <p>Moving upwards, we come across the moderate risk of investment which implies stable returns and capital appreciation that is moderately fair returns on investment
                (e.g. income stocks or mutual fund)
                </p>
            </div>
            <div>
                <p className={styles.number}>3</p>
                <p>Following this stage comes the final stage of high risk that is indicative of higher gains. However, it points towards the equally high losses owing to its risk, to the speculative nature of the investments
                (e.g. cryptocurrencies)
                </p>
            </div>
        </article>
        <img src={process.env.PUBLIC_URL + 'pyramid.svg'} alt="" id={styles.pyramid}></img>
        <article className={styles.solarPyramid}>
            <h1>Where is Solar?</h1>
            <h3>Solar defies the pyramid</h3>
            <img src={process.env.PUBLIC_URL + 'ipyramid.svg'} alt=""></img>
        </article>
        <div className={styles.dyk}>
            <h1>Did you know?</h1>
            <p>The expense of setting up solar PV projects have dropped by about 80 per cent in India between 2010 and 2018.</p>
        </div>
        <div className={styles.brkEven}>
            <h1>Break-even<br />period</h1>
            <p>The break-even period comes within 3-5 years of installation. After that, the individual reaps the benefit of the smart-investment he made in solar energy. </p>
            <img src={process.env.PUBLIC_URL + 'investTime.png'} alt=""></img>
            <p>Solar PV systems do not fall subject to uncertainty and provide a steady and predictable cash flow for 20-30 years.
            The annual return of a solar investment is up to 32%.</p>
            <h2>Calculating break-even period</h2>
        </div>
        <div className={styles.calBrk}>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        Inital Investment :
                    </li>
                    <li>
                        Cost per  unit of electricity :
                    </li>
                    <li>
                        Units generated per day :
                    </li>
                    <li>
                        Units generated in a year :
                    </li>
                    <li>
                        Savings per year :
                    </li>
                    <li>
                        Break even period :
                    </li>
                    <li style={{fontSize:'0.8rem'}}>*Assuming a 3kwh system with subsidy given and 300 sunny days in a year.</li>
                </ul>

            </div>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        ₹1,00,000
                    </li>
                    <li>
                        ₹5 / kWH
                    </li>
                    <li>
                        15
                    </li>
                    <li>
                        4500
                    </li>
                    <li>
                    <span style={{color:'#007907'}}>

                        ₹22,500 
                    </span>
                    </li>
                    <li>
                    <span style={{color:'#007907'}}>

                        4.4 years
                    </span>
                    </li>
                </ul>
            </div>
            

        </div>
        <div className={styles.FD}>
            <h1>What if i had invested this sum of money in a bank Fixed deposit (F.D)?</h1>
            <p id={styles.p1}>
            The leading banks in country provide an interest rate of over 5-7% p.a for a fixed deposit over a tenure of 1- 5 years.
            </p>
            <p id={styles.p2}>
            Lets take rate of interest <span>6% p.a.</span> For a sum of <span>₹ 100,000,</span> your savings per year would be <span> ₹6000</span>. 
            </p>
            <p id={styles.p3}>
            For same amount of money invested in solar your savings per year would be <span>₹22,500</span>, and  will be continued for the next<span>25 years.</span>
            </p>
            <p id={styles.p4}>
            Also, if we add the inflation and rising electricty cost per unit,<br/><span>Congratulations!</span><br/> 
            Your savings just hit a jackpot.
            </p>
        </div>
        <img src={process.env.PUBLIC_URL+'solarSaving.jpg'} alt="" id={styles.solarSaving}></img>
        <img src={process.env.PUBLIC_URL+'SolarvFD.svg'} alt="" id={styles.solarVFD}></img>
        <div className={styles.chooseWisely}>
        <h3><u>At end of 25 years</u></h3>
        <h2>F.D. gives you : <span style={{color:'black',marginLeft:'3vw'}}>150,000+100,000=</span><span style={{color:'red'}}>₹250,00<sup>*</sup></span></h2>
        <h2>Solar gives you:<span style={{color:'black',marginLeft:'3vw'}}>562,500-100,000=</span><span style={{color:'green'}}>₹462,500</span></h2>
        <p>* It should be noted that only simple interest was caluclated for F.D as in solar you get the savings per year and not a whole amount at end of 25 years.</p>
        <h1>Choose Wisely!</h1>
        <img src={process.env.PUBLIC_URL+'choose.jpg'} alt=""></img>
        <p>
        Apart from the numerical and statistically factual benefits; We, are achieving much more out of this one-time smart-investment in clean energy. It is very significant for a healthy environment keeping in mind the light thrown on the recent surge of disturbing events implicative of the climate crisis. 
        </p>
        </div>
       


    </section>
}