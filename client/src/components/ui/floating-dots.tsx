import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

export function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Create new dots periodically
    const interval = setInterval(() => {
      if (dots.length < 100) {
        const newDot: Dot = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 1 + 1,
          opacity: Math.random() * 0.7 + 0.3,
        };
        setDots(prev => [...prev, newDot]);
      }
    }, 200);

    // Remove dots after animation
    const cleanup = setInterval(() => {
      setDots(prev => prev.slice(1));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, [dots.length]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-500/50"
          initial={{ x: dot.x, y: dot.y, scale: 0, opacity: 0 }}
          animate={{
            x: dot.x + (Math.random() * 300 - 150),
            y: dot.y + (Math.random() * 300 - 150),
            scale: dot.scale,
            opacity: [0, dot.opacity, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}