// Navigation.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 hover:bg-gray-800  ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} transition-colors duration-300 ease-in-out`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            
          <Link to="/" className="flex items-center text-white font-bold text-xl ml-8">
  <img src="/assets/sample.svg" alt="Logo" className="h-20 w-20 mr-2" />
  
</Link>

          </div>
          <div className="hidden md:flex items-center">
            <Link to="/" className="text-white hover:text-blue-600 mx-3">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-600 mx-3">About</Link>
            <Link to="/contact" className="text-white hover:text-blue-600 mx-3">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
