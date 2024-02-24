import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
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
      <h2>Users</h2>
      <ul>
        {products.map((product) => (
          <li key={product.ID}>
            <h3>{product.Firstname}</h3>
            <p>{product.Lastname}</p>
            <p>Price: {product.Email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
