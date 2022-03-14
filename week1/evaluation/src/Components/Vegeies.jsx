import React, { useState } from 'react'

const Vegeies = () => {
    const [tomato,setTomatoes]=useState(0);
    const [potato, setPotatoes] = useState(0);
    const [carrot, setCarrot] = useState(0);
    const [onion, setOnion] = useState(0);

    return (
    <div>
            <h1>Tomato{tomato > 0 ? "es" : ""} : {tomato} {tomato <= 1?"kg":"Kgs"}</h1>
        <button onClick={()=>setTomatoes(tomato+1)}>+</button>
        <button onClick={() => tomato>0?setTomatoes(tomato - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Potato{potato > 0 ? "es" : ""} : {potato} {potato <= 1 ? "kg" : "Kgs"}</h1>
        <button onClick={()=>setPotatoes(potato+1)}>+</button>
        <button onClick={() => potato>0?setPotatoes(potato - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Carrot{carrot > 0 ? "s" : ""} : {carrot}{carrot <= 1 ? "kg" : "Kgs"}</h1>
        <button onClick={()=>setCarrot(carrot+1)}>+</button>
        <button onClick={() => carrot>0?setCarrot(carrot - 1):alert("Quantity can not be less than 0")}>-</button>
            <h1>Onion{onion > 0 ? "s" : ""} : {onion} {onion <= 1 ? "kg" : "Kgs"}</h1>
        <button onClick={()=>setOnion(onion+1)}>+</button>
        <button onClick={() => onion>0?setOnion(onion - 1):alert("Quantity can not be less than 0")}>-</button>

    </div>
  )
}

export default Vegeies
