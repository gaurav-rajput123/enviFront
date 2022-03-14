import React, { useContext, createContext, useReducer} from "react";
import { data } from "../siteText/data";
import faqData from "../siteText/faqData";
import reducer from "../reducer";
const AppContext = createContext();

let answerState=new Array(faqData.section1.length+faqData.section2.length);
answerState.fill(false);



const AppProvider = ({ children }) => {
    let initialState={
        answerState:answerState,
        navOpen:false,
        authenticated:false,
        admin:false,
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    const toggleAnswer = (id) => {
        dispatch({type:'TOGGLE-ANSWER',payload:id})
    }
    function toggleNav()
    {
        dispatch({type:'TOGGLE-NAV'});
    }
    function auth()
    {
        dispatch({type:'AUTHENTICATED'});
    }
    function logout()
    {
        dispatch({type:'LOGOUT'});
    }
    function setRole()
    {
        dispatch({type:'ADMIN'});
    }
    


    return <AppContext.Provider value={{ data, faqData,toggleAnswer,toggleNav,auth,logout,setRole,...state}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);

}
export { AppContext, AppProvider };