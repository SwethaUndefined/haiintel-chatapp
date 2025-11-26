import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Trash2, Minimize2 } from "lucide-react";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import SuggestionButtons from "./SuggestionButtons";
import mockData from "./mockResponses";

export default function ChatWindow({
  isOpen,
  onClose,
  messages,
  setMessages,
  clearMessages,
}) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setCurrentSuggestions([
        "Hello",
        "Dashboard overview",
        "Show anomaly summary",
      ]);
    }
  }, [isOpen, messages.length]);

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const matchedResponse = mockData.responses.find((item) =>
      item.triggers.some((trigger) => lowerMessage.includes(trigger))
    );
    return matchedResponse || mockData.defaultResponse;
  };

  const streamText = async (text, suggestions) => {
    setIsStreaming(true);
    setStreamingMessage("");

    const words = text.split(" ");
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      currentText += (i === 0 ? "" : " ") + words[i];
      setStreamingMessage(currentText);
      await new Promise((resolve) =>
        setTimeout(resolve, 30 + Math.random() * 40)
      );
    }

    setIsStreaming(false);
    setStreamingMessage("");
    setMessages((prev) => [...prev, { text, isUser: false, id: crypto.randomUUID() }]);
    setCurrentSuggestions(suggestions || []);
  };

  const handleSend = async (messageText = input) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage || isTyping || isStreaming) return;

    const userMessage = { text: trimmedMessage, isUser: true,   id: crypto.randomUUID(), 
 };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setCurrentSuggestions([]);

    setIsTyping(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 700)
    );
    setIsTyping(false);

    const responseData = findResponse(trimmedMessage);
    await streamText(responseData.response, responseData.suggestions);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion);
  };

  const handleClearChat = () => {
    clearMessages();
    setCurrentSuggestions([
      "Hello",
      "Dashboard overview",
      "Show anomaly summary",
    ]);
  };

  const windowVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      originX: 1,
      originY: 1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={windowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[32rem] bg-gradient-to-b from-slate-900/95 to-slate-950/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-slate-700/50 flex flex-col overflow-hidden z-50"
        >
          <div
            className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-b border-slate-700/50"
            style={{ paddingLeft: "12px", paddingRight: "8px", padding: "8px" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  HaiIntel Assistant
                </h3>
                <p className="text-xs text-slate-400">
                  AI-Powered Intelligence
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClearChat}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Clear chat"
                style={{ marginRight: "10px" }}
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.length === 0 && !isTyping && !streamingMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
                style={{marginTop:'25px'}}
              >
                <div className="flex justify-center items-center">
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30">
                    <svg
                      className="w-8 h-8 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>

                <h4
                  className="text-white font-medium mb-1"
                  style={{ marginTop: "10px" }}
                >
                  Welcome to HaiIntel
                </h4>
                <p
                  className="text-slate-400 text-sm"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    marginTop: "6px",
                    marginBottom: "10px",
                  }}
                >
                  Ask me about anomalies, dashboards, or security insights
                </p>
              </motion.div>
            )}

            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
            ))}

            {isStreaming && (
              <div key="ai-streaming-wrapper" className="flex-shrink-0">
                <ChatBubble
                  key="streaming"
                  message={streamingMessage}
                  isUser={false}
                  isStreaming
                />
              </div>
            )}

            <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

            {!isTyping && !isStreaming && currentSuggestions.length > 0 && (
              <SuggestionButtons
                suggestions={currentSuggestions}
                onSelect={handleSuggestionClick}
                disabled={isTyping || isStreaming}
              />
            )}

            <div ref={messagesEndRef} />
          </div>

          <div
            className="p-3 bg-gradient-to-r from-slate-800/60 to-slate-800/40 border-t border-slate-700/50"
            style={{ padding: "16px" }}
          >
            <div className="flex items-center gap-2 bg-slate-900/80 rounded-xl border border-slate-700/50 focus-within:border-cyan-500/50 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask HaiIntel..."
                disabled={isTyping || isStreaming}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none disabled:opacity-50"
                style={{
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping || isStreaming}
                className="p-2.5 mr-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
                style={{ padding: "10px", marginRight: "4px" }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
