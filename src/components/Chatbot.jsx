import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I’m your assistant. Ask me about your projects, payments, freelancers or deadlines.",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickActions = [
    'Show my active projects',
    'Check payment status',
    'Find available freelancers',
    'View project deadlines'
  ];

  const mockBotResponse = (message) => {
    const responses = {
      'show my active projects': '📁 You have 3 active projects: Web App Revamp, Logo Design, and Blog Setup.',
      'check payment status': '💰 You have received 75% of your payment. ₹15,000 is pending.',
      'find available freelancers': '🧑‍💻 5 freelancers are available. Would you like to assign one?',
      'view project deadlines': '📅 Your next project deadline is August 5, 2025. Want to see the timeline?'
    };

    return responses[message.toLowerCase()] || "🤖 Sorry, I didn’t understand that. Try asking about projects, payments, freelancers or deadlines.";
  };

  const handleQuickAction = (action) => {
    setInputMessage(action);
    handleSendMessage(action); // Auto-send quick action
  };

  const handleSendMessage = (customInput = null) => {
    const text = customInput || inputMessage;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: mockBotResponse(text),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>💬</button>
      )}

      {isOpen && (
        <div className="chatbot-wrapper">
          <div className="chatbot-header">
            <span>HiveNimble Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
                <div className="timestamp">{msg.timestamp}</div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <div className="message-bubble typing">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="quick-actions">
            {quickActions.map((text, idx) => (
              <button key={idx} onClick={() => handleQuickAction(text)}>
                {text}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => handleSendMessage()} disabled={!inputMessage.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
