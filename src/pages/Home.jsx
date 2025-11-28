import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

const Home = ({ analytics, onProductClick, onScrollToProducts }) => {
  // Product data - you can move this to a separate data file later
  const products = [
    {
      id: 1,
      name: 'Miska Disinfectant Spray',
      desc: 'สเปรย์ฆ่าเชื้อโรคมาตรฐานการแพทย์ ฆ่าเชื้อได้ 99.9%',
      image: null // Replace with actual image path: '/images/products/disinfectant.png'
    },
    {
      id: 2,
      name: 'Miska Surface Cleaner',
      desc: 'น้ำยาทำความสะอาดพื้นผิว มาตรฐานโรงพยาบาล',
      image: null // Replace with: '/images/products/surface-cleaner.png'
    },
    {
      id: 3,
      name: 'Miska Hand Sanitizer',
      desc: 'เจลล้างมือแอลกอฮอล์ 70% ปกป้องเชื้อโรคได้ยาวนาน',
      image: null // Replace with: '/images/products/hand-sanitizer.png'
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <Hero onCTAClick={onScrollToProducts} />

      {/* Products Section */}
      <section id="products" className={styles.productsSection}>
        <div className={styles.productsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ผลิตภัณฑ์ของเรา</h2>
            <p className={styles.sectionSubtitle}>
              นวัตกรรมความสะอาดระดับการแพทย์ เพื่อสุขภาพที่ดีของคุณ
            </p>
          </div>

          <div className={styles.productGrid}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                clickCount={analytics.productClicks[product.name] || 0}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionSection}>
        <div className={styles.visionContainer}>
          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🎯</div>
            <h3 className={styles.visionTitle}>วิสัยทัศน์</h3>
            <p className={styles.visionText}>
              ขับเคลื่อนนวัตกรรมด้านความสะอาดและสุขภาพสู่ระดับการแพทย์
              เพื่อยกระดับคุณภาพชีวิตของผู้คน ตั้งแต่ที่อยู่อาศัย ชุมชน
              จนถึงการให้คำปรึกษาอย่างยั่งยืนและเป็นรูปธรรม
            </p>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🚀</div>
            <h3 className={styles.visionTitle}>พันธกิจ</h3>
            <ul className={styles.missionList}>
              <li>พัฒนานวัตกรรมความสะอาดและสุขภาพมาตรฐานการแพทย์</li>
              <li>ยกระดับคุณภาพชีวิตของผู้คนและที่อยู่อาศัยให้มีความเป็นอยู่ที่ดี</li>
              <li>เสริมพลังชุมชนและวิสาหกิจท้องถิ่นสู่เศรษฐกิจสุขภาพที่ยั่งยืน</li>
              <li>ถ่ายทอดองค์ความรู้และให้คำปรึกษาเพื่อพัฒนาศักยภาพ</li>
              <li>ดำเนินธุรกิจด้วยความจริงใจ โปร่งใส และรับผิดชอบต่อสังคม</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;