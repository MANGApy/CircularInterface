import { CircularButton } from "@/components/ui/circular-button";
import { FloatingDots } from "@/components/ui/floating-dots";
import { motion } from "framer-motion";

const buttons = [
  { id: 1, label: "EXPLORE", info: "Discover new frontiers", href: "/explore" },
  { id: 2, label: "CONNECT", info: "Join the network", href: "/connect" },
  { id: 3, label: "ANALYZE", info: "Process the data", href: "/analyze" },
  { id: 4, label: "DEPLOY", info: "Launch your mission", href: "/deploy" },
  { id: 5, label: "MONITOR", info: "Track progress", href: "/monitor" },
  { id: 6, label: "CONTROL", info: "Take command", href: "/control" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <FloatingDots />
      <div className="relative w-[600px] h-[600px] max-w-full max-h-full">
        {/* Pulsating Title */}
        <motion.h1
          className="absolute text-6xl font-bold text-white z-10"
          style={{
            top: "calc(50% - 96px)", // 1 inch up
            left: "calc(50% - 72px)", // 1 inch left, then 0.25 inch right (96px - 72px)
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          INJU
        </motion.h1>

        {/* Circular Buttons */}
        {buttons.map((button, index) => {
          const angle = (index * 60 * Math.PI) / 180;
          const radius = 200; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={button.id}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <CircularButton
                label={button.label}
                info={button.info}
                href={button.href}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}