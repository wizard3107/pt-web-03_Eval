import {ADD_EMPLOYEE, LOGGED_IN, LOGIN_TOKEN} from './Actiontypes'
const initState={
    logged_in:false,
    login_token:null,
    employee_data:[]
}

export const reducer = (state=initState,{type,payload})=>{
    switch (type) {
        case LOGGED_IN:
            return {
                ...state,
                logged_in: payload
            }
        case LOGIN_TOKEN:
            return {
                ...state,
                login_token: payload
            } 
        case ADD_EMPLOYEE:
            return {
                ...state,
                employee_data:payload
            }       
        default: return state
    }
}

