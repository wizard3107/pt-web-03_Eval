import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add_data } from '../Redux/Action'
import styles from './styles.module.css'
const EmployeeCreate = () => {
  const [formData, setFormData] = React.useState({})
  const dispatch=useDispatch();
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
    fetch(" http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then(res=>setFormData({}))
      .then((res) => navigate("/Employee")
      )
      .catch((err) => console.log(err))
  }


  return (
    <div className={styles.formContainer}>
      <h1 >Add Employee</h1>
      <form onSubmit={submitHandler}>
      {/* // name, age, gender, contact number, image, department, salary */}
        <input type="text" name="name" placeholder='Enter Your Name' onChange={(e) => changeHandler(e)} className={styles.input}/>
        <br />
        <input type="text" name="age" placeholder='Enter your age' onChange={(e) => changeHandler(e)} className={styles.input} />
        <br />
        <input className={styles.input} type="text" name="mobile" placeholder='Enter Your Mobile No.' onChange={(e) => changeHandler(e)} />
        <br />
        <input type="text" className={styles.input} name="Salary" placeholder='Enter Your Salary' onChange={(e) => changeHandler(e)} />
        <br />
        <select name="Gender" className={styles.input} onChange={(e) => changeHandler(e)} >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <select className={styles.input} name="Department" id="" onChange={(e) => changeHandler(e)} >
          <option value="">Select Department</option>
          <option value="Marketting">Marketting</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
        <input className={styles.submitBtn} type="submit" value="Add Employee"/>

      </form>
    </div>
  )
}
export default EmployeeCreate
