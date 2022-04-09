import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.NavLink}>Home</Link>
            <Link to="/employee" className={styles.NavLink}>Employees</Link>
            <Link to="/register" className={styles.NavLink}>Register</Link>
            <Link to="/login" className={styles.NavLink}>LogOut</Link>
        </div>
    )
}

export default Navbar
