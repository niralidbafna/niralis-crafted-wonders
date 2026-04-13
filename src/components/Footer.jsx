import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-gray via-dark-gray to-dark-gray text-white mt-20 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-light-gold fill-light-gold" />
              <span className="font-serif text-xl font-bold">Nirali's Crafted Wonders</span>
            </div>
            <p className="text-sm text-gray-300">
            Where every gift tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-light-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-light-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-light-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-light-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9141285708</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>niraliscraftedwonders@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/niraliscraftedwonders/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light-gold/20 flex items-center justify-center hover:bg-light-gold/40 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Nirali's Crafted Wonders. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
