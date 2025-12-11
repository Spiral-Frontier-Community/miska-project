import React from 'react';
import styles from '../styles/KnowledgeSection.module.css';

/**
 * Knowledge/Tips Section Component
 * Easy to update - just modify the knowledgeItems array
 * Client can add/remove items here without touching complex code
 */
const KnowledgeSection = () => {
   // ⭐ ADMIN: Edit this array to add/remove/update knowledge items
   const knowledgeItems = [
      {
         id: 1,
         title: 'การทำความสะอาดที่ถูกวิธี',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         imageSrc: '🧼',
         date: '2024-12-15' // ← ADD THIS
      },
      {
         id: 2,
         title: 'เคล็ดลับการฆ่าเชื้อโรค',
         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         imageSrc: '🦠',
         date: '2024-12-14' // ← ADD THIS
      },
      {
         id: 3,
         title: 'ผลิตภัณฑ์ที่ปลอดภัย',
         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         imageSrc: '✨',
         date: '2024-12-13' // ← ADD THIS
      }
   ];

   // ← ADD THIS: Sort by date (newest first)
   const sortedItems = [...knowledgeItems].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
   ).slice(0, 3);

   // ← ADD AUTO-SCROLL
   React.useEffect(() => {
      const scrollContainer = document.querySelector(`.${styles.knowledgeGrid}`);
      if (!scrollContainer) return;

      let scrollInterval = setInterval(() => {
         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
         const currentScroll = scrollContainer.scrollLeft;

         if (currentScroll >= maxScroll) {
            // If at end, scroll back to start
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
         } else {
            // Scroll by one card width
            scrollContainer.scrollBy({ left: 340, behavior: 'smooth' }); // 320px card + 20px gap
         }
      }, 3000); // Auto-scroll every 3 seconds

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

            <div className={styles.knowledgeGrid}>
               {sortedItems.map(item => (
                  <div key={item.id} className={styles.knowledgeCard}>
                     <div className={styles.dateTag}>{item.date}</div> {/* ← ADD THIS */}
                     <div className={styles.imageSrcContainer}>
                        <span className={styles.imageSrc}>{item.imageSrc}</span>
                     </div>
                     <h3 className={styles.cardTitle}>{item.title}</h3>
                     <p className={styles.cardDescription}>{item.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default KnowledgeSection;