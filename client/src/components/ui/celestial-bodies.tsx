import { motion } from "framer-motion";

export function Moon() {
  return (
    <motion.div
      className="absolute top-8 right-8"
      animate={{
        rotate: [-2, 2, -2],
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
      <motion.div
        className="absolute inset-0 w-24 h-24 rounded-full bg-black"
        style={{
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 80% 50%)",
        }}
      />
    </motion.div>
  );
}

export function Sun() {
  return (
    <motion.div
      className="absolute top-8 left-8"
      animate={{
        rotate: [2, -2, 2],
        y: [5, -5, 5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-[0_0_50px_rgba(255,255,255,0.6)]">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}
