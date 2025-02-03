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
      if (dots.length < 50) { // Maximum number of dots increased to 50
        const newDot: Dot = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
        };
        setDots(prev => [...prev, newDot]);
      }
    }, 500); // Decreased interval to 500ms for faster dot generation

    // Remove dots after animation
    const cleanup = setInterval(() => {
      setDots(prev => prev.slice(1));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          initial={{ x: dot.x, y: dot.y, scale: 0, opacity: 0 }}
          animate={{
            x: dot.x + (Math.random() * 200 - 100),
            y: dot.y + (Math.random() * 200 - 100),
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