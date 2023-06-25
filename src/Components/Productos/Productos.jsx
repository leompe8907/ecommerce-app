import React from 'react';
import "./Productos.css"

const Productos = ({ products }) => {
  return (
    <div className='productInfotmationGeneral'>
        {products.map((product) => (
          <div className='prodcutInformation' key={product.id}>
              <div className='productImg'><img className='productoImg' src={product.img} alt={product.alt} /></div>
              <div className='productDescription'>
                <div>
                  <h4>{product.nombre}</h4>
                </div>
                <div>
                  <p>{product.descripcion}</p>
                </div>
                <div>
                  <p>{product.precio}</p>
                </div>
              </div>
              <div className='productButton'> <button className='Button'>Agregar</button> </div>
          </div>
        ))}
    </div>
  );
};

export default Productos;


