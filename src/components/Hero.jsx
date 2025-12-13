import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data - easy to update!
  const slides = [
    {
      id: 1,
      image: '/images/background/background_long_1.jpg', 
      text: 'เคยเป็นไหม... แค่อยาก สระผม ให้สดชื่น แต่ ทำไม่ได้จริงๆ'
    },
    {
      id: 2,
      image: '/images/background/background_long_2.jpg',
      text: 'ระหว่างฟักฟื้น... แค่อะ สระผม ก็ ลำบาก'
    },
    {
      id: 3,
      image: '/images/background/background_long_3.jpg',
      text: 'หลังศัลยกรรม... แผลห้ามโดนน้ำ จะ สระผม ก็ ลำบาก'
    },
    {
      id: 4,
      image: '/images/background/background_long_4.jpg',
      text: 'HOW TO USE - วิธีใช้งาน Miska Dry Shampoo'
    },
    {
      id: 5,
      image: '/images/background/background_long_5.jpg',
      text: 'รู้หรือไม่? แบคทีเรียและเชื้อรามีสะสมบนหนังศีระ'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Slides */}
      <div className={styles.slidesWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              display: index === currentSlide ? 'block' : 'none'
            }}
          >
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Bottom Overlay with Text and Dots */}
      <div className={styles.bottomOverlay}>
        {/* Pagination Dots */}
        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;