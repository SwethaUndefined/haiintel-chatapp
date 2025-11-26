import React, { useState } from 'react';
import ChatLauncher from './ChatLauncher';
import ChatWindow from './ChatWindow';
import { useLocalStorage } from './useLocalStorage';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages, clearMessages] = useLocalStorage('haiintel-chat-messages', []);
  const [hasUnread, setHasUnread] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatWindow 
        isOpen={isOpen} 
        onClose={handleClose}
        messages={messages}
        setMessages={setMessages}
        clearMessages={clearMessages}
      />
      <ChatLauncher 
        isOpen={isOpen} 
        onClick={handleToggle}
        hasUnread={hasUnread}
      />
    </>
  );
}