import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import styles from "./card.module.css"

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className={styles.container}>
            {/* map through the data and display the cards */}
            {data.map((item)=>{
                // console.log(title)
                return <GroceryItem key={item.id} item={item}/>
            })}
        </div>
        </>
    )
}
export default GroceryDetails