function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE-ANSWER':
            {
                let newState=[...state.answerState];
                newState[action.payload]=!newState[action.payload];
               

                return {
                    ...state,answerState:newState
                }
            }


        case 'TOGGLE-NAV':
            {
                const body=document.querySelector('body');
                if(window.innerWidth<960)// prevents onClick event on desktop to addclass 'fixed'  
                {

                    if(!state.navOpen)
                    {
                        body.classList.add('fixed');//stop scrolling in mobile when navbar is open;
                    }
                    else
                    {
                        body.classList.remove('fixed');
                        
                    }
                    return { ...state,navOpen:!state.navOpen};
                        
                }
                
                return {...state};
              
            }
        case 'AUTHENTICATED':
            {
                
                return {
                    ...state,authenticated:true
                }
            }


        case 'LOGOUT':
            {
                return {
                    ...state,authenticated:false
                }
            }
        case 'ADMIN':
        {
            return{
                ...state,admin:true
            }
        }
        default: throw Error('no matching action');
    }

}
export default reducer;