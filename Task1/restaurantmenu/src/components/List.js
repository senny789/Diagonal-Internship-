import { useState } from "react";
import menu from '../menu'
const List = (props) => {
    let pricingItem=menu.filter(men=>{
        return men.name===props.name
    })
    let itemPrice=pricingItem[0].price*props.amount
    return ( 
        <div>
            <h1> {props.name} x {props.amount} : {itemPrice}</h1>
            <button> Cancel </button>
            
        </div>
     );
}
 
export default List;