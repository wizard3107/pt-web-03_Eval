import React, { useState } from 'react'
import styles from './wishlist.module.css' 
const Wishlist = () => {
    const [value, setValue] = useState("")
    const [wishlist, setWishlist] = useState([]);
    const addWishlist = () => {
        if(value!==""){
            setWishlist([...wishlist, value]);
            console.log(value);
            console.log("wishlist", wishlist);
            setValue("");
        }
        else 
        alert("You should wish something")
    }
    return (
        <div className={styles.wishlist}>
            <h1 className={styles.heading}>WISHLIST</h1>
            <input type="text" className={wishlist.length < 3 ? styles.input_fld : styles.disp_none} value={value} onChange={(e) => setValue(e.currentTarget.value)} placeholder="add item to your wishlist"/>
            <button onClick={addWishlist} className={wishlist.length<3?styles.btn:styles.disp_none}>Add</button>
            <div className={wishlist.length < 3 ? styles.disp_none : styles.message }>
                <h1>You cannot add more than 3 items to wishlist</h1>
            </div>
            {
                wishlist.map((item)=>{
                    return <h3 className={styles.wishes}>{item}</h3>
                })
            }
        </div>
    )
}

export default Wishlist
