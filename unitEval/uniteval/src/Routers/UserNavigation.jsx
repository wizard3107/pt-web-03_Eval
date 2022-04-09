import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Employee from '../Components/Employee';
import EmployeeCreate from '../Components/EmployeeCreate';
import EmployeeDetails from '../Components/EmployeeDetails';
import EmployeeEdit from '../Components/EmployeeEdit';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Navbar from '../Components/Navbar';
import Register from '../Components/Register';


const UserNavigation = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='employee' element={<Employee />} />
                <Route path='employee/:id' element={<EmployeeDetails />} />
                <Route path='employees/create' element={<EmployeeCreate/>}/>
                <Route path='employees/:id/edit' element={<EmployeeEdit/>}/>
            </Routes>
        </div>
    )
}

export default UserNavigation
