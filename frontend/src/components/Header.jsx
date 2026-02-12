import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [faviconUrl, setFaviconUrl] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Create favicon
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background circle
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      ctx.arc(24, 24, 22, 0, Math.PI * 2);
      ctx.fill();
      
      // Flame shape
      ctx.fillStyle = '#FFD93D';
      ctx.beginPath();
      ctx.moveTo(24, 12);
      ctx.quadraticCurveTo(30, 18, 27, 27);
      ctx.quadraticCurveTo(24, 21, 24, 30);
      ctx.quadraticCurveTo(24, 21, 21, 27);
      ctx.quadraticCurveTo(18, 18, 24, 12);
      ctx.fill();
      
      // Fork prongs
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(21, 33);
      ctx.lineTo(21, 39);
      ctx.moveTo(24, 33);
      ctx.lineTo(24, 39);
      ctx.moveTo(27, 33);
      ctx.lineTo(27, 39);
      ctx.stroke();
    }
    
    setFaviconUrl(canvas.toDataURL('image/png'));
  }, []);

  const navigation = [
    { name: 'Startseite', path: '/' },
    { name: 'Speisekarte', path: '/speisekarte' },
    { name: 'Erinnerungen', path: '/erinnerungen' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              {faviconUrl ? (
                <img src={faviconUrl} alt="Damm Grill" className="w-full h-full" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DG</span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700">DAMM GRILL</span>
              <span className="text-xs text-gray-600">Schnellimbiss & Restaurant</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-all duration-200 whitespace-nowrap px-2 ${
                  isActive(item.path)
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:020344300404"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg ml-4"
            >
              <Phone size={18} />
              <span>0203 / 44 30 04</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:020344300404"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all"
            >
              <Phone size={18} />
              <span>0203 / 44 30 04</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
