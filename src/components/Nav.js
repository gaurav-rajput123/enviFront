import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context"
import logo from './logo.PNG'
function Nav() {





  const { toggleNav, navOpen } = useGlobalContext();
  const navMenu = useRef(null);
  const navAnimate1 = useRef(null);
  const navAnimate2 = useRef(null);
  const navAnimate3 = useRef(null);
  const { pathname } = useLocation();//for showing active component on navbar



  return <nav>
    <div className="Logo">
    <Link to="/">

    <figure>

    <img src={logo} alt="logo" />
    <figcaption>Flowering the Future</figcaption>
    </figure>
    </Link>
    </div>
    <div className="nav-icon" onClick={toggleNav}>
      <div className={`up ${navOpen ? 'expand-1' : null}`} ref={navAnimate1}> </div>
      <div className={`mid ${navOpen ? 'expand-2' : null}`} ref={navAnimate2}> </div>
      <div className={`low ${navOpen ? 'expand-3' : null}`} ref={navAnimate3}> </div>
    </div>

   
      <ul ref={navMenu} className={`navbar-links ${navOpen ? 'mobile-nav-open' : 'mobile-nav-close'}`} onClick={toggleNav}   >


        

        <li className={pathname === '/' ? "activeStyle" : null}>
          <Link to="/">

            Home
          </Link>
        </li>



        {/* <li className={pathname === '/about' ? "activeStyle" : null}>
          <Link to="/about">
            About
        </Link>
        </li> */}



        {/* <li className={pathname === '/faq' ? "activeStyle" : null}>
          <Link to="/faq">
            FAQ
        </Link>
        </li> */}



        <li className={pathname === '/invest' ? "activeStyle" : null}>
          <Link to="/invest">
            Invest
        </Link>

        </li>



        {/* <li className={pathname === '/shop' ? "activeStyle" : null}>
          <Link to="/shop">
            Shop
        </Link>
        </li> */}



        {/* <li className={pathname === '/community' ? "activeStyle" : null}>
          <Link to="/community">
            Community
        </Link>
        </li> */}



        <li className={pathname === '/blogs' ? "activeStyle" : null}>
          <Link to="/blogs">
            Blog
        </Link>
        </li>



        <li>
          <Link to="contact">
            <button>Get In touch</button>
          </Link>
        </li>

        <li>
          <a className="hoverStop" href="https://www.envinovastore.com"><button style={{
            backgroundColor: "#f5a9a9"
          }} >Go to Store</button></a>
            
          {/* </Link> */}
        </li>

      </ul>
   

  </nav>

}
export default Nav;