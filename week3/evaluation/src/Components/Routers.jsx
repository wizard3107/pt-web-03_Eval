import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import Products from './Products';
import Register from './Register';
const Routers = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='product' element={<Products />} />
                <Route path='products/:id' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default Routers
