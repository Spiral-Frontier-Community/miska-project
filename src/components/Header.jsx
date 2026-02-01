import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ onNavigate, currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // ← ADD
  const [lastScrollY, setLastScrollY] = useState(0); // ← ADD

  // ← ADD scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Scrolling down & past 150px
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'หน้าหลัก', scrollTo: null },
    { id: 'products', label: 'ผลิตภัณฑ์', scrollTo: 'products' }, 
    { id: 'about', label: 'เกี่ยวกับเรา', scrollTo: 'about' }, 
    { id: 'contact', label: 'ติดต่อ', scrollTo: 'footer' } 
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);

    // If it has a scroll target, scroll to that element
    if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Otherwise use the regular navigation
      onNavigate(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  
  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo Image - Replace text with image */}
        <div className={styles.logoContainer}>
          <img
            src="/images/Logo/miska_logo_quality.png"
            alt="MISKA Logo"
            className={styles.logoImage}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`${styles.navBtn} ${currentSection === item.id ? styles.active : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`${styles.mobileNavBtn} ${currentSection === item.id ? styles.active : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;