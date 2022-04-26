

import { useState } from 'react';
import Card from './components/Card';
import menu from './menu'
function App() {
  const [items,chItems]=useState()
  const menuCard=menu.map(men=>{
    return <Card name={men.name} price={men.price} img={men.img} />
  })
  return (
    <div className="App">
      <div className='Container'>
      <div className='list'>

      </div>
       <div className='menu'>
        {menuCard}
       </div>
      </div>
    </div>
  );
}

export default App;
