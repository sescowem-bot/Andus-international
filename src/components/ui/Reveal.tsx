"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  once?: boolean;
  duration?: number;
  amount?: number;
}

const variants = {
  hidden: {
    up:    { opacity: 0, y: 28 },
    down:  { opacity: 0, y: -28 },
    left:  { opacity: 0, x: 28 },
    right: { opacity: 0, x: -28 },
    fade:  { opacity: 0 },
    scale: { opacity: 0, scale: 0.94 },
  },
  visible: {
    up:    { opacity: 1, y: 0 },
    down:  { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    fade:  { opacity: 1 },
    scale: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children, className, delay = 0,
  direction = "up", once = true,
  duration = 0.6, amount = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={variants.hidden[direction]}
      animate={isInView ? variants.visible[direction] : variants.hidden[direction]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
