import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebase from '../../firebase';
import Productos from '../../Components/Productos/Productos';

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
    <div>
      <h2>Categorías</h2>
      <div>
        <button onClick={() => handleCategoryClick(null)}>Todos</button>
        <button onClick={() => handleCategoryClick('Electrónicos')}>Electrónicos</button>
        <button onClick={() => handleCategoryClick('Ropa')}>Ropa</button>
        {/* Agrega más botones según tus categorías */}
      </div>

      <Productos products={products} />
    </div>
  );
};

export default ProductsPage;
