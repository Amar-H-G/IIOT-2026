import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '42, Education Hub, Knowledge Park, Pune, Maharashtra – 411001',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 20 1234 5678',
    link: 'tel:+912012345678',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@iit-institute.in',
    link: 'mailto:info@iit-institute.in',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat: 8:00 AM – 8:00 PM',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    link: 'https://wa.me/919876543210',
    color: 'bg-emerald-100 text-emerald-600',
  },
];

const faqs = [
  {
    q: 'When does the new batch start?',
    a: 'New batches start in April and October every year. We also offer rolling admissions with bridge classes to help latecomers catch up.',
  },
  {
    q: 'Do you offer scholarships?',
    a: 'Yes! We offer merit-based scholarships of up to 100% fee waiver for students clearing our scholarship test. Financial aid is also available.',
  },
  {
    q: 'Is there a hostel facility?',
    a: 'Yes, we have separate hostel accommodations for boys and girls within 500m of the institute with all meals included.',
  },
  {
    q: 'Do you have online classes?',
    a: 'Yes, we offer a hybrid learning model with live online sessions, recorded lectures, and online test series accessible from anywhere.',
  },
];

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Let's Start Your{' '}
              <span className="text-amber-300">Journey</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              Reach out to us for admissions, courses, or any queries. Our team is happy to help you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <ScrollReveal direction="left">
                <SectionTitle
                  badge="Get in Touch"
                  title="We'd Love to"
                  highlight="Hear from You"
                  subtitle="Whether it's an admission query or a general question, we're here for you."
                  center={false}
                />
              </ScrollReveal>
              <div className="space-y-4 mt-4">
                {contactInfo.map((info, i) => (
                  <ScrollReveal key={info.label} direction="left" delay={i * 0.07}>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className={`w-11 h-11 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-slate-800 font-medium text-sm hover:text-blue-600 transition-colors mt-0.5 block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-800 font-medium text-sm mt-0.5">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Map Placeholder */}
              <ScrollReveal delay={0.3}>
                <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <iframe
                    title="Institute Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93596286754!2d73.78027403022462!3d18.524870573063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1733000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal direction="right">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="FAQs"
              title="Frequently Asked"
              highlight="Questions"
              subtitle="Quick answers to common queries from parents and students."
            />
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{faq.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
