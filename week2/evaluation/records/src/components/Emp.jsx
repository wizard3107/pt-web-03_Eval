import React, { useEffect} from 'react'
import EmpInput from './EmpInput'
import EmpList from './EmpList'

const Emp = () => {
    const[emp,setEmp]=React.useState([])
    const [employees,setEmployees]=React.useState([]);
    useEffect(()=>{
            get_emp()
        }
    ,[])
    const get_emp=()=>{
        fetch('http://localhost:3000/employee')
            .then(res => res.json())
            .then(res => {setEmployees(res)
            setEmp(res)})
            .catch(err => console.log(err))
    }
    const Add_Emp=(data)=>{
        fetch("http://localhost:3000/employee",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>setEmployees([...employees,res]))
        .catch(err=>console.log(err))
        get_emp();
    }
    const showAll=()=>{
        console.log("showALL")
        setEmp(employees)
    }
    const showIT=()=>{
        console.log("showIT")
        const data = employees.filter((ele) => {
            if (ele.dept === "IT") {
                return ele
            }
        })
        setEmp(data);
    }
    const showHR=()=>{
        console.log("showHR")
        const data = employees.filter((ele) => {
            if (ele.dept === "HR") {
                return ele
            }
        })
        setEmp(data);
    }
    const showfin=()=>{
        console.log("showFinace")
        const data = employees.filter((ele) => {
            if (ele.dept === "Finance") {
                return ele
            }
        })
        setEmp(data);
    }
    const showMarketing=()=>{
        console.log("showMArketting")
        const data= employees.filter((ele)=>{
            if(ele.dept==="Marketting")
            {
                return ele
            }
        })
        setEmp(data);
    }
    const Ascending=()=>{
        fetch('http://localhost:3000/employee?_sort=salary&_order=asc')
        .then(res=>res.json())
        .then(res => setEmp(res))
        .catch(err=>console.log(err))
    }
    const Desecending=()=>{
        fetch('http://localhost:3000/employee?_sort=salary&_order=desc')
            .then(res => res.json())
            .then(res => setEmp(res))
            .catch(err => console.log(err))
    }
  return (
    <div>
      <EmpInput Add_Emp={Add_Emp}/>
      <div className='emp_filter'>
            <button onClick={showAll}>Show All Departments</button>
              <button onClick={showMarketing}>Show Marketting</button>
              <button onClick={showHR}>Show HR</button>
              <button onClick={showIT}>Show IT</button>
              <button onClick={showfin}>Show Finance</button>
      </div>
      <div className='emp_sort'>
            <button onClick={Ascending}>Sort By Salary Ascending</button>
              <button onClick={Desecending}>Sort By Salary Decending</button>
      </div>
      {
              emp.map((ele) => <EmpList key={ele.id} item={ele}/>
          )

      }
    </div>
  )
}

export default Emp
