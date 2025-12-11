import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, clickCount, onProductClick }) => {
   const handleClick = () => {
      onProductClick(product);
   };

   return (
      <div className={styles.card} onClick={handleClick}>
         <div className={styles.imageContainer}>
            {/* Replace the placeholder with actual product image */}
            {/* Example: <img src={product.image} alt={product.name} className={styles.productImage} /> */}
            <img
               src={product.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23007bff' opacity='0.1' width='200' height='200' rx='10'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23007bff' font-size='60'%3E🧴%3C/text%3E%3Ctext x='50%25' y='65%25' text-anchor='middle' fill='%23666' font-size='12'%3EMISKA%3C/text%3E%3C/svg%3E`}
               alt={product.name}
               className={styles.productImage}
            />
         </div>

         <div className={styles.content}>
            <h3 className={styles.productName}>{product.name}</h3>
            {/* <p className={styles.productDesc}>{product.desc}</p> */}

            <div className={styles.footer}>
               {/* <span className={styles.clickCount}>
                  👆 Clicks: {clickCount || 0}
               </span> */}
               <button className={styles.learnMore}>
                  เรียนรู้เพิ่มเติม →
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;