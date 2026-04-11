import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600';

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'scrolled bg-white/95' : 'bg-white/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="text-white" size={22} />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm leading-tight block">
                Intelligent Institute
              </span>
              <span className="text-blue-600 text-xs font-medium">of Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
            >
              Enroll Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden bg-white border-t border-slate-100 ${isOpen ? 'open' : ''}`}>
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path)} hover:bg-blue-50`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-3 btn-primary text-white text-sm font-semibold px-4 py-3 rounded-xl text-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
