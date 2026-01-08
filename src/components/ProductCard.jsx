import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, clickCount, onProductClick }) => {
   // List of products - can be changed here
   const products = [
      {
         id: 1,
         name: 'Item 1',
         desc: '',
         image: '/images/products/miska_product4.jpg'
      },
      {
         id: 2,
         name: 'Item 2',
         desc: '',
         image: '/images/products/miska_product5.jpg'
      },
      {
         id: 3,
         name: 'Item 3',
         desc: '',
         image: '/images/products/miska_product3.jpg'
      },
      
   ];

   const handleClick = (product) => {
      if (onProductClick) onProductClick(product);
   };

   return (
      <div className={styles.productsGrid}>
         {products.map(product => (
            <div
               key={product.id}
               className={`${styles.card} ${product.id === 1 ? styles.largeCard : styles.smallCard}`}
               onClick={() => handleClick(product)}
            >
               <div className={styles.imageContainer}>
                  <img
                     src={product.image}
                     alt={product.name}
                     className={styles.productImage}
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default ProductCard;