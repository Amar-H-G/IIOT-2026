import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, Home, Info, BookOpen, Trophy, Star, Image, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Courses', path: '/courses', icon: BookOpen },
  { label: 'Achievements', path: '/achievements', icon: Trophy },
  { label: 'Success Stories', path: '/success-stories', icon: Star },
  { label: 'Gallery', path: '/gallery', icon: Image },
  { label: 'Contact', path: '/contact', icon: Phone },
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

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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

      {/* Sidebar Overlay Backdrop */}
      <div
        className={`sidebar-overlay lg:hidden ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside className={`mobile-sidebar lg:hidden ${isOpen ? 'open' : ''}`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm leading-tight block">Intelligent Institute</span>
              <span className="text-blue-600 text-xs font-medium">of Technology</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 mb-3">Navigation</p>
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{ animationDelay: `${i * 50}ms` }}
                className={`sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all duration-200 ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                } ${isOpen ? 'slide-in' : ''}`}
              >
                <Icon size={18} className={active ? 'text-white' : 'text-blue-500'} />
                {link.label}
                {active && <span className="ml-auto w-2 h-2 rounded-full bg-white/60" />}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="p-4 border-t border-slate-100">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 btn-primary text-white text-sm font-semibold px-4 py-3.5 rounded-xl w-full"
            onClick={() => setIsOpen(false)}
          >
            <GraduationCap size={17} />
            Enroll Now
          </Link>
          <p className="text-center text-xs text-slate-400 mt-3">Intelligent Institute of Technology</p>
        </div>
      </aside>
    </nav>
  );
}
