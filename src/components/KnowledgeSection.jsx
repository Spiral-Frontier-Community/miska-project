import React from 'react';
import styles from '../styles/KnowledgeSection.module.css';

/**
 * Knowledge/Tips Section Component
 * Easy to update - just modify the knowledgeItems array
 * Client can add/remove items here without touching complex code
 */
const KnowledgeSection = () => {
   // ⭐ ADMIN: Edit this array to add/remove/update knowledge items

   const [selectedItem, setSelectedItem] = React.useState(null);

   const knowledgeItems = [
      {
         id: 1,
         title: 'TED Youth Startup Championship 2025',
         description: 'บริษัท มายด์ ทู มิส เวลแคร์ จำกัด เข้าร่วมโครงการ TED Youth Startup Championship 2025 และได้รับ รางวัลรองชนะเลิศอันดับหนึ่ง ระดับภูมิภาคตะวันออกเฉียงเหนือ จากการประกวดนวัตกรรมภายใต้การจัดของ TED Fund',
         imageSrc: '/images/news/news_pic_01.jpg',
         date: '2025' 
      },
      {
         id: 2,
         title: 'TED Youth Startup 2025\n(TED Fund – POC)',
         description: 'บริษัท มายด์ ทู มิส เวลแคร์ จำกัด ได้รับทุนสนับสนุนภายใต้โครงการ TED Youth Startup 2025 ในรูปแบบ TED Fund Proof of Concept (POC) สำหรับการพัฒนาผลงาน ผลิตภัณฑ์ทำความสะอาดเส้นผมและหนังศีรษะแบบไม่ใช้น้ำ ด้วย Micellar Technology',
         imageSrc: '/images/news/news_pic_02.jpg',
         date: '2025' 
      },
      {
         id: 3,
         title: 'TED Fund Grant Day 2025',
         description: 'บริษัท มายด์ ทู มิส เวลแคร์ จำกัด เข้าร่วมงาน TED Fund Grant Day 2025 เพื่อรับโล่รางวัล และแสดงความยินดีในฐานะหนึ่งในบริษัทที่ได้รับทุนสนับสนุนจาก TED Fund',
         imageSrc: '/images/news/news_pic_03_01.jpg',
         date: '2025'
      },
      {
         id: 4,
         title: 'VC Collab 2025',
         description: 'บริษัท มายด์ ทู มิส เวลแคร์ จำกัด เข้าร่วมโครงการ VC Collab 2025 และได้รับรางวัล “โดนใจ VC” ซึ่งเป็นอีกหนึ่งมุมมองสะท้อนถึงศักยภาพของแบรนด์และแนวทางการพัฒนาผลิตภัณฑ์',
         imageSrc: '/images/news/news_pic_04_01.jpg',
         date: '2025'
      },
      // {
      //    id: 5,
      //    title: 'VC Collab 2026',
      //    description: 'บริษัท มายด์ ทู มิส เวลแคร์ จำกัด เข้าร่วมโครงการ VC Collab 2025 และได้รับรางวัล “โดนใจ VC” ซึ่งเป็นอีกหนึ่งมุมมองสะท้อนถึงศักยภาพของแบรนด์และแนวทางการพัฒนาผลิตภัณฑ์',
      //    imageSrc: '/images/news/news_pic_04_01.jpg',
      //    date: '2026-12-12'
      // },
   ];
   
   // ← ADD THIS: Sort by date (newest first)
   const sortedItems = [...knowledgeItems].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
   ).slice(0, knowledgeItems.length);

   // ← ADD AUTO-SCROLL
   React.useEffect(() => {
      const scrollContainer = document.querySelector(`.${styles.knowledgeGrid}`);
      if (!scrollContainer) return;

      let scrollInterval = setInterval(() => {
         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
         const currentScroll = scrollContainer.scrollLeft;

         if (currentScroll >= maxScroll) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
         } else {
            scrollContainer.scrollBy({ left: 340, behavior: 'smooth' });
         }
      }, 3000);

      return () => clearInterval(scrollInterval);
   }, []);

   return (
      <section className={styles.knowledgeSection}>
         <div className={styles.container}>
            <div className={styles.sectionHeader}>
               <h2 className={styles.sectionTitle}>สาระน่ารู้</h2>
               <p className={styles.sectionSubtitle}>
                  เคล็ดลับและความรู้เกี่ยวกับความสะอาดและสุขภาพ
               </p>
            </div>
         </div>

         <div className={styles.gridContainer}>
            <div className={styles.knowledgeGrid}>
               {sortedItems.map(item => (
                  <div key={item.id} className={styles.knowledgeCard}>
                     <div className={styles.iconContainer}>
                        <img className={styles.imageSrc} src={item.imageSrc} alt={item.title} />
                     </div>
                     <h3 className={styles.cardTitle}>{item.title}</h3>
                     <p className={styles.cardDescription}>{item.description}</p>
                     <div className={styles.cardFooter}>
                        <span className={styles.readMore} onClick={() => setSelectedItem(item)}>Read More</span>
                        <span className={styles.publishDate}>Published on {item.date} | MISKA</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {selectedItem && (
            <div className={styles.modal} onClick={() => setSelectedItem(null)}>
               <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                  <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>
                  <img src={selectedItem.imageSrc} alt={selectedItem.title} className={styles.modalImage} />
                  <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
                  <p className={styles.modalDescription}>{selectedItem.description}</p>
                  <p className={styles.modalDate}>Published on {selectedItem.date} | MISKA</p>
               </div>
            </div>
         )}
      </section>
   );
};

export default KnowledgeSection;