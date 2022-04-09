import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'
const Home = () => {
  const [data, setData] = React.useState([])
  const login_token = useSelector(state => state.login_token)

  const getData = () => {
    fetch("https://masai-api-mocker.herokuapp.com/user/", {
      method: "GET",
      headers: { Authorization: `Bearer ${login_token}` }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData([...data, res])
      })
      .catch((err) => console.log(err))
  }




  React.useEffect(() => {
    if (!login_token) {
      return
    }
    else {
      getData()
    }
  }, [login_token])
  return (
    <div>
      <h1 className={styles.user_details_heading}>User Info</h1>
      {data.length > 0 && data.map((item) => {
        return <div className={styles.detailsContainer}>
          <h3>Name : {item.name}</h3>
          <h3>Age : {item.age}</h3>
          <h3>Gender : {item.username}</h3>
          <h3>Mobile Number : {item.mobile}</h3>
          <h3>salary : {item.salary}</h3>
        </div>
      })}
    </div>
  )
}

export default Home
