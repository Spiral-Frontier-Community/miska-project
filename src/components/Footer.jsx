import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         name: 'Facebook',
         url: 'https://www.facebook.com/MiskaThailand',
         icon: <div className={styles.socialIcon} data-icon="facebook"></div>
      },
      {
         name: 'Instagram',
         url: 'https://www.instagram.com/miska_thailand',
         icon: <div className={styles.socialIcon} data-icon="instagram"></div>
      }
   ];

   return (
      <footer id="footer" className={styles.footer}>
         <div className={styles.container}>
            {/* Company Info */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>บริษัท มาย ทู มิส เวลแคร์ จำกัด</h4>
               
            </div>

            {/* Contact Info */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>ติดต่อเรา</h4>
               <div className={styles.contactInfo}>
                  <p className={styles.contactItem}>
                     214 หมู่12 ตำบลไร่น้อย อำเภอเมือง<br />
                     จังหวัดอุบลราชธานี 34000
                  </p>
                  <p className={styles.contactItem}>
                     Contact: miskaofficial@gmail.com
                     <br></br>
                     Tel: 093-374-4356
                  </p>

               </div>
            </div>

            {/* Social Links - Left side */}
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
                        title={social.name}
                     >
                        {social.icon}
                     </a>
                  ))}
               </div>
            </div>

            {/* LINE QR Code - Right side (bigger) */}
            <div className={styles.section}>
               <h4 className={styles.sectionTitle}>เพิ่มเพื่อนผ่าน LINE</h4>
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
               © {currentYear} MISKA. All rights reserved.
            </p>
         </div>
      </footer>
   );
};

export default Footer;