import React from 'react';

const ProductList = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const {id, title, img, desc, price} = item;
        return (
            <article key={item.id} className='menu-item'>
            <img src={item.img} alt={item.img} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{item.title}</h4>
                <h4 className='price'>{item.price}</h4>
              </header>
              <p className='item-text'>{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  )
};

export default ProductList;
