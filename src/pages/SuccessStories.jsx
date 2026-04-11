import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';

const stories = [
  {
    name: 'Arjun Sharma',
    rank: 'AIR 47 – JEE Advanced 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    quote: 'I joined IIT in Class 11 with average marks in Math. By the end of the first year, I was solving problems I never imagined I could. The faculty\'s patience and the structured DPPs made all the difference. Today I\'m at IIT Bombay — a dream I once thought impossible.',
    score: 'IIT Bombay – Computer Science',
    year: '2024',
    course: 'JEE Advanced Batch',
  },
  {
    name: 'Priya Mehta',
    rank: 'AIR 112 – NEET UG 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    quote: 'Being from a small town, I was intimidated at first. But the faculty here treated me like family. The biology sessions were unlike anything I\'d experienced, and the doubt resolution system helped me tackle my weaknesses head-on. AIIMS Delhi — I still can\'t believe it!',
    score: 'AIIMS New Delhi – MBBS',
    year: '2024',
    course: 'NEET Excellence Batch',
  },
  {
    name: 'Karthik Iyer',
    rank: 'AIR 83 – JEE Advanced 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik',
    quote: 'Three years of consistent hard work, guided by the best teachers I\'ve ever met. The mock exam environment here prepared me better than any book ever could. My biggest success? Trusting the process at IIT.',
    score: 'IIT Madras – Mechanical Engineering',
    year: '2024',
    course: 'JEE Advanced Batch',
  },
  {
    name: 'Ananya Singh',
    rank: 'AIR 156 – NEET 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
    quote: 'My parents sacrificed so much for my coaching fees. Knowing that, I gave every test my best. The institute gave me the tools; I used them relentlessly. Now I\'m at AIIMS Jodhpur, fulfilling my dream of becoming a doctor.',
    score: 'AIIMS Jodhpur – MBBS',
    year: '2024',
    course: 'NEET Excellence Batch',
  },
  {
    name: 'Rohan Desai',
    rank: 'AIR 198 – JEE Main 2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    quote: 'I failed my first attempt at JEE Main. I joined IIT for the repeater batch, and within 8 months, my rank improved from 45,000 to 198. The faculty didn\'t let me give up on myself. I will forever be grateful.',
    score: 'NIT Trichy – CSE',
    year: '2024',
    course: 'JEE Repeater Batch',
  },
  {
    name: 'Sneha Joshi',
    rank: 'AIR 245 – NEET 2023',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    quote: 'I used to struggle with Physics in NEET. The dedicated Physics sessions at IIT helped me score 175/180 in the subject. The quality of teaching here is second to none in Pune.',
    score: 'GMC Nagpur – MBBS',
    year: '2023',
    course: 'NEET Excellence Batch',
  },
];

const beforeAfter = [
  { name: 'Arjun Sharma', before: 'Class 11 – 58% in PCM', after: 'AIR 47 – IIT Bombay CS', time: '2 Years' },
  { name: 'Priya Mehta', before: 'NEET Score: 380/720', after: 'NEET Score: 685/720 – AIIMS', time: '1 Year' },
  { name: 'Rohan Desai', before: 'JEE Main Rank: 45,000', after: 'JEE Main Rank: 198 – NIT Trichy', time: '8 Months' },
];

export default function SuccessStories() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Students Who Changed{' '}
              <span className="text-amber-300">Their Stars</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              Real students. Real struggles. Real victories. These are the stories that drive us every day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Alumni Voices"
              title="Their Journey to"
              highlight="Success"
              subtitle="In their own words — the challenges, breakthroughs, and victories of our students."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08} className="h-full">
                <TestimonialCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Transformation"
              title="The IIT"
              highlight="Transformation"
              subtitle="See the remarkable journeys of students who joined us and turned their academic lives around."
            />
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-8">
            {beforeAfter.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} className="h-full">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp size={18} className="text-blue-600" />
                    <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                    <span className="ml-auto bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-500 uppercase mb-1">Before IIT</p>
                      <p className="text-slate-700 text-sm font-medium">{item.before}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-white rotate-90" />
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 mt-auto">
                      <p className="text-xs font-bold text-green-600 uppercase mb-1">After IIT</p>
                      <p className="text-slate-700 text-sm font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />
              <Quote size={40} className="text-amber-300/40 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Write Your Own Success Story
              </h2>
              <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                Join the ranks of our 15,000+ alumni who cracked India's toughest exams. 
                Your dream college is waiting. Let's get you there together.
              </p>
              <Link
                to="/contact"
                className="btn-accent inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-xl text-base"
              >
                Begin Your Journey <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
