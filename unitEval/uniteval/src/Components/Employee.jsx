import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { add_data } from '../Redux/Action'
import styles from './styles.module.css'
const Employee = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const data=useSelector(state=>state.employee_data)
  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => dispatch(add_data(res)))
  }, [])

return (
  <div>
    <button onClick={() => {
      navigate("/employees/create")
    }} className={styles.submitBtn}>Create Employee</button>
    {
      data.map((item) => {
        return <div className={styles.detailsConatiner} >
          <h3 className={styles.H3}>Name : {item.name}</h3>
          <h3 className={styles.H3}>Age : {item.age}</h3>
          <h3 className={styles.H3}>Gender : {item.gender}</h3>
          <h3 className={styles.H3}>Mobile Number : {item.mobile}</h3>
          <h3 className={styles.H3}>salary : {item.Salary}</h3>
          <button onClick={() => {
            navigate(`/employees/:${item.id}/edit`)
          }}>Edit</button>
          <Link to={`/employee/${item.id}`}>See Details</Link>

        </div>
      })
    }
  </div>
)
}

export default Employee
