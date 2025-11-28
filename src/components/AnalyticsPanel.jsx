import React from 'react';
import styles from '../styles/AnalyticsPanel.module.css';

const AnalyticsPanel = ({ analytics, isVisible, onToggle, getMostClickedProduct }) => {
   return (
      <>
         {/* Toggle Button */}
         <button
            className={styles.toggleButton}
            onClick={onToggle}
            aria-label="Toggle Analytics Panel"
         >
            📊 {isVisible ? 'Hide' : 'Show'} Analytics
         </button>

         {/* Analytics Panel */}
         {isVisible && (
            <div className={styles.panel}>
               <div className={styles.header}>
                  <h3 className={styles.title}>Real-Time Analytics 🔥</h3>
                  <button
                     className={styles.closeButton}
                     onClick={onToggle}
                     aria-label="Close Panel"
                  >
                     ✕
                  </button>
               </div>

               <div className={styles.statsContainer}>
                  <div className={styles.stat}>
                     <span className={styles.statLabel}>🌐 Your IP:</span>
                     <span className={styles.statValue}>
                        {analytics.isLoading ? (
                           <span className={styles.loading}>Loading...</span>
                        ) : (
                           analytics.ip
                        )}
                     </span>
                  </div>

                  <div className={styles.stat}>
                     <span className={styles.statLabel}>📍 Location:</span>
                     <span className={styles.statValue}>
                        {analytics.isLoading ? (
                           <span className={styles.loading}>Loading...</span>
                        ) : (
                           analytics.location
                        )}
                     </span>
                  </div>

                  <div className={styles.stat}>
                     <span className={styles.statLabel}>👥 Total Visits:</span>
                     <span className={styles.statValue}>{analytics.visits}</span>
                  </div>

                  <div className={styles.stat}>
                     <span className={styles.statLabel}>🔥 Most Clicked:</span>
                     <span className={styles.statValue}>
                        {getMostClickedProduct ? getMostClickedProduct() : 'No clicks yet'}
                     </span>
                  </div>

                  {/* Product Clicks Breakdown */}
                  {Object.keys(analytics.productClicks || {}).length > 0 && (
                     <div className={styles.breakdown}>
                        <h4 className={styles.breakdownTitle}>Product Clicks:</h4>
                        {Object.entries(analytics.productClicks).map(([product, clicks]) => (
                           <div key={product} className={styles.breakdownItem}>
                              <span className={styles.breakdownProduct}>{product}</span>
                              <span className={styles.breakdownClicks}>{clicks} clicks</span>
                           </div>
                        ))}
                     </div>
                  )}
               </div>

               <div className={styles.footer}>
                  <p className={styles.footerText}>
                     💡 Demo Mode: Data stored locally
                  </p>
               </div>
            </div>
         )}
      </>
   );
};

export default AnalyticsPanel;