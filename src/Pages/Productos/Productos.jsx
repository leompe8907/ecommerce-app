import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from '../../firebase';
import "./Productos.css"

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const db = getFirestore(firebase);
      // la base de datos se llama productos asi que declarala igual en firebase
      const productsCollection = collection(db, 'Productos');
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = [];

      productsSnapshot.forEach((doc) => {
        const product = doc.data();
        productsData.push(product);
      });

      setProducts(productsData);
    };

    getProducts();
  }, []);
  console.log(products)
  const handlecard = async () => {
    return 0
  }

  return (
    <div className='prodcuto-container'>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img}/>
          <h3>{product.nombre}</h3>
          <p>Descripción: {product.descripcion}</p>
          <p>Precio: {product.precio}</p>
          <button onClick={handlecard}>Agregar</button>
          {/* Otros detalles del producto */}
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
