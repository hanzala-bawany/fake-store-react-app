import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  

  useEffect(() => {
    // Jab bhi pathname change ho, top pe scroll ho jao
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
