import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsPanel from './components/AnalyticsPanel';
import Home from './pages/Home';
import { useAnalytics } from './hook/useAnalytics';
import '../src/App.css';

/**
 * Main App Component
 * Handles routing, analytics, and global state
 */
function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Initialize analytics tracking
  const { analytics, trackProductClick, getMostClickedProduct } = useAnalytics();

  /**
   * Handle navigation between sections
   */
  const handleNavigate = (sectionId) => {
    setCurrentSection(sectionId);

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /**
   * Handle product click and track analytics
   */
  const handleProductClick = (product) => {
    trackProductClick(product.name);

    // Optional: Show a toast notification or modal
    console.log(`Product clicked: ${product.name}`);
  };

  /**
   * Scroll to products section
   */
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  /**
   * Render page content based on current section
   */
  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Home
            analytics={analytics}
            onProductClick={handleProductClick}
            onScrollToProducts={handleScrollToProducts}
          />
        );

      case 'about':
        return (
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 5%',
            fontSize: '2rem',
            color: '#007bff'
          }}>
            About Page - Coming Soon 🚧
          </div>
        );

      case 'products':
        return (
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 5%',
            fontSize: '2rem',
            color: '#007bff'
          }}>
            Products Page - Coming Soon 🚧
          </div>
        );

      case 'contact':
        return (
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 5%',
            fontSize: '2rem',
            color: '#007bff'
          }}>
            Contact Page - Coming Soon 🚧
          </div>
        );

      default:
        return (
          <Home
            analytics={analytics}
            onProductClick={handleProductClick}
            onScrollToProducts={handleScrollToProducts}
          />
        );
    }
  };

  return (
    <div className="app">
      {/* Header with Navigation */}
      <Header
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Analytics Panel (Floating) */}
      <AnalyticsPanel
        analytics={analytics}
        isVisible={showAnalytics}
        onToggle={() => setShowAnalytics(!showAnalytics)}
        getMostClickedProduct={getMostClickedProduct}
      />
    </div>
  );
}

export default App;