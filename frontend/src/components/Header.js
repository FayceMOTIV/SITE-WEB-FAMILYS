import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-orange-500/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/4euq80w9_LOGO%20FAMILYS.png" 
              alt="Family's Logo" 
              className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isActive(link.path) ? 'text-orange-400' : 'text-gray-300 hover:text-white'
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
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-600/50"
            >
              Commander
            </a>
            <a
              href={restaurantInfo.uberEatsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-black border border-green-500 text-white font-semibold rounded-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/50"
            >
              🚗 Uber Eats
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-red-900/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path) ? 'text-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={restaurantInfo.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-center"
              >
                Commander
              </a>
              <a
                href={restaurantInfo.uberEatsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-black border border-green-500 text-white font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 text-center"
              >
                🚗 Uber Eats
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;