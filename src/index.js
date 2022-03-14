import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {AppProvider} from "./components/context";
import Loading from "./components/loading/loading";




ReactDOM.render(
  
  <Router>
  <Suspense fallback={<Loading/>}>

   <AppProvider>

    <App/>   
   </AppProvider>
  </Suspense>
   </Router>
    
  ,
  document.getElementById('root')
);



