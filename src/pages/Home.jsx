import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Award, TrendingUp, Users, BookOpen,
  Star, CheckCircle, Target, Zap, GraduationCap, Trophy, ChevronRight
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import StatCounter from '../components/StatCounter';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Trophy,
    title: '98% Success Rate',
    desc: 'Consistently producing top rankers in IIT-JEE and NEET every year.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    desc: 'IIT & AIIMS alumni with 10+ years of dedicated teaching experience.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Target,
    title: 'Personalized Learning',
    desc: 'Customised study plans tailored to each student\'s strengths and needs.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Zap,
    title: 'Advanced EduTech',
    desc: 'Smart classrooms, doubt-clearing sessions, and digital test series.',
    color: 'bg-purple-100 text-purple-600',
  },
];

const stats = [
  { end: 15000, label: 'Students Enrolled', suffix: '+', icon: Users },
  { end: 98, label: 'Selection Rate', suffix: '%', icon: TrendingUp },
  { end: 250, label: 'IIT Selections', suffix: '+', icon: Trophy },
  { end: 16, label: 'Years of Excellence', suffix: '+', icon: Award },
];

const topCourses = [
  {
    title: 'IIT-JEE Advanced',
    description: 'Comprehensive preparation for JEE Advanced with in-depth Physics, Chemistry and Math.',
    duration: '2 Years',
    students: '1,200',
    rating: '4.9',
    level: 'Expert',
    color: 'blue',
  },
  {
    title: 'NEET UG Prep',
    description: 'Master Biology, Physics & Chemistry with NCERT-focused, exam-pattern strategies.',
    duration: '2 Years',
    students: '980',
    rating: '4.8',
    level: 'Expert',
    color: 'green',
  },
  {
    title: 'Foundation Programme',
    description: 'Build solid academic foundations for Classes 8–10 with competitive exam basics.',
    duration: '1 Year',
    students: '650',
    rating: '4.7',
    level: 'Beginner',
    color: 'amber',
  },
];

const testimonials = [
  {
    name: 'Arjun Sharma',
    rank: 'AIR 47 – JEE Advanced',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    quote: 'The faculty here transformed my approach to problem solving. IIT\'s structured curriculum and mock tests gave me the edge I needed to crack JEE Advanced.',
    score: 'IIT Bombay – Computer Science',
    year: '2024',
    course: 'JEE Advanced Batch',
  },
  {
    name: 'Priya Mehta',
    rank: 'AIR 112 – NEET UG',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    quote: 'The biology sessions and regular tests kept me consistently on track. I couldn\'t have made it to AIIMS without this institute.',
    score: 'AIIMS New Delhi – MBBS',
    year: '2024',
    course: 'NEET Excellence Batch',
  },
  {
    name: 'Rahul Gupta',
    rank: 'AIR 89 – JEE Main',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    quote: 'From a 60% student to an IIT aspirant — this institute made it possible. The personal attention from mentors is unmatched.',
    score: 'NIT Trichy – ECE',
    year: '2023',
    course: 'JEE Main Batch',
  },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use 'from' not 'fromTo' so the element is visible before JS runs
      // This prevents LCP element from being hidden at initial paint
      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'all', // Clean up inline styles after animation
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="hero-bg min-h-screen flex items-center pt-20 pb-16" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20">
                <Star size={12} className="fill-amber-300" />
                India's Premier Coaching Institute
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Unlock Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Full Potential
                </span>{' '}
                with Expert Coaching
              </h1>
              <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
                Join 15,000+ students who achieved their IIT, NEET, and board exam dreams with
                Intelligent Institute of Technology — where excellence meets dedication.
              </p>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="btn-accent text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 text-base"
                >
                  Start Your Journey <ArrowRight size={18} />
                </Link>
                <Link
                  to="/courses"
                  className="text-white border border-white/30 hover:border-white/60 font-semibold px-8 py-4 rounded-xl flex items-center gap-2 text-base transition-all hover:bg-white/10"
                >
                  Explore Courses
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-10 flex items-center gap-6 flex-wrap">
                {[
                  { label: 'Students', value: '15,000+' },
                  { label: 'IIT Selections', value: '250+' },
                  { label: 'Years', value: '16+' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-amber-300 font-black text-2xl">{s.value}</div>
                    <div className="text-blue-200 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual card */}
            <div className="hero-content relative z-10 hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&fm=webp"
                    alt="Students studying at Intelligent Institute of Technology"
                    className="rounded-2xl w-full h-72 object-cover"
                    width="600"
                    height="288"
                    fetchPriority="high"
                    decoding="async"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Students+Studying'; }}
                  />
                  {/* Floating badge */}
                  <div className="absolute -top-5 -right-5 bg-amber-400 text-slate-900 rounded-2xl p-4 shadow-xl font-bold text-center">
                    <div className="text-2xl">🏆</div>
                    <div className="text-xs">Top Rated</div>
                    <div className="text-xs">Institute</div>
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-sm">98% Result</div>
                        <div className="text-slate-400 text-xs">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Why Choose Us"
              title="What Makes Us"
              highlight="Different"
              subtitle="We're not just a coaching centre — we're a launchpad for India's brightest minds."
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1} className="h-full">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl ${h.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0`}>
                    <h.icon size={26} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-auto line-clamp-2" title={h.desc}>{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Our Impact"
              title="Numbers That"
              highlight="Speak"
              subtitle="Decades of proven results that reflect our commitment to student success."
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} className="h-full">
                <StatCounter end={s.end} label={s.label} suffix={s.suffix} icon={s.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Courses ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <SectionTitle
                badge="Programs"
                title="Our Top"
                highlight="Courses"
                subtitle="Expertly designed programs to match every student's goals and aspirations."
                center={false}
              />
              <Link
                to="/courses"
                className="btn-primary text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm whitespace-nowrap"
              >
                All Courses <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCourses.map((course, i) => (
              <ScrollReveal key={course.title} delay={i * 0.12} className="h-full">
                <CourseCard {...course} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Testimonials"
              title="Success Stories from Our"
              highlight="Students"
              subtitle="Hear from our alumni who went on to crack IIT-JEE, NEET, and more."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1} className="h-full">
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link
                to="/success-stories"
                className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl"
              >
                Read More Stories <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20"></div>
          <div className="absolute w-64 h-64 bg-amber-400 rounded-full bottom-10 right-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20">
              <GraduationCap size={14} />
              Limited Seats Available
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Your IIT / NEET Dream<br />
              <span className="text-amber-300">Starts Here</span>
            </h2>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              Don't let another year pass. Join IIT coaching today and take the first step
              towards your dream college with India's most trusted institute.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="btn-accent text-white font-bold px-10 py-4 rounded-xl flex items-center gap-2 text-base"
              >
                Book Free Counselling <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="text-white border border-white/30 hover:border-white/60 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
