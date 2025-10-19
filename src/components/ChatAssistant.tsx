import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from './Button';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm VYOMA3D Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const quickActions = [
    'Get a quote',
    'View services',
    'Training programs',
    'Contact sales'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, {
      text: input,
      isUser: true,
      timestamp: new Date()
    }]);

    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'quote': 'I can help you get a quote! Please visit our Get a Quote page or provide your project details here.',
        'services': 'We offer CAD/CAE Services, 3D Printing, Products, and Training. Which would you like to know more about?',
        'training': 'Our training programs include CAD mastery, FEA certification, and Design for AM. Interested in any specific track?',
        'contact': 'You can reach us at info@vyoma3d.com or call +1 (555) 123-4567. Would you like to schedule a consultation?'
      };

      const lowerInput = input.toLowerCase();
      let response = 'Thank you for your message. Our team will get back to you shortly. You can also explore our services or get a quote directly!';

      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, {
        text: response,
        isUser: false,
        timestamp: new Date()
      }]);
    }, 1000);

    setInput('');
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? '60px' : 'auto'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-violet-600/20 to-cyan-600/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">VYOMA3D Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minimize2 size={16} className="text-gray-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl ${
                            message.isUser
                              ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-br-sm'
                              : 'bg-white/5 text-gray-300 rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 px-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {messages.length === 1 && (
                  <div className="px-4 pb-4">
                    <p className="text-xs text-gray-400 mb-2">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleQuickAction(action)}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 text-sm"
                    />
                    <button
                      onClick={handleSend}
                      className="p-2 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl hover:from-violet-700 hover:to-violet-600 transition-all"
                    >
                      <Send size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/25 z-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="text-white" size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="text-white" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-violet-500/30"
        />
      </motion.button>
    </>
  );
};
