import { Stack, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { v4 as uuidv4 } from 'uuid';
const AWS = require('aws-sdk')
// import { Email } from "./smtp";
export default function Desktop8() {
    const [name, setName] = useState("as")
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    return <section className="desktop8" id="#contact">
        <hr style={{ backgroundColor: "#162A46", height: "10px" }} />
        <h1>GET IN TOUCH</h1>
        <h3>​We’re happy to hear from you.<br /> Contact us today to learn more about solar.</h3>
        <div>

            {/* <div className="contactUs">

                <img src={process.env.PUBLIC_URL + "locationpin.png"} alt="" id="location-pin"></img>
                <h4>Block 3, UIET, Panjab University,
                Sector 25, Chandigarh 160014</h4>
                <img src={process.env.PUBLIC_URL + "mail-icon.png"} alt=""></img>
                <h4>care@envinovasmartech.com</h4>
            </div>
            <div>
                <TextField name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div> */}
            {/* <div className="contact-form"> */}
            {/* <form method="POST"> */}
            {/* <input name="name" required={true} type='text' placeholder="Name" autoComplete="off" /> */}
            {/* <TextField value={name} onChange={
                        (e)=>{
                            setName(e.target.value)
                        }
                    }
                    name="name"
                    type={'text'}/>
                    <br />
                    <input name="email" required={true} placeholder="Email" autoComplete="off" />

                    <br />
                    <input name="mobile" required={true} placeholder="Mobile" autoComplete="off" />

                    <br />
                    <input name="address" required={true} placeholder="Address" autoComplete="off" />

                    <br />
                    <textarea name="message" required={true} placeholder="Message" autoComplete="off" />
                    <br />

                    <button type='submit' onClick={(e) => e.preventDefault()}>Get in Touch</button> */}


            {/* </form> */}
            {/* </div> */}
            <Stack direction={"row"} paddingBottom="15px">
                <Box width={"50%"} paddingX={"5%"}>
                    <Stack height={"100%"} justifyContent="space-evenly" >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            height: "50px",
                            padding: "24px"
                        }}>
                            <LocationOnIcon sx={{
                                fontSize: "64px"
                            }} /><span style={{
                                width: "100%",
                                textAlign: "center"
                            }}><Typography component={'span'} fontSize={"18px"}>Block 3, UIET, Panjab University, Sector 25, Chandigarh 160014</Typography>
                            </span>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            height: "64px",
                            padding: "24px"
                        }}>
                            <EmailIcon sx={{
                                fontSize: "42px"
                            }} />
                            <span style={{
                                width: "100%",
                                textAlign: "center"
                            }}><Typography component={'span'} fontSize={"18px"}>care@envinovasmartech.com</Typography>
                            </span>
                        </div>
                    </Stack>
                </Box>
                <Box width={"50%"} paddingX={"15%"}>
                    <TextField variant="filled" name="name" placeholder="Enter your name" label="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    <br /><br />
                    <TextField variant="filled" name="email" placeholder="Enter your email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                    <br /><br />
                    <TextField variant="filled" name="mobile" placeholder="Enter your mobile number" label="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} fullWidth />
                    <br /><br />
                    <TextField variant="filled" name="Address" placeholder="Enter your Address" label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth />
                    <br /><br />
                    <TextField multiline rows={4} variant="filled" name="Message" placeholder="Enter your Message" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} fullWidth />
                    <br /><br />
                    <Button fullWidth variant={"contained"} onClick={async () => {
                        // let emailContent = `
                        //     my name is : ${name}
                        //     my mobile is: ${mobile}
                        //     my address is: ${mobile}

                        //     my message is: ${message}

                        // `

                        try {
                            let dynamoClient = new AWS.DynamoDB.DocumentClient({
                                accessKeyId: 'AKIAQCEPJ2OAY52SAY2I',
                                secretAccessKey: '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',
                                region: 'ap-south-1'
                            })

                            let response = await dynamoClient.put({
                                TableName: "Touch",
                                Item: {
                                    email: email,
                                    id: uuidv4(),
                                    mobile: mobile,
                                    address: address,
                                    message: message
                                }
                            }).promise()
                            console.log("success")
                            console.log(response)
                        } catch (e) {
                            console.log("error")
                            console.log(e)
                        }





                    }}>SEND MESSAGE</Button>
                </Box>
            </Stack>

        </div>



        <footer>

            <div className="legal">
                <p>
                    {new Date().getFullYear().toString()} enviNova Smartech. All rights reserved
                </p>
                <div style={{ flexGrow: 0.5 }} />
                <div className="social">
                    {/* <i className="fab fa-facebook-f fa-3x"></i> */}
                    <i className="fab fa-instagram  fa-3x"></i>
                    {/* <i className="fab fa-twitter fa-3x"></i> */}
                    <i className="fab fa-linkedin-in fa-3x"></i>
                </div>

            </div>
        </footer>





    </section>
}