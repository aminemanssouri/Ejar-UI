import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="bg-primary text-sand py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+97141234567" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaPhone />
              <span dir="ltr">+971 4 123 4567</span>
            </a>
            <a href="https://wa.me/97141234567" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaWhatsapp />
              تواصل عبر واتساب
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">English</a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg border-b-2 border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold text-primary">
                <span className="text-gold">عقارات</span> الفاخرة
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">الرئيسية</Link>
              <Link to="/properties" className="nav-link">العقارات</Link>
              <button className="btn-primary">تواصل معنا</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gold/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  to="/properties"
                  className="block px-3 py-2 text-gray-700 hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  العقارات
                </Link>
                <button className="w-full btn-primary mt-2">تواصل معنا</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;