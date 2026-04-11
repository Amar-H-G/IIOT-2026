import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, BookOpen } from 'lucide-react';

const courses = [
  'JEE Main & Advanced',
  'NEET UG Preparation',
  'Foundation (8th–10th)',
  'Board Exam Excellence',
  'Olympiad Training',
  'MHT-CET Preparation',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (!form.phone.match(/^\d{10}$/)) errs.phone = '10-digit phone number required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h3>
        <p className="text-slate-500">
          Your enquiry has been received. Our counsellor will contact you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',course:'',message:'' }); }}
          className="mt-6 btn-primary px-6 py-3 text-white font-semibold rounded-xl text-sm"
        >
          Submit Another Query
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl space-y-5" noValidate>
      <h3 className="text-xl font-bold text-slate-900 mb-1">Send an Enquiry</h3>
      <p className="text-slate-400 text-sm">Fill the form below and we'll get back to you.</p>

      {/* Name */}
      <div>
        <label className="text-sm font-semibold text-slate-700 block mb-1.5">
          Full Name
        </label>
        <div className="relative">
          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your full name"
            className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-800 bg-slate-50"
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email Address</label>
        <div className="relative">
          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-800 bg-slate-50"
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-semibold text-slate-700 block mb-1.5">Phone Number</label>
        <div className="relative">
          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile number"
            className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-800 bg-slate-50"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Course */}
      <div>
        <label className="text-sm font-semibold text-slate-700 block mb-1.5">Interested Course</label>
        <div className="relative">
          <BookOpen size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <select
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-800 bg-slate-50 appearance-none cursor-pointer"
          >
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold text-slate-700 block mb-1.5">Message</label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your goals and any queries..."
            className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-800 bg-slate-50 resize-none"
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2"
      >
        <Send size={16} />
        Send Enquiry
      </button>
    </form>
  );
}
