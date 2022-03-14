import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

import { API } from '../../utils/constants'
import getCookie from "../../utils/getcookie";




export default function Dashboard () {
  const [user, setUser] = useState({});
  const { logout, admin, setRole } = useGlobalContext();




  useEffect(() => {
    const storage = window.localStorage;
    const userId = storage.getItem('userId');
    const userRole = storage.getItem('userRole');
    if (userRole === 'ENVINOVA_SMARTECH_ADMIN') {
      setRole();
    }

    const token = getCookie('token');

    fetch(`${API}/getUserInfo/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(async (res) => {
        const userData = await res.json();
        if (!res.ok) {
          return Promise.reject(userData.message);
        }
        else {

          setUser((user) => {
            return {
              ...userData
            }
          });




        }
      })
      .catch((err) => {
        console.log(err);
        logout();

      });



  }, []);



  function handleLogout () {

    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    logout();
  }


  return <>

    <h2>{user.firstname}</h2>
    <h2>{user.email}</h2>
    <button onClick={handleLogout}>Logout</button>
    {admin && <Link to="/create">Create</Link>}
    <br />

    {admin && <Link to="/createBlog">Create Blog</Link>}
  </>
}