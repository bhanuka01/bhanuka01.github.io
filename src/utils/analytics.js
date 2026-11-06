/**
 * Google Analytics 4 (GA4) Analytics Integration
 * 
 * Features:
 * - Production-ready official gtag.js loading
 * - Privacy-conscious: respects Do Not Track (DNT) & Global Privacy Control (GPC)
 * - Google Consent Mode v2: denies advertising/marketing storage, allows analytics
 * - Automatic single-page app (SPA) pageview & section navigation tracking
 * - Helper functions for custom events (form submission, section views, theme toggles)
 */

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-B2F72P9ZBF';

export const SECTION_TITLES = {
  hero: 'Bhanuka Dilshan | Data Scientist, ML Engineer & Flutter Developer',
  work: 'Selected Works | Bhanuka Dilshan',
  experience: 'Experience & Education | Bhanuka Dilshan',
  blog: 'Writing & Insights | Bhanuka Dilshan',
  certificates: 'Licenses & Certifications | Bhanuka Dilshan',
  contact: 'Contact | Bhanuka Dilshan',
};

/**
 * Checks whether the user's browser has requested privacy protection
 * via Do Not Track (DNT) or Global Privacy Control (GPC).
 */
export const hasPrivacySignal = () => {
  if (typeof window === 'undefined') return false;
  return Boolean(
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1' ||
    navigator.msDoNotTrack === '1' ||
    navigator.globalPrivacyControl === true
  );
};

/**
 * Official gtag proxy function.
 */
export const gtag = function () {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }
};

/**
 * Initializes Google Analytics 4 with official gtag.js script and privacy flags.
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  const measurementId = GA_MEASUREMENT_ID;

  // Validate Measurement ID format
  if (!measurementId || !measurementId.startsWith('G-') || measurementId === 'G-XXXXXXXXXX') {
    if (import.meta.env.DEV) {
      console.info('[GA4] Valid Measurement ID not found. Analytics disabled.');
    }
    return;
  }

  // Honor Do Not Track / Global Privacy Control signals
  if (hasPrivacySignal()) {
    window[`ga-disable-${measurementId}`] = true;
    if (import.meta.env.DEV) {
      console.info('[GA4] User privacy signal (DNT / GPC) active. Tracking disabled.');
    }
    return;
  }

  // Initialize dataLayer and window.gtag
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // 1. Google Consent Mode v2: Privacy-first defaults
  // Disallow ad storage, ad personalization, and remarketing by default
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });

  // 2. Inject official gtag.js script if not present
  const SCRIPT_ID = 'ga4-gtag-script';
  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  // 3. Configure GA4 with privacy and SPA settings
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // Page views managed explicitly for SPA navigation
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    restricted_data_processing: true,
  });

  // 4. Track initial landing page view
  const currentHash = (window.location.hash || '').replace('#', '');
  const initialTitle = SECTION_TITLES[currentHash] || document.title;
  const initialPath = window.location.pathname + (window.location.hash || '');
  trackPageView(initialPath, initialTitle);

  // 5. Attach SPA navigation listeners (hashchange & popstate)
  if (!window.__ga_navigation_listeners_attached) {
    window.__ga_navigation_listeners_attached = true;
    const handleNav = () => {
      const hash = (window.location.hash || '').replace('#', '');
      const title = SECTION_TITLES[hash] || document.title;
      const path = window.location.pathname + (window.location.hash || '');
      trackPageView(path, title);
    };

    window.addEventListener('hashchange', handleNav);
    window.addEventListener('popstate', handleNav);
  }
};

/**
 * Tracks a pageview or section pageview in GA4.
 * @param {string} path - URL path (e.g. '/' or '/#work')
 * @param {string} title - Page or section title
 */
export const trackPageView = (path = window.location.pathname, title = document.title) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function' || hasPrivacySignal()) {
    return;
  }

  const measurementId = GA_MEASUREMENT_ID;
  if (!measurementId || !measurementId.startsWith('G-') || measurementId === 'G-XXXXXXXXXX') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: path,
    send_to: measurementId,
  });
};

/**
 * Tracks custom user interactions and events in GA4.
 * @param {string} eventName - GA4 event name (e.g. 'generate_lead', 'section_view')
 * @param {Record<string, unknown>} eventParams - Optional custom parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function' || hasPrivacySignal()) {
    return;
  }

  window.gtag('event', eventName, eventParams);
};
