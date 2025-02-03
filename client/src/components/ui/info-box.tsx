import { motion } from "framer-motion";

interface InfoBoxProps {
  text: string;
}

export function InfoBox({ text }: InfoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                 bg-black/90 text-gray-400 px-4 py-2 rounded-md 
                 text-sm whitespace-nowrap border border-gray-800
                 shadow-lg z-50"
    >
      {text}
    </motion.div>
  );
}
