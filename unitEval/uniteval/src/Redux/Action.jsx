import {ADD_EMPLOYEE, LOGGED_IN, LOGIN_TOKEN} from './Actiontypes'
export const Login = (data)=>{
    return{
        type:LOGGED_IN,
        payload:data
    }
}
export const get_token = (data) => {
    return {
        type: LOGIN_TOKEN,
        payload: data
    }
}

export const add_data = (data) => {
    return {
        type: ADD_EMPLOYEE,
        payload: data
    }
}