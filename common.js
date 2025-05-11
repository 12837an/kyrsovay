
function formatPrice(price) {
    return price > 0 ? price.toLocaleString('ru-RU') + ' BYN' : 'По запросу';
  }
  
 
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  
  function checkBrowserFeatures() {
    const features = {
      intersectionObserver: 'IntersectionObserver' in window,
      cssGrid: 'grid' in document.createElement('div').style
    };
    
    if (!features.intersectionObserver) {
      loadPolyfill('intersection-observer');
    }
    
    if (!features.cssGrid) {
      document.documentElement.classList.add('no-css-grid');
    }
  }
 
  function loadPolyfill(name) {
    const polyfills = {
      'intersection-observer': 'https://cdn.jsdelivr.net/npm/intersection-observer@0.12.0/intersection-observer.min.js'
    };
    
    if (polyfills[name]) {
      const script = document.createElement('script');
      script.src = polyfills[name];
      document.head.appendChild(script);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    checkBrowserFeatures();
  });