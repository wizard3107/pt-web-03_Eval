import React, { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './styles.module.css'
const EmployeeDetails = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(res => setData([...data,res]))
      .catch(err => console.log(err))
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
           
          </div>
        })
      }
    </div>
  )
}

export default EmployeeDetails
