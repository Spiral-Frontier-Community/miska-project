import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      { name: 'LINE', url: 'https://lin.ee/0NA2V1e', icon: '💬' },
      { name: 'Facebook', url: 'https://www.facebook.com/MiskaThailand', icon: '📘' },
      { name: 'Instagram', url: 'https://www.instagram.com/miska_thailand', icon: '📸' }
   ];

   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            {/* Company Info */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>เกี่ยวกับ MISKA</h4>
               <p className={styles.description}>
                  ขับเคลื่อนนวัตกรรมด้านความสะอาดและสุขภาพสู่ระดับการแพทย์
                  เพื่อยกระดับคุณภาพชีวิตของผู้คน
               </p>
            </div>

            {/* Contact Info */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>ติดต่อเรา</h4>
               <div className={styles.contactInfo}>
                  <p className={styles.contactItem}>
                     📍 214 หมู่12 ตำบลไรน้อย อำเภอเมือง<br />
                     จังหวัดอุบลราชธานี 34000
                  </p>
                  <p className={styles.contactItem}>
                     📧 miskaofficial@gmail.com
                  </p>
               </div>
            </div>

            {/* Social Links */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>ติดตามเรา</h4>
               <div className={styles.socialLinks}>
                  {socialLinks.map(social => (
                     <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                     >
                        <span className={styles.socialIcon}>{social.icon}</span>
                        {social.name}
                     </a>
                  ))}
               </div>
            </div>
         </div>

         {/* Copyright */}
         <div className={styles.copyright}>
            <p className={styles.copyrightText}>
               © {currentYear} MISKA. All rights reserved. | นวัตกรรมความสะอาดมาตรฐานการแพทย์
            </p>
         </div>
      </footer>
   );
};

export default Footer;