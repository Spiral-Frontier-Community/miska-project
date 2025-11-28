import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = ({ onCTAClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            นวัตกรรมความสะอาด<br/>
            มาตรฐานการแพทย์
          </h1>
          <p className={styles.heroSubtitle}>
            ยกระดับคุณภาพชีวิต ด้วยเทคโนโลจีระดับโลก
          </p>
          <button 
            className={styles.ctaButton}
            onClick={onCTAClick}
          >
            ดูผลิตภัณฑ์
          </button>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.productPreview}>
            {/* Replace this with actual product image */}
            {/* Example: <img src="/images/miska-product-hero.png" alt="Miska Product" className={styles.productImage} /> */}
            <img 
              // src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect fill='%23007bff' opacity='0.1' width='300' height='400' rx='20'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23007bff' font-size='24' font-weight='bold'%3EMISKA%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='%23666' font-size='14'%3EProduct Image%3C/text%3E%3C/svg%3E"
              src="/images/products/miska_product2.png"
              width="800"
              height="600"
              alt="Miska Product Placeholder"
              className={styles.productImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;