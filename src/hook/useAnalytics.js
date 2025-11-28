import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking analytics
 * Tracks IP, location, visits, and product clicks
 * Uses localStorage for demo (would be backend API in production)
 */
export const useAnalytics = () => {
   const [analytics, setAnalytics] = useState({
      ip: 'Loading...',
      location: 'Loading...',
      visits: 0,
      productClicks: {},
      isLoading: true
   });

   useEffect(() => {
      const trackVisit = async () => {
         try {
            // Fetch IP address (free API, no auth needed)
            const ipRes = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipRes.json();

            // Fetch location data from IP (free tier)
            const locRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
            const locData = await locRes.json();

            // Get existing analytics from localStorage
            const stored = JSON.parse(localStorage.getItem('miskaAnalytics') || '{}');

            // Update analytics data
            const newData = {
               ip: ipData.ip,
               location: `${locData.city || 'Unknown'}, ${locData.country_name || 'Unknown'}`,
               visits: (stored.visits || 0) + 1,
               productClicks: stored.productClicks || {},
               timestamp: new Date().toISOString(),
               isLoading: false
            };

            // Save to localStorage
            localStorage.setItem('miskaAnalytics', JSON.stringify(newData));
            setAnalytics(newData);

         } catch (err) {
            console.error('Analytics tracking error:', err);

            // Fallback to demo mode if APIs fail
            const stored = JSON.parse(localStorage.getItem('miskaAnalytics') || '{}');
            setAnalytics({
               ip: 'Demo Mode',
               location: 'Bangkok, Thailand',
               visits: (stored.visits || 0) + 1,
               productClicks: stored.productClicks || {},
               isLoading: false
            });
         }
      };

      trackVisit();
   }, []);

   /**
    * Track product click events
    * @param {string} productName - Name of the clicked product
    */
   const trackProductClick = (productName) => {
      try {
         const stored = JSON.parse(localStorage.getItem('miskaAnalytics') || '{}');
         const clicks = stored.productClicks || {};

         // Increment click count
         clicks[productName] = (clicks[productName] || 0) + 1;

         const newData = {
            ...stored,
            productClicks: clicks,
            lastClickedProduct: productName,
            lastClickTime: new Date().toISOString()
         };

         localStorage.setItem('miskaAnalytics', JSON.stringify(newData));
         setAnalytics(prev => ({ ...prev, ...newData }));

      } catch (err) {
         console.error('Error tracking product click:', err);
      }
   };

   /**
    * Get most clicked product
    * @returns {string} Name of most clicked product
    */
   const getMostClickedProduct = () => {
      const clicks = analytics.productClicks;
      if (Object.keys(clicks).length === 0) return 'No clicks yet';

      return Object.entries(clicks)
         .sort((a, b) => b[1] - a[1])[0][0];
   };

   /**
    * Reset analytics (for testing)
    */
   const resetAnalytics = () => {
      localStorage.removeItem('miskaAnalytics');
      setAnalytics({
         ip: 'Reset',
         location: 'Reset',
         visits: 0,
         productClicks: {},
         isLoading: false
      });
   };

   return {
      analytics,
      trackProductClick,
      getMostClickedProduct,
      resetAnalytics
   };
};