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
         title: 'Lorem',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         imageSrc: 'https://placehold.co/500x300',
         date: '2024-12-15' // ← ADD THIS
      },
      {
         id: 2,
         title: 'Lorem',
         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         imageSrc: 'https://placehold.co/500x300',
         date: '2024-12-14' // ← ADD THIS
      },
      {
         id: 3,
         title: 'Lorem',
         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         imageSrc: 'https://placehold.co/500x300',
         date: '2024-12-13'
      },
      {
         id: 4,
         title: 'Lorem',
         description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
         imageSrc: 'https://placehold.co/500x300',
         date: '2024-12-12'
      },
      {
         id: 5,
         title: 'Lorem',
         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         imageSrc: 'https://placehold.co/500x300',
         date: '2024-12-14'
      }
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
                     <div className={styles.iconContainer}>
                        <img className={styles.imageSrc} src={item.imageSrc}></img>
                     </div>
                     <h3 className={styles.cardTitle}>{item.title}</h3>
                     <p className={styles.cardDescription}>{item.description}</p>
                     <div className={styles.cardFooter}>
                        <span className={styles.readMore}>Read More</span>
                        <span className={styles.publishDate}>Published on {item.date} | MISKA</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default KnowledgeSection;