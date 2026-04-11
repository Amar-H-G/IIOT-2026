import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ end, label, suffix = '+', icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-card rounded-2xl p-8 text-center text-white h-full flex flex-col items-center justify-center">
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4">
          <Icon size={28} className="text-amber-300" />
        </div>
      )}
      <div className="counter-number text-amber-300">
        {count.toLocaleString()}
        <span className="text-3xl">{suffix}</span>
      </div>
      <p className="text-blue-100 text-sm font-medium mt-2 w-full truncate" title={label}>{label}</p>
    </div>
  );
}
