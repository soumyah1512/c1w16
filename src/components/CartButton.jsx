import React from "react";
import styles from "./card.module.css"
import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] = useState(1)

    const handleAddToCart = () => {

    }

    const handleInc = () => {
      setCount((prevState)=>prevState+1)
    }
    const handleDec = () => {
      setCount((prevState)=>prevState-1)
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className={styles.but}>
      <button onclick={handleAddToCart}>Add to cart</button>
      
  </div>
  <div className={styles.but2}>
      <button onClick={handleDec}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={handleInc}>+</button>
  </div>
  </>;
};
export default CartButton
