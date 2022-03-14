import React, { lazy, useEffect } from "react";
import './App.css';
import { useGlobalContext } from "./components/context";
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./components/Home";
import CreateBlog from './components/admin/createBlog';
const Invest = lazy(() => import("./components/invest/invest"));
const About = lazy(() => import("./components/aboutUs/aboutUs"));
const Blogs = lazy(() => import("./components/blog"));
const Blog = lazy(()=>import("./components/blog/singleBlog"));
const NF = lazy(() => import("./components/error"));
const Faq = lazy(() => import("./components/Faq/faq"));
const Footer = lazy(() => import("./components/footer"));
const Community = lazy(() => import("./components/community"));
const Create = lazy(() => import("./components/admin/create"));
const Login = lazy(() => import("./components/login/login"));
const Dashboard = lazy(() => import("./components/dashboard/dashboard"));


function App() {

  const { authenticated, admin } = useGlobalContext();
  const {pathname}=useLocation();
useEffect(()=>{
  window.scrollTo(0,0);
  
},[pathname]);

  return <>
    <Nav />

    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about"><About /></Route>
      {/* <Route exact path="/faq"><Faq /></Route> */}
      {/* <Route exact path="/shop"></Route> */}
      <Route exact path="/invest"> <Invest /></Route>

      {/* <Route exact path="/community"><Community/></Route> */}
      <Route exact path="/blogs"><Blogs/></Route>
      <Route exact path="/blogs/:blogId"><Blog/></Route>
      <Route exact path="/contact"></Route> {/* dummy route to Footer contact. When clicked only footer will show but it will prevent Error componenet from showing */}
      <Route exact path="/login"><Login /></Route>

      <Route exact path="/dashboard">{authenticated ? <Dashboard /> : <Redirect to="/login"></Redirect>}</Route>
      <Route exact path="/create">{admin ? <Create /> : <Redirect to="/login"></Redirect>}</Route>
      <Route exact path='/createBlog'>{admin ? <CreateBlog /> : <Redirect to="/login"></Redirect>}</Route>
      <Route path="*"><NF /></Route>
    </Switch>
    <Footer />

  </>;


}

export default App;
