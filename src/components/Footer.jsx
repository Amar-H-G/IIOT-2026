import { Link } from 'react-router-dom';
import {
  GraduationCap, Phone, Mail, MapPin,
  Globe, Share2, MessageCircle, Video, Link as LinkIcon,
  ArrowRight
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const courses = [
  'JEE Main & Advanced',
  'NEET UG Preparation',
  'Foundation (8th–10th)',
  'Board Exam Excellence',
  'Olympiad Training',
  'MHT-CET Preparation',
];

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Share2, label: 'Share', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
  { icon: LinkIcon, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Ready to Start Your Journey to Success?
            </h3>
            <p className="text-blue-200 mt-2">
              Join thousands of students who achieved their dreams with IIT.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-accent text-white font-bold px-8 py-4 rounded-xl whitespace-nowrap flex items-center gap-2"
          >
            Enroll Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">Intelligent Institute</span>
                <span className="text-blue-400 text-xs">of Technology</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering students since 2008 with world-class coaching for IIT-JEE, NEET, and beyond.
              Your success is our mission.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-slate-700">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-slate-700">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-slate-700">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">
                  42, Education Hub, Knowledge Park,<br />
                  Pune, Maharashtra – 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:+912012345678" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  +91 20 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:info@iit-institute.in" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  info@iit-institute.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Intelligent Institute of Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
