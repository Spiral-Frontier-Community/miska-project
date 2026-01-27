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
              บริษัท มายด์ ทู มิส เวลแคร์ จำกัด พัฒนาผลิตภัณฑ์ดูแลเส้นผมและหนังศีรษะที่เน้นความสะอาดความอ่อนโยน ภายใต้แบรนด์ Miska ดรายแชมพูที่ช่วยให้ผมรู้สึกสะอาด สดชื่น ลดกลิ่นอับ โดยไม่ต้องใช้น้ำ เหมาะสำหรับผู้ป่วยหรือผู้พักฟื้นที่สระผมลำบาก ผู้ที่ทำกิจกรรมกลางแจ้ง รวมถึงผู้ที่ต้องการความสะดวกในชีวิตประจำวัน เพื่อให้การดูแลเส้นผมเป็นเรื่องง่ายและสบายในทุกสถานการณ์
            </p>
          </div>
        </div>
      </section>

      {/* Single Product Showcase - 80% Width, Fullscreen Feel */}
      <section id="products" className={styles.singleProductSection}>
        <div className={styles.singleProductContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ผลิตภัณฑ์</h2>
            {/* <p className={styles.sectionSubtitle}>
              Lorem ipsum dolor sit amet
            </p> */}
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
              เรามุ่งเน้นการพัฒนานวัตกรรมด้านความสะอาดและสุขภาพสู่ระดับการแพทย์ 
              เพื่อยกระดับคุณภาพชีวิตของผู้คน 
              ตั้งแต่ที่อยู่อาศัย ชุมชน 
              ไปจนถึงการให้คำปรึกษาที่สามารถนำไปใช้ได้จริงและยั่งยืน
            </p>
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.visionTitle}>พันธกิจ</h3>
            <ul className={styles.missionList}>
              <li>1. พัฒนานวัตกรรมความสะอาดและสุขภาพมาตรฐานการแพทย์</li>
              <li>2. ยกระดับคุณภาพชีวิตของผู้คนและที่อยู่อาศัยให้มีความเป็นอยู่ที่ดี มีคุณค่า และยั่งยืน</li>
              <li>3. เสริมพลังชุมชนและวิสาหกิจท้องถิ่นสู่เศรษฐกิจสุขภาพที่เติบโตและยั่งยืน</li>
              <li>4. ถ่ายทอดองค์ความรู้และให้คำปรึกษาเพื่อพัฒนาศักยภาพและโอกาสทางธุรกิจ</li>
              <li>5. ดำเนินธุรกิจด้วยความจริงใจ โปร่งใส และรับผิดชอบต่อสังคม</li>
            </ul>
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.visionTitle}>เกี่ยวกับ Miska</h3>
            <p className={styles.visionText}>
              บริษัท มายด์ ทู มิส เวลแคร์ จำกัด พัฒนาผลิตภัณฑ์ดูแลเส้นผมและหนังศีรษะที่เน้นความสะอาดความอ่อนโยน ภายใต้แบรนด์ Miska ดรายแชมพูที่ช่วยให้ผมรู้สึกสะอาด สดชื่น ลดกลิ่นอับ โดยไม่ต้องใช้น้ำ เหมาะสำหรับผู้ป่วยหรือผู้พักฟื้นที่สระผมลำบาก ผู้ที่ทำกิจกรรมกลางแจ้ง รวมถึงผู้ที่ต้องการความสะดวกในชีวิตประจำวัน เพื่อให้การดูแลเส้นผมเป็นเรื่องง่ายและสบายในทุกสถานการณ์
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;