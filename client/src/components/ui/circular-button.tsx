import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface CircularButtonProps {
  label: string;
  info: string;
  href: string;
}

export function CircularButton({ label, info, href }: CircularButtonProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Spinning animation variants
  const buttonVariants = {
    initial: { rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, 360], // Complete spin
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.3,
        }
      }
    },
    exit: {
      scale: 1,
      rotate: [null, 370, 350, 360], // Wobble effect
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };

  return (
    <motion.div
      className="relative"
      variants={buttonVariants}
      initial="initial"
      animate={isHovering ? "hover" : "exit"}
      onHoverStart={() => {
        setIsHovering(true);
        setShowInfo(true);
      }}
      onHoverEnd={() => {
        setIsHovering(false);
        setShowInfo(false);
      }}
    >
      <Link href={href}>
        <Button
          variant="outline"
          className="w-20 h-20 rounded-full font-bold text-sm bg-transparent 
                    border-2 border-white text-white transition-all duration-300
                    hover:bg-black hover:border-4 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
        >
          {label}
        </Button>
      </Link>

      {showInfo && <InfoBox text={info} />}
    </motion.div>
  );
}