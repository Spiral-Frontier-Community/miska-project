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
         icon: '🧼'
      },
      {
         id: 2,
         title: 'เคล็ดลับการฆ่าเชื้อโรค',
         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         icon: '🦠'
      },
      {
         id: 3,
         title: 'ผลิตภัณฑ์ที่ปลอดภัย',
         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         icon: '✨'
      }
   ];

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
               {knowledgeItems.map(item => (
                  <div key={item.id} className={styles.knowledgeCard}>
                     <div className={styles.iconContainer}>
                        <span className={styles.icon}>{item.icon}</span>
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