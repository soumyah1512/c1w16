// reusable card component
import React from "react";
import styles from "./card.module.css"
import CartButton from './CartButton'
const GroceryItem = (props) => {
  console.log(props)
  const {discount,id,imgURL,mrp,sellingPrice,title} = props.item
  


  return( 
        <>
          <div className={styles.mainDiv}>
            <img src={imgURL} alt="product" />
            <h4>{title}</h4>
            <div className={styles.smallDiv}>
              <h3>{sellingPrice}</h3>
              <p>M.R.P:{mrp}</p>
            </div>
            <CartButton/>
          </div>
        </>)
};
export default GroceryItem;
