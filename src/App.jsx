
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Categories from "./Categories";
import items from "./data";

//Get exist categories
const existCategories = items.map((item)=>item.category);
//create set of unique category
const myset = new Set(existCategories);
//create array categories contains 'all' and exist categories
const allCategories = ['all',...myset];

function App() {
  //create state for product items
  const [productItems, setProductItems] = useState(items);
  

  //create state for array categories
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setProductItems(items);
    }
    else{
      const filteredItems = items.filter(item => item.category === category);
      setProductItems(filteredItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={categories} filterItems={filterItems} />
      </section>
      {/* fill with state name*/}
      <ProductList items={productItems} />
      
    </main>
  );
}

export default App;

