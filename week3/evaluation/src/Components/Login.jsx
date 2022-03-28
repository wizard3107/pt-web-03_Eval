import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
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
        <div className={styles.login}>
            <form onSubmit={login_Handle} className={styles.form}>
            <input type="text" name="username" className={styles.input} placeholder='Username' onChange={(e) => changeHandler(e)} />
            <input type="password" name="password" className={styles.input} placeholder='Password' onChange={(e) => changeHandler(e)} />
            <input type="submit" value="Login" className={styles.submit} />
            </form>
        </div>
    )
}

export default Login
