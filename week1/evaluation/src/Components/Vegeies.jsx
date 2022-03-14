import React, { useState } from 'react'
import styles from './vegeies.module.css'
const Vegeies = () => {
    const [tomato,setTomatoes]=useState(0);
    const [potato, setPotatoes] = useState(0);
    const [carrot, setCarrot] = useState(0);
    const [onion, setOnion] = useState(0);

    return (
    <div className={styles.Vegeies}>
            <h1 className={styles.heading}>Vegetables</h1>
            <h1>Tomato{tomato > 1 ? "es" : ""} : {tomato} {tomato <= 1?"kg":"Kgs"}</h1>
            <button className={styles.counter_btn} onClick={()=>setTomatoes(tomato+1)}>+</button>
            <button className={styles.counter_btn} onClick={() => tomato>0?setTomatoes(tomato - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Potato{potato > 1 ? "es" : ""} : {potato} {potato <= 1 ? "kg" : "Kgs"}</h1>
            <button className={styles.counter_btn} onClick={()=>setPotatoes(potato+1)}>+</button>
            <button className={styles.counter_btn} onClick={() => potato>0?setPotatoes(potato - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Carrot{carrot > 1 ? "s" : ""} : {carrot} {carrot <= 1 ? "kg" : "Kgs"}</h1>
            <button className={styles.counter_btn} onClick={()=>setCarrot(carrot+1)}>+</button>
            <button className={styles.counter_btn} onClick={() => carrot>0?setCarrot(carrot - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Onion{onion > 1 ? "s" : ""} : {onion} {onion <= 1 ? "kg" : "Kgs"}</h1>
            <button className={styles.counter_btn} onClick={()=>setOnion(onion+1)}>+</button>
            <button className={styles.counter_btn} onClick={() => onion>0?setOnion(onion - 1):alert("Quantity can not be less than 0")}>-</button>

    </div>
  )
}

export default Vegeies
