import { Link } from 'react-router-dom';
import {
  Atom, FlaskConical, BookOpen, Microscope, Calculator, BarChart,
  Clock, Users, Star, ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import ScrollReveal from '../components/ScrollReveal';

const courses = [
  {
    title: 'IIT-JEE Advanced',
    description: 'Intensive 2-year classroom program covering Physics, Chemistry, and Math with weekly tests, DPPs, and full-length mock exams modeled after JEE Advanced patterns.',
    duration: '2 Years',
    students: '1,200',
    rating: '4.9',
    level: 'Expert',
    color: 'blue',
    icon: Atom,
  },
  {
    title: 'JEE Main Booster',
    description: 'Focused program for students targeting JEE Main with emphasis on NCERT syllabus, concept application, and time-management strategies.',
    duration: '1 Year',
    students: '850',
    rating: '4.8',
    level: 'Advanced',
    color: 'indigo',
    icon: Calculator,
  },
  {
    title: 'NEET UG Excellence',
    description: 'Biology, Physics & Chemistry with NCERT mastery, topic-wise assessments, and AIIMS-level question practice for aspiring medical professionals.',
    duration: '2 Years',
    students: '980',
    rating: '4.8',
    level: 'Expert',
    color: 'green',
    icon: Microscope,
  },
  {
    title: 'MHT-CET Programme',
    description: 'State board-aligned curriculum with Maharashtra-specific syllabus coverage, past paper analysis, and targeted preparation for MHT-CET.',
    duration: '1 Year',
    students: '560',
    rating: '4.7',
    level: 'Advanced',
    color: 'purple',
    icon: FlaskConical,
  },
  {
    title: 'Foundation (8th–10th)',
    description: 'Build robust academic foundations for Classes 8–10 with integrated competitive exam concepts. Perfect early start for future JEE/NEET aspirants.',
    duration: '1–3 Years',
    students: '650',
    rating: '4.7',
    level: 'Beginner',
    color: 'amber',
    icon: BookOpen,
  },
  {
    title: 'Olympiad Training',
    description: 'Problem-solving excellence for INMO, IPhO, IChO, and other national/international science and math olympiads.',
    duration: '6 Months',
    students: '220',
    rating: '4.9',
    level: 'Elite',
    color: 'rose',
    icon: BarChart,
  },
];

const features = [
  { label: 'Daily Practice Problems (DPP)', icon: BookOpen },
  { label: 'Weekly Cumulative Tests', icon: Star },
  { label: 'Full-Length Mock Exams', icon: BarChart },
  { label: 'Recorded Video Lectures', icon: Users },
  { label: 'Live Doubt Resolution', icon: Clock },
  { label: 'Parent Progress Reports', icon: ArrowRight },
];

export default function Courses() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Courses Designed for{' '}
              <span className="text-amber-300">Your Success</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              From foundation to advanced levels, we have the perfect program to help you
              achieve your academic goals with expert guidance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Features Banner */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <f.icon size={18} className="text-blue-600" />
                </div>
                <span className="text-slate-600 text-xs font-medium leading-tight">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="All Programs"
              title="Choose Your"
              highlight="Learning Path"
              subtitle="Expert-crafted courses with proven results. Every batch is capped for personalised attention."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <ScrollReveal key={course.title} delay={i * 0.08} className="h-full">
                <CourseCard {...course} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Info CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 lg:p-14 text-center text-white overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
                Book a free 30-minute counselling session with our academic advisor. We'll help
                you pick the right programme based on your goals, timeline, and strengths.
              </p>
              <Link
                to="/contact"
                className="btn-accent inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-xl text-base"
              >
                Book Free Counselling <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
