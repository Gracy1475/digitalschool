import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FiMessageSquare, FiX, FiSend, FiMinimize2 } from 'react-icons/fi';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hi! I am the School Assistant AI. How can I help you today?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMessage = inputText.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInputText('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) {
                throw new Error("API Key not found. Please check your .env.local file.");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

            // Filter out the initial greeting and error messages for the API history
            const apiHistory = messages
                .filter(m => m.role !== 'error' && m.role !== 'system') // Filter internal roles
                .slice(1) // Skip the first greeting message which is from 'bot'
                .map(m => ({
                    role: m.role === 'bot' ? 'model' : 'user',
                    parts: [{ text: m.text }]
                }));

            const chat = model.startChat({
                history: apiHistory,
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'bot', text: text }]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            let errorMessage = "I'm having trouble connecting right now. Please try again later.";

            if (error.message.includes("API Key not found")) {
                errorMessage = "Configuration Error: API Key is missing.";
            }

            setMessages(prev => [...prev, { role: 'error', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
                    <FiMessageSquare />
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3><FiMessageSquare /> Assistant AI</h3>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <FiX />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="typing-indicator">
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                    <div className="typing-dot"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading || !inputText.trim()}>
                            <FiSend />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
