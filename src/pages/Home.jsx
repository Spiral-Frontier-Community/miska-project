import React from 'react';
import HeroCarousel from '../components/Hero';
import ProductCard from '../components/ProductCard';
import KnowledgeSection from '../components/KnowledgeSection';
import styles from '../styles/Home.module.css';

const Home = ({ analytics, onProductClick, onScrollToProducts }) => {
  // Single featured product (80% width, fullscreen feel)
  const featuredProduct = {
    id: 1,
    name: 'Miska Disinfectant Spray',
    desc: 'สเปรย์ฆ่าเชื้อโรคมาตรฐานการแพทย์ ฆ่าเชื้อได้ 99.9% ปลอดภัยสำหรับทุกพื้นผิว เหมาะสำหรับใช้ในบ้าน สำนักงาน และสถานพยาบาล',
    image: '/images/products/miska_product2.png'
  };

  return (
    <div className={styles.home}>
      {/* Hero Carousel - REPLACED! */}
      <HeroCarousel />

      {/* Intro Block - NEW! First section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          {/* First Block - Title with lines */}
          <div className={styles.titleBlock}>
            <div className={styles.topLine}></div>
            <h1 className={styles.mainTitle}>ยินดีต้อนรับสู่</h1>
            <h2 className={styles.subtitle}>MISKA</h2>
            <div className={styles.bottomLine}></div>
          </div>

          {/* Second Block - Description */}
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Single Product Showcase - 80% Width, Fullscreen Feel */}
      <section id="products" className={styles.singleProductSection}>
        <div className={styles.singleProductContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Lorem Ipsum</h2>
            <p className={styles.sectionSubtitle}>
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className={styles.singleProductWrapper}>
            <ProductCard
              product={featuredProduct}
              clickCount={analytics.productClicks[featuredProduct.name] || 0}
              onProductClick={onProductClick}
            />
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <KnowledgeSection />

      {/* Vision & Mission Section - Side by Side */}
      <section className={styles.visionSection}>
        <div className={styles.visionContainer}>
          <div className={styles.visionCard}>
            <h3 className={styles.visionTitle}>Lorem ipsum dolor sit amet</h3>
            <p className={styles.visionText}>
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.visionTitle}>Lorem ipsum dolor sit amet</h3>
            <ul className={styles.missionList}>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;