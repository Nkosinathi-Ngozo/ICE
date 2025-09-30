import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ y: 0 });
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the ICE assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const float = () => {
      const time = Date.now() / 1000;
      setPosition({ y: Math.sin(time) * 10 });
    };

    const interval = setInterval(float, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);

    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! For detailed information, please contact us at BDO@ice4po.co.za",
        "I'd be happy to help! You can reach our team at +27 (0) 11 933 3838",
        "Great question! Visit our services section or email us at info@ice4po.co.za",
        "Our team would love to discuss this with you. Contact us during business hours: Mon-Fri 08:00-16:00"
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      <div
        className="fixed right-8 bottom-8 z-50 transition-transform duration-300 hover:scale-110"
        style={{ transform: `translateY(${position.y}px)` }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full shadow-2xl transition-colors relative"
        >
          {isOpen ? (
            <div className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
              <X size={28} className="text-white" />
            </div>
          ) : (
            <img
              src="/R5.png"
              alt="ICE Assistant Robot"
              className="w-14 h-14 object-contain"
            />
          )}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed right-8 bottom-28 z-50 w-80 md:w-96 bg-white rounded-lg shadow-2xl border-2 border-red-600 animate-slide-up">
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/ice.png" 
                alt="ICE Assistant Robot" 
                className="w-10 h-10 rounded-full mr-3 object-cover bg-white"
              />
              <div>
                <h3 className="font-bold">ICE Assistant</h3>
                <p className="text-xs text-red-100">Always here to help</p>
              </div>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot ? (
                  // Bot message
                  <div className="flex items-center space-x-3">
                    <img
                      src="/R5.png"
                      alt="Bot"
                      className="w-8 h-8 rounded-full object-contain"
                    />
                    <div className="max-w-[70%] p-3 rounded-lg bg-white text-gray-800 border border-gray-200">
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ) : (
                  // User message
                  <div className="flex items-center space-x-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold ml-[5px]">
                      YOU
                    </div>
                    <div className="max-w-[70%] p-3 rounded-lg bg-red-600 text-white">
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-red-600"
              />
              <button
                onClick={handleSend}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}