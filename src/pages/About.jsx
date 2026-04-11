import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, BookOpen, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';

const faculty = [
  {
    name: 'Dr. Ramesh Kumar',
    role: 'Head of Physics & Director',
    qualification: 'Ph.D. Physics – IIT Delhi',
    experience: '22 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh&backgroundColor=b6e3f4',
    speciality: 'Mechanics & Electrodynamics',
  },
  {
    name: 'Dr. Sunita Agarwal',
    role: 'Head of Chemistry',
    qualification: 'Ph.D. Organic Chemistry – IIT Bombay',
    experience: '18 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita&backgroundColor=c0aede',
    speciality: 'Organic & Physical Chemistry',
  },
  {
    name: 'Prof. Vikash Patel',
    role: 'Head of Mathematics',
    qualification: 'M.Sc. Mathematics – IIT Kanpur',
    experience: '15 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikash&backgroundColor=d1d4f9',
    speciality: 'Calculus & Algebra',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Head of Biology',
    qualification: 'Ph.D. Life Sciences – AIIMS',
    experience: '16 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaN&backgroundColor=ffd5dc',
    speciality: 'Zoology & Genetics',
  },
  {
    name: 'Mr. Aman Verma',
    role: 'Senior Math Faculty',
    qualification: 'M.Tech – IIT Roorkee',
    experience: '12 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=b6e3f4',
    speciality: 'Coordinate Geometry & Calculus',
  },
  {
    name: 'Ms. Deepa Joshi',
    role: 'Senior Biology Faculty',
    qualification: 'M.Sc. Botany – BHU',
    experience: '10 Years',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepa&backgroundColor=ffd5dc',
    speciality: 'Plant Physiology & Ecology',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Student-First',
    desc: 'Every decision we make centres on what\'s best for the student.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We set high standards and help students rise to meet them.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We build a supportive, motivating environment for every learner.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    desc: 'We evolve our teaching methods to stay ahead of exam patterns.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Shaping India's Future{' '}
              <span className="text-amber-300">Leaders</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              For over 16 years, Intelligent Institute of Technology has been the springboard
              for India's brightest students into IITs, AIIMSs, and top universities worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&q=80&fm=webp"
                alt="Intelligent Institute of Technology campus"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
                decoding="async"
                width="700"
                height="384"
                onError={(e) => { e.target.src = 'https://placehold.co/700x500/e2e8f0/1e293b?text=Campus+Image'; }}
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                Born from a Passion for{' '}
                <span className="gradient-text">Teaching Excellence</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Founded in 2008 by Dr. Ramesh Kumar, an IIT Delhi alumnus, the Intelligent
                Institute of Technology started with a simple vision: to make quality IIT-JEE
                and NEET coaching accessible to every deserving student in India.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                From a single classroom with 30 students, we've grown to a 10,000 sq. ft.
                campus with smart classrooms, a digital library, and a faculty of 50+ experts.
                Over 15,000 students have passed through our doors, many of them now
                engineers, doctors, and scientists changing the world.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Campus Area', value: '10,000 sq.ft' },
                  { label: 'Expert Faculty', value: '50+' },
                  { label: 'Founded', value: '2008' },
                ].map((s) => (
                  <div key={s.label} className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="font-black text-blue-700 text-xl">{s.value}</div>
                    <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Purpose"
              title="Our Mission &"
              highlight="Vision"
              subtitle="Guiding principles that shape everything we do."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                  <Target size={28} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">
                  To provide world-class, affordable, and results-oriented coaching that empowers
                  every student to achieve their highest academic potential. We believe every child
                  deserves a mentor who believes in them.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Holistic academic development',
                    'Exam-pattern mastery',
                    'Doubt resolution within 24 hours',
                    'Regular parent-teacher interaction',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                  <Eye size={28} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  To be India's most trusted and innovative coaching institute — a place where bright
                  young minds are transformed into future scientists, doctors, and engineers who
                  make the nation proud.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'India\'s top-ranked coaching institute by 2030',
                    'Hybrid learning for every student in India',
                    'Scholarship programs for underprivileged students',
                    'Research-driven teaching methodologies',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle badge="Values" title="Our Core" highlight="Values" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center group">
                  <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <v.icon size={26} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Faculty"
              title="Meet Our"
              highlight="Expert Faculty"
              subtitle="Our educators are IIT and AIIMS alumni with decades of teaching excellence."
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.08}>
                <div className="faculty-card bg-white rounded-2xl p-6 text-center">
                  <img
                    src={f.avatar}
                    alt={f.name}
                    className="w-20 h-20 rounded-full mx-auto bg-blue-50 border-4 border-blue-100 mb-4"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.target.src = `https://placehold.co/100x100/e2e8f0/1e293b?text=${f.name.charAt(0)}`; }}
                  />
                  <h3 className="font-bold text-slate-900 text-base">{f.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{f.role}</p>
                  <p className="text-slate-500 text-xs mt-1">{f.qualification}</p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                      {f.experience}
                    </span>
                    <span className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full font-medium">
                      {f.speciality}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
