"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = "", duration = 1800, className = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  );
}
