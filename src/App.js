import { useState } from "react";
import Categories from "./Categories";
import MenuItems from "./Menu";
import items from'./data';
const allCategories=['all', ...new Set(items.map((item)=>item.category))]
function App() {
  const[menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState(allCategories);

const filterItems=(category)=>{
if(category==='all')
{
setMenuItems(items);
return;
}
  const newItems=items.filter((item)=>item.category === category);
  setMenuItems(newItems);
}
  return (
    <div>
      <section className="menu-section">
       <div className="title">
       <h2>Our Menu</h2>
        <div className="underline"></div>
       </div>
        
          <Categories  categories={categories} filterItems={filterItems}/>
           <MenuItems items={menuItems}/>   
      </section>
    </div>
  )
}

export default App;
