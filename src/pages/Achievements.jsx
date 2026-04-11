import { Users, TrendingUp, Award, Trophy, Star, CheckCircle, GraduationCap, BookOpen } from 'lucide-react';
import StatCounter from '../components/StatCounter';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';

const stats = [
  { end: 15000, label: 'Students Enrolled', suffix: '+', icon: Users },
  { end: 98, label: 'Success Rate', suffix: '%', icon: TrendingUp },
  { end: 250, label: 'IIT Selections', suffix: '+', icon: Trophy },
  { end: 420, label: 'NEET Selections', suffix: '+', icon: GraduationCap },
  { end: 1200, label: 'Top 1000 Ranks (JEE)', suffix: '+', icon: Star },
  { end: 16, label: 'Years of Excellence', suffix: '+', icon: Award },
];

const awards = [
  {
    year: '2024',
    title: 'Best Coaching Institute of the Year',
    authority: 'Education Excellence India Awards',
    icon: '🏆',
    color: 'from-amber-50 to-yellow-50 border-amber-200',
  },
  {
    year: '2023',
    title: '#1 JEE Coaching in Pune',
    authority: 'Times EduCon Survey 2023',
    icon: '🥇',
    color: 'from-blue-50 to-indigo-50 border-blue-200',
  },
  {
    year: '2022',
    title: 'Highest NEET Selections – West Maharashtra',
    authority: 'MHT-CET Board of Education',
    icon: '🎓',
    color: 'from-green-50 to-emerald-50 border-green-200',
  },
  {
    year: '2022',
    title: 'Outstanding Faculty Award',
    authority: 'National Teachers Day Council',
    icon: '⭐',
    color: 'from-purple-50 to-violet-50 border-purple-200',
  },
  {
    year: '2021',
    title: 'Best EdTech Integration',
    authority: 'Innovation in Education Forum',
    icon: '💡',
    color: 'from-rose-50 to-pink-50 border-rose-200',
  },
  {
    year: '2019',
    title: 'ISO 9001:2015 Certified Institute',
    authority: 'Bureau of Indian Standards',
    icon: '✅',
    color: 'from-teal-50 to-cyan-50 border-teal-200',
  },
];

const topRankers = [
  { name: 'Arjun Sharma', rank: 'AIR 47', exam: 'JEE Advanced 2024', college: 'IIT Bombay' },
  { name: 'Priya Mehta', rank: 'AIR 112', exam: 'NEET 2024', college: 'AIIMS Delhi' },
  { name: 'Karthik Iyer', rank: 'AIR 83', exam: 'JEE Advanced 2024', college: 'IIT Madras' },
  { name: 'Ananya Singh', rank: 'AIR 156', exam: 'NEET 2024', college: 'AIIMS Jodhpur' },
  { name: 'Rohan Desai', rank: 'AIR 198', exam: 'JEE Main 2024', college: 'NIT Trichy' },
  { name: 'Sneha Joshi', rank: 'AIR 245', exam: 'NEET 2023', college: 'GMC Nagpur' },
];

export default function Achievements() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              Achievements
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Our Record of{' '}
              <span className="text-amber-300">Excellence</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              16 years of unbroken results that speak for themselves. Every trophy is a student's dream fulfilled.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="By the Numbers"
              title="Results That"
              highlight="Define Us"
              subtitle="Every number represents a student's dream turned reality."
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <StatCounter end={s.end} label={s.label} suffix={s.suffix} icon={s.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Awards & Recognition"
              title="Awards We're"
              highlight="Proud Of"
              subtitle="National recognition for our commitment to student success."
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <ScrollReveal key={award.title} delay={i * 0.08}>
                <div className={`achievement-badge bg-gradient-to-br ${award.color} border rounded-2xl p-6`}>
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{award.year}</span>
                  <h3 className="font-bold text-slate-900 text-base mt-1 mb-2">{award.title}</h3>
                  <p className="text-slate-500 text-xs">{award.authority}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rankers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Hall of Fame"
              title="Our Top"
              highlight="Rankers"
              subtitle="Proud of every student who achieved their dream rank."
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRankers.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shrink-0">
                    <Trophy size={24} className="text-amber-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{r.name}</h3>
                    <p className="text-blue-600 font-bold text-sm">{r.rank}</p>
                    <p className="text-slate-500 text-xs">{r.exam}</p>
                    <p className="text-amber-600 text-xs font-medium mt-0.5">{r.college}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-16 section-alt border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
              As Seen In
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Times of India', 'Hindustan Times', 'Indian Express', 'Maharashtra Times', 'NDTV Education'].map((media) => (
                <span key={media} className="text-slate-400 font-bold text-base hover:text-blue-600 transition-colors cursor-default">
                  {media}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
