"use client";
import { useEffect, useRef, useState } from "react";

export default function HeartbeatChartIcon({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={className + (visible ? " animate-breathe" : "")}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2 12 6 12 9 3 13 21 16 12 22 12" />
      <path d="M18 12v4" />
      <path d="M21 12v7" />
    </svg>
  );
}
