import React from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [formData, setFormData] = React.useState({})
    const navigate = useNavigate()
    const changeHandler = (e) => {
        const { name, value } = e.currentTarget;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((res) => navigate("/login")
            )
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <h1 >Register Here</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder='Enter Your Name' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="password" name="password" placeholder='Password' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="text" name="username" placeholder='UserName' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="text" name="mobile" placeholder='Enter Your Mobile No.' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="text" name="description" placeholder='Enter Your Description' onChange={(e) => changeHandler(e)} />
                <br />
                <input type="submit" value="Redirect to login Page" />

            </form>
        </div>
    )
}

export default Register
