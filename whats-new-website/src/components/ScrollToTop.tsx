import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top-left corner of the page
    }, [pathname]);             // Trigger effect every time the path changes

    return null;
};

export default ScrollToTop;