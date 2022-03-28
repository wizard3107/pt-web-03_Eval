import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogOut</Link>
        </div>
    )
}

export default Navbar
