
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-preschool-light-blue p-1 flex items-center justify-center">
              <svg 
                className="w-10 h-10 fill-preschool-blue animate-bounce-light" 
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.4" />
                <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.5.87l4,2.5a1,1,0,0,0,1.37-.37,1,1,0,0,0-.37-1.37L13,11.94V7A1,1,0,0,0,12,6Z" />
              </svg>
            </div>
            <div className="ml-3">
              <h1 className="font-display font-bold text-xl md:text-2xl tracking-tight text-preschool-blue">
                FirstStep <span className="text-preschool-coral">Pre School</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Nurturing young minds</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            {['Home', 'About', 'Programs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-600 hover:text-preschool-blue transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:8333840661" 
              className="inline-flex items-center justify-center rounded-full bg-preschool-coral text-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-preschool-coral/90"
            >
              Call Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-preschool-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-preschool-blue hover:bg-preschool-light-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:8333840661" 
                className="block w-full mt-4 text-center rounded-full bg-preschool-coral text-white px-4 py-2 font-medium transition-all duration-300 hover:bg-preschool-coral/90"
              >
                Call Us: 833-384-0661
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
