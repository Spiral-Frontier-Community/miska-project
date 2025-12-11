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

      {/* Single Product Showcase - 80% Width, Fullscreen Feel */}
      <section id="products" className={styles.singleProductSection}>
        <div className={styles.singleProductContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ผลิตภัณฑ์แนะนำ</h2>
            <p className={styles.sectionSubtitle}>
              นวัตกรรมความสะอาดระดับการแพทย์ เพื่อสุขภาพที่ดีของคุณ
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
            <h3 className={styles.visionTitle}>วิสัยทัศน์</h3>
            <p className={styles.visionText}>
              ขับเคลื่อนนวัตกรรมด้านความสะอาดและสุขภาพสู่ระดับการแพทย์
              เพื่อยกระดับคุณภาพชีวิตของผู้คน ตั้งแต่ที่อยู่อาศัย ชุมชน
              จนถึงการให้คำปรึกษาอย่างยั่งยืนและเป็นรูปธรรม
            </p>
          </div>

          <div className={styles.visionCard}>
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