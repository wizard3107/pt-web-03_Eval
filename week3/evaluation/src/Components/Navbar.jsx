import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.routes} to="/">Home</Link>
            <Link className={styles.routes} to="/product">Products</Link>
            <Link className={styles.routes} to="/register">Register</Link>
            <Link className={styles.routes} to="/login">LogOut</Link>
        </div>
    )
}

export default Navbar
