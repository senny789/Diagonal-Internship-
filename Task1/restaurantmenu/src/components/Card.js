import { useState } from "react";

const Card = (props) => {
  const [selectedAmount,chNumber]=useState(0)
  const decrease=()=>{
      if(selectedAmount>0){
          chNumber(selectedAmount-1)
      }
  }
  const order=()=>{
      chNumber(0)    
      if(selectedAmount!== 0){
        let neme=props.name;
        const newItem={
            name:neme,
            amount:selectedAmount
        } 
        let newBill=props.price*selectedAmount
        console.log(newBill)
        props.addItem([...props.item,newItem])
        props.changeBill((props.bill)+newBill)
        console.log(props.bill)
    }
  }
      
  return ( 
    <div className="Card">
      <img src={props.img}></img>
      <h1>{props.name}</h1>
      <p>Price:{props.price}</p>
      <div className="Card-buttons">
        <button onClick={()=>decrease()} className="decrease">-</button>
        <p>{selectedAmount}</p>
        <button onClick={()=>chNumber(selectedAmount+1)} className="increase">+</button>
      </div>
      <button onClick={()=>order()}>Order</button>
      
    </div> 
    );
}
 
export default Card;