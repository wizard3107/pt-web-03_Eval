import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginData, setLoginData] = React.useState({})
    const changeHandler = (e) => {
        const { name, value } = e.currentTarget
        console.log(loginData)
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const navigate = useNavigate()
    const login_Handle = (e) => {
        e.preventDefault();
        console.log("lhjgfgxdfzsd")
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.token)
                navigate("/")
            }
            )
            .catch((err) => console.log(err))
    }

    return (
        <div >
            <form onSubmit={login_Handle} >
            <input type="text" name="username"  placeholder='Username' onChange={(e) => changeHandler(e)} />
            <input type="password" name="password"  placeholder='Password' onChange={(e) => changeHandler(e)} />
            <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
