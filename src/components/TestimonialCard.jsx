import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ name, rank, avatar, quote, score, year, course }) {
  return (
    <div className="testimonial-card rounded-2xl p-6 relative overflow-hidden h-full flex flex-col">
      {/* Decorative quote */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote size={60} className="text-blue-600" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
      
      {/* Spacer to push content down */}
      <div className="mt-auto">

      {/* Score badge */}
      {score && (
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {score}
        </div>
      )}

      {/* Profile */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.target.src = `https://placehold.co/100x100/e2e8f0/1e293b?text=${name.charAt(0)}`; }}
        />
        <div>
          <p className="font-bold text-slate-900 text-sm">{name}</p>
          <p className="text-slate-500 text-xs">{rank} · {year}</p>
          {course && <p className="text-blue-600 text-xs font-medium w-full truncate" title={course}>{course}</p>}
        </div>
      </div>
      </div>
    </div>
  );
}
