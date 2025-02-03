import { motion } from "framer-motion";

export function FloatingSphere() {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
      {/* Main Sphere */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-red-600/75"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border-4 border-red-500/50 rounded-full"
          style={{
            width: `${400 + ring * 50}px`,
            height: `${400 + ring * 50}px`,
          }}
          animate={{
            rotateX: [0, 20, -20, 0],
            rotateY: [-20, 20, -20, -20],
            scale: [1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: 6 + ring,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ring * 0.5,
          }}
        />
      ))}
    </div>
  );
}
