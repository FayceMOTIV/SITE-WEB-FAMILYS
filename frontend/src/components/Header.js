import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Application', path: '/application' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  // Classes dynamiques pour le header
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-gradient-to-r from-amber-900/95 via-orange-900/95 to-amber-900/95 backdrop-blur-md border-b border-orange-500/30 shadow-2xl'
  }`;

  // Taille du logo adaptative
  const logoClasses = `transform group-hover:scale-105 transition-all duration-500 drop-shadow-lg ${
    isScrolled ? 'h-16 sm:h-20 md:h-24' : 'h-20 sm:h-24 md:h-28 lg:h-32'
  }`;

  // Hauteur du header adaptative
  const headerHeight = isScrolled ? 'h-20 sm:h-24 md:h-28' : 'h-24 sm:h-28 md:h-32 lg:h-36';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${headerHeight}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo-familys.png`}
              alt="Family's Logo"
              className={logoClasses}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-orange-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <a
              href={restaurantInfo.orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm uppercase tracking-wide rounded-full hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-600/40"
            >
              Commander
            </a>
            <a
              href={restaurantInfo.uberEatsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black/80 border-2 border-green-500 text-white font-bold text-sm uppercase tracking-wide rounded-full hover:bg-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              Uber Eats
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-300 p-2 z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide Down Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-orange-500/20 bg-gradient-to-b from-amber-900/95 to-orange-900/95 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-semibold uppercase tracking-wide py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-orange-400 bg-orange-500/10'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 space-y-3">
                <a
                  href={restaurantInfo.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold uppercase tracking-wide rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-center shadow-lg"
                >
                  Commander
                </a>
                <a
                  href={restaurantInfo.uberEatsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-black border-2 border-green-500 text-white font-bold uppercase tracking-wide rounded-full hover:bg-green-500 transition-all duration-300 text-center"
                >
                  Uber Eats
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;