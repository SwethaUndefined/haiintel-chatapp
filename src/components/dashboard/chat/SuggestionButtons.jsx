import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SuggestionButtons({ suggestions, onSelect, disabled }) {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 10, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
  className="flex flex-wrap justify-center gap-2 mb-4"
  style={{marginLeft:'10px',marginTop:'10px'}}
    >
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          variants={buttonVariants}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(suggestion)}
          disabled={disabled}
          className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          style={{padding:'8px'}}

        >
          <Sparkles className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          {suggestion}
        </motion.button>
      ))}
    </motion.div>
  );
}