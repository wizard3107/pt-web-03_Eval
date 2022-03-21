import React from 'react'

const EmpInput = ({Add_Emp}) => {
    const [name, setName] = React.useState("");
    const [dept, setDept] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState("");

    const handle_submit=()=>{
        const data={
            name,
            dept,
            gender,
            role,
            salary:Number(salary)
        }
        if(name===""||dept===""||gender===""||role===""||salary==="")
        alert("fill all the field")
        else
        Add_Emp(data)
        setDept("");
        setGender("");
        setName("");
        setRole("");
        setSalary("");
        console.log(data)
    }
    return (
        <div className='emp_input' >
            <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} placeholder="Name"/>
            <br />
            
            <input type="text" value={dept} onChange={e => setDept(e.currentTarget.value)} placeholder="Department"/>
            <br />
            
            <input type="text" value={gender} onChange={e => setGender(e.currentTarget.value)} placeholder="Gender"/>
            <br />
            
            <input type="text" value={role} onChange={e => setRole(e.currentTarget.value)} placeholder="Role"/>
            <br />
            
            <input type="text" value={salary} onChange={e => setSalary(e.currentTarget.value)} placeholder="salary"/>
            <br />
            <button onClick={handle_submit}>Add Employee</button>
        </div>
    )
}

export default EmpInput
