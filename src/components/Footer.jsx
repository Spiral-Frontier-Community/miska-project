import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         name: 'LINE',
         url: 'https://lin.ee/0NA2V1e',
         icon: <img src="/logoApp/line_colored_icon.png" alt="LINE" />
      },
      {
         name: 'Facebook',
         url: 'https://www.facebook.com/MiskaThailand',
         icon: <img src="/logoApp/fb_colored_icon2.png" alt="Facebook" />
      },
      {
         name: 'Instagram',
         url: 'https://www.instagram.com/miska_thailand',
         icon: <img src="/logoApp/ig_colored_icon.png" alt="Instagram" />
      }
   ];

   return (
      <footer id="footer" className={styles.footer}>
         <div className={styles.container}>
            {/* Company Info */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>เกี่ยวกับ MISKA</h4>
               <p className={styles.description}>
                  Lorem ipsum dolor sit amet
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

            {/* QR Code */}
            <div className={styles.section}>
               <div className={styles.qrSection}>
                  <img
                     src="/images/socialQR/Line_QRcode.png"
                     alt="LINE QR Code"
                     className={styles.qrImage}
                  />
                  <p className={styles.qrLabel}>สแกนเพื่อเพิ่มเพื่อนใน LINE</p>
               </div>
            </div>
         </div>

         {/* Copyright */}
         <div className={styles.copyright}>
            <p className={styles.copyrightText}>
               © {currentYear} MISKA. All rights reserved. | Lorem ipsum dolor sit amet
            </p>
         </div>
      </footer>
   );
};

export default Footer;