import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebase from '../../firebase';
import Productos from '../../Components/Productos/Productos';

import "./ProductPage.css"

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore(firebase);
      const productsCollection = collection(db, 'Productos');
      let productsQuery = query(productsCollection);

      if (selectedCategory) {
        productsQuery = query(productsCollection, where('categoria', '==', selectedCategory));
      }

      const productsSnapshot = await getDocs(productsQuery);
      const productsData = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='Products-General'>
      <div className='Products-General-Category'>
        <div className='Products-title'>
          <h2>Categorías</h2>
        </div>
        <div className='Products-Category'>
          <ul>
            <li className='Products-Products' onClick={() => handleCategoryClick(null)}>Todos</li>
            <li className='Products-Products' onClick={() => handleCategoryClick('Electrónicos')}>Electrónicos</li>
            <li className='Products-Products' onClick={() => handleCategoryClick('Ropa')}>Ropa</li>
          </ul>
          {/* Agrega más botones según tus categorías */}
        </div>
      </div>
      <Productos products={products} />
    </div>
  );
};

export default ProductsPage;
