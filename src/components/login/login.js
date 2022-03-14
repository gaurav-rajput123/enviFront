
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useGlobalContext } from "../../components/context";
import getCookieValueByName from "../../utils/getcookie";
import styles from '../../styles/login.module.css'
import { API } from '../../utils/constants'
export default function Login () {


    useEffect(() => {
        const cookie = getCookieValueByName('token');
        if (cookie !== "") {

            auth();
        }
    })


    const { auth, authenticated } = useGlobalContext();


    const [credentials, setCredentials] = useState({ email: '', password: '' });
    function handleChange (e) {
        let { name, value } = e.target;
        setCredentials((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    function handleLogin (e) {

        e.preventDefault();
        fetch(`${API}/login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }).then(
            async (res) => {
                const data = await res.json();
                if (!res.ok) {
                    return Promise.reject(data.message);
                }
                else {
                    console.log(data);
                    document.cookie = `token=${data.token}`;
                    const userStorage = window.localStorage;
                    userStorage.setItem('userId', data.userInfo.userId);
                    userStorage.setItem('userRole', data.userRole);
                    auth();


                }
            }
        ).catch(e => console.log(e));



        setCredentials({ ...credentials, email: '', password: '' });

    }

    return <div id={styles.loginForm}>

        <form>
            {authenticated && <Redirect to="/dashboard"></Redirect>}
            <label>username</label>
            <input type="text" value={credentials.email} onChange={handleChange} name="email"></input>
            <label>password</label>
            <input type="password" value={credentials.password} onChange={handleChange} name="password"></input>
            <button type="submit" onClick={handleLogin}>Login</button>



        </form>
    </div>
}