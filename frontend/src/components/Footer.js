import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-orange-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">{restaurantInfo.name}</span>
                <span className="text-orange-400 text-xs font-medium">{restaurantInfo.tagline}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Fast food premium à Bourg-en-Bresse. Burgers maison, tacos, desserts et boissons. Commandez en ligne ou sur notre app.
            </p>
            <div className="flex space-x-4">
              <a
                href={restaurantInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href={restaurantInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={restaurantInfo.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
                >
                  Commander en ligne
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-orange-400 transition-colors duration-300">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2025 {restaurantInfo.name}. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="text-gray-500 hover:text-red-500 text-sm transition-colors duration-300">
              Mentions légales
            </Link>
            <Link to="/cgv" className="text-gray-500 hover:text-red-500 text-sm transition-colors duration-300">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;