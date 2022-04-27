import { useState } from "react";
import menu from '../menu'
const List = (props) => {
    let pricingItem=menu.filter(men=>{
        return men.name===props.name
    })
    let itemPrice=pricingItem[0].price*props.amount
    let del=()=>{
        let newList=[...props.item]
        console.log(props.index)
        newList.splice(props.index,1)
        props.delete(newList)
        console.log(newList)
        let newBill=props.bill-(pricingItem[0].price*props.amount)
        props.changeBill(newBill)
        
    }
    return ( 
        <div>
            <h1> {props.name} x {props.amount} : {itemPrice}</h1>
            <button onClick={del}> Cancel </button>
            
        </div>
     );
}
 
export default List;