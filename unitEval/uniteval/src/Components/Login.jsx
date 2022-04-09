import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { get_token } from '../Redux/Action'
const Login = () => {
    const [loginData, setLoginData] = React.useState({})
    const dispatch=useDispatch();
    const login_token=useSelector(state=>state.login_token)
    const logged_in = useSelector(state => state.logged_in)
    const changeHandler = (e) => {
        const { name, value } = e.currentTarget
        console.log(loginData)
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    console.log(login_token,logged_in)
    const navigate = useNavigate()
    const login_Handle = (e) => {
        e.preventDefault();
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.token)
                if(res.token)
                {
                    dispatch(Login(true))
                    dispatch(get_token(res.token))
                }
            }
            )
            .then(()=>{
                console.log("checking ")
                navigate("/")
            }
            )
            .catch((err) => console.log(err))
    }

    return (
        <div >
            <form onSubmit={login_Handle} >
                <input type="text" name="username" placeholder='Username' onChange={(e) => changeHandler(e)} />
                <input type="password" name="password" placeholder='Password' onChange={(e) => changeHandler(e)} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
