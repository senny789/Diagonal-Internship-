import { useState } from "react";

const Card = (props) => {
  const [selectedAmount,chNumber]=useState(0)
  const decrease=()=>{
      if(selectedAmount>0){
          chNumber(selectedAmount-1)
      }
  }
      return ( 
    <div className="Card">
      <img src={props.img}></img>
      <h1>{props.name}</h1>
      <p>Price:{props.price}</p>
      <button onClick={()=>decrease()}>-</button>
        <p>{selectedAmount}</p>
      <button onClick={()=>chNumber(selectedAmount+1)}>+</button>
    </div> 
    );
}
 
export default Card;