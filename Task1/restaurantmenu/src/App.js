

import { useEffect, useState } from 'react';
import Card from './components/Card';
import menu from './menu'
import List from './components/List';
function App() {
  const [items,chItems]=useState(JSON.parse(localStorage.getItem("items")) || [] )
  const [bill,chBill]=useState(Number(localStorage.getItem("bill"))||0)
  const menuCard=menu.map(men=>{
    return <Card name={men.name} price={men.price} img={men.img} item={items} addItem={chItems} bill={bill} changeBill={chBill}/>
  })
  const listItem=items.map(item=>{
    return <List name={item.name} amount={item.amount} delete={chItems} item={items} />

  })
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
    localStorage.setItem("bill",bill)
  },[items])
  return (
    <div className="App">
      <div className='Container'>
      <div className='list'>
        <h1>Selected Items</h1>
        {listItem}
        <div> 
                <h1>Total Bill:{bill}</h1>
                <button>Pay & order </button>
            </div>
      </div>
       <div className='menu'>
        {menuCard}
       </div>
      </div>
    </div>
  );
}

export default App;
