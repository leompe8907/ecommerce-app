import React from 'react';

const Productos = ({ products }) => {
  return (
    <div>
      <h3>Productos</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.nombre}</h4>
            <p>{product.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;


