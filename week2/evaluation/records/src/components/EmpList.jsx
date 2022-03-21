import React from 'react'

const EmpList = ({item}) => {
  return (
    <div className='emp_card'>
          <h4>Name: </h4><h4>{item.name}</h4>
          <h4>Department: </h4><h4>{item.dept}</h4>
          <h4>Gender: </h4><h4>{item.gender}</h4>
          <h4>Role: </h4><h4>{item.role}</h4>
          <h4>Salary: </h4><h4>{item.salary}</h4>
    </div>
  )
}

export default EmpList
