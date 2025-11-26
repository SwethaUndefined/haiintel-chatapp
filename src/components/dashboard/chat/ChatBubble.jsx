import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Cpu } from "lucide-react";

export default function ChatBubble({ message, isUser, isStreaming }) {
  const bubbleVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  if (isUser) {
    return (
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="flex justify-end items-start gap-3 mb-4 mr-3"
        style={{ marginRight: "10px",marginTop: "10px" }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
          <User className="w-4 h-4 text-white" />
        </div>

        <div className="max-w-[75%] bg-gradient-to-r from-violet-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg shadow-violet-500/10">
          <p
            className="text-white text-sm leading-relaxed whitespace-pre-wrap"
            style={{ padding: "5px", marginRight: "5px" }}
          >
            {message}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={bubbleVariants}
      initial="initial"
      animate="animate"
      className="flex justify-start items-start gap-3 mb-4"
      style={{ marginLeft: "10px", marginTop: "10px" }}
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
        <Cpu className="w-4 h-4 text-white" />
      </div>

      <div className="max-w-[80%] bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 border border-slate-600/30 shadow-lg">
        <p
          className="text-slate-100 text-sm leading-relaxed whitespace-pre-wrap"
          style={{ textAlign: "left", marginLeft: "5px", padding: "5px" }}
        >
          {message}
          {isStreaming && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 align-middle"
            />
          )}
        </p>
      </div>
    </motion.div>
  );
}
