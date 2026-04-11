import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, BookOpen } from 'lucide-react';

export default function CourseCard({ title, description, duration, students, rating, level, color, icon: Icon }) {
  const colors = {
    blue: { bg: 'bg-blue-50', icon: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700' },
    amber: { bg: 'bg-amber-50', icon: 'bg-amber-500', badge: 'bg-amber-100 text-amber-700' },
    green: { bg: 'bg-emerald-50', icon: 'bg-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
    purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700' },
    rose: { bg: 'bg-rose-50', icon: 'bg-rose-600', badge: 'bg-rose-100 text-rose-700' },
    indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
  };

  const c = colors[color] || colors.blue;

  return (
    <div className="course-card bg-white rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className={`${c.bg} p-6 relative`}>
        <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
          {Icon ? <Icon size={26} className="text-white" /> : <BookOpen size={26} className="text-white" />}
        </div>
        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${c.badge}`}>
          {level}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-3 leading-tight">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>

        <div className="flex items-center gap-4 text-xs text-slate-500 mb-5 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-blue-500" />
            {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-blue-500" />
            {students} Students
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            {rating}
          </span>
        </div>

        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full btn-primary text-white font-semibold py-3 px-4 rounded-xl text-sm mt-auto"
        >
          Enroll Now <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
