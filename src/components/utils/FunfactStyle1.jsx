import { useEffect, useRef, useState } from "react";

const FunfactStyle1 = ({ value, suffix = "", label = "", duration = 1500 }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const end = typeof value === "string" ? parseInt(value, 10) : value;
          if (isNaN(end)) return;

          let start = 0;
          const increment = Math.max(1, Math.ceil(end / (duration / 20)));

          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDisplayCount(end);
              clearInterval(interval);
            } else {
              setDisplayCount(start);
            }
          }, 20);

          observer.unobserve(element); // stop observing after first trigger
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <div ref={ref}>
      <h2>
        <span className="counter">{displayCount.toLocaleString()}</span>
        {suffix}
      </h2>
    </div>
  );
};

export default FunfactStyle1;
