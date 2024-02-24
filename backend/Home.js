import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        response.json().then(json => {
            console.log(json);
            setProducts(json);
          });
      })
      
      
  }, );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.ID}>
            <h3>{product.Name}</h3>
            <p>{product.Description}</p>
            <p>Price: {product.Price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
