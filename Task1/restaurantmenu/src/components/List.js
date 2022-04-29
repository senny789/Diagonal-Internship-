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
        <div className="List">
            <ul> <li>{props.name} x {props.amount} : {itemPrice} <button onClick={del}>CANCEL</button></li></ul>
            
            
        </div>
     );
}
 
export default List;