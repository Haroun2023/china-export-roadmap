import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor, ExternalLink, Ship } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] font-sans text-stone-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-teal-700 p-2 rounded-lg group-hover:bg-teal-800 transition-colors">
                <Ship className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-stone-900 tracking-tight">
                KSA Import <span className="font-light text-stone-600">Roadmap</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                    location.pathname === link.path ? 'text-teal-700 font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/roadmap"
                className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Get Started <ExternalLink size={14} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-teal-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F0E6] pt-16 pb-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-teal-800 p-2 rounded-lg">
                  <Ship className="h-5 w-5 text-white" />
                </div>
                <span className="font-serif text-lg font-bold text-stone-900">
                  KSA Import Roadmap
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Your comprehensive guide to importing electrical and plumbing materials from China to Saudi Arabia. Navigate compliance, find suppliers, and plan your budget with confidence.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-stone-600 hover:text-teal-700 text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-6">Resources</h3>
              <ul className="space-y-4">
                {['SABER Platform', 'ZATCA Portal', 'SASO Standards', 'Saudi Customs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-stone-600 hover:text-teal-700 text-sm flex items-center gap-1 transition-colors">
                      {item} <ExternalLink size={12} className="opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

             <div>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-6">Contact</h3>
               <p className="text-stone-600 text-sm mb-4">
                 Need specific advice?
               </p>
               <a href="mailto:info@ksa-import.com" className="text-teal-700 font-medium hover:underline">
                 info@ksa-import.com
               </a>
            </div>
          </div>
          
          <div className="border-t border-stone-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <p>© {new Date().getFullYear()} KSA Import Roadmap. For informational purposes only.</p>
            <p className="mt-2 md:mt-0">Data sourced from official Saudi government portals and verified industry sources.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
