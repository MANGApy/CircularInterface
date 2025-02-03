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

  return (
    <motion.div
      className="relative"
      whileHover={{
        scale: 1.2,
      }}
      onHoverStart={() => setShowInfo(true)}
      onHoverEnd={() => setShowInfo(false)}
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
