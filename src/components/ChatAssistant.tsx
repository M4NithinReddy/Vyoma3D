import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

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
      text: "Hi! I'm VYOMA3D Assistant. Which service do you need help with today — CAD/CAE Services, 3D Printing, Products, or Training?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const quickActions = [
    'Get a quote',
    'Training programs',
    'View syllabus',
    'Products',
    '3D Printing',
    'CAD/CAE Services',
    'Enroll',
    'Contact'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, {
      text: input,
      isUser: true,
      timestamp: new Date()
    }]);

    setTimeout(() => {
      const intents: Array<{ keywords: string[]; reply: string }> = [
        {
          keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
          reply: 'Hello! Which service do you need help with — CAD/CAE Services, 3D Printing, Products, or Training?'
        },
        {
          keywords: ['quote', 'pricing', 'price', 'cost', 'estimate', 'quotation'],
          reply: 'To get a quick estimate, please use our Get a Quote form. We will reach out within 24 hours.'
        },
        {
          keywords: ['service', 'services', 'cad', 'cae', 'design', 'simulation'],
          reply: 'We offer CAD design, CAE/FEA simulation, and 3D printing services. Tell me which area you need help with.'
        },
        {
          keywords: ['3d print', '3d printing', 'dlp', 'printing'],
          reply: 'We provide DLP 3D printing with high detail and post-processing options. You can upload files via the Get a Quote page.'
        },
        {
          keywords: ['training', 'course', 'learn', 'syllabus', 'enroll'],
          reply: 'We run training programs in CAD, FEA and DfAM. You can view syllabi under Training or enroll via the Enroll page.'
        },
        {
          keywords: ['product', 'scanner', 'printer', 'materials'],
          reply: 'Check our Products section for available solutions. Let me know what product you are looking for.'
        },
        {
          keywords: ['contact', 'call', 'phone', 'number', 'whatsapp'],
          reply: 'You can reach us at info@vyoma3d.com or call +91 81421 49666. We are happy to help!'
        }
      ];

      const lower = input.toLowerCase();
      const matched = intents.find(it => it.keywords.some(k => lower.includes(k)));

      const response = matched
        ? matched.reply
        : 'Thanks! Which service do you need — CAD/CAE Services, 3D Printing, Products, or Training? For detailed assistance, please call +91 81421 49666 or email info@vyoma3d.com.';

      setMessages(prev => [...prev, {
        text: response,
        isUser: false,
        timestamp: new Date()
      }]);
    }, 600);

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
