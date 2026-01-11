import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import chatLogo from 'figma:asset/74d0a26f5d60b09327bb9592cb5161d880e05f49.png';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Show welcome message when chat opens for the first time
      setTimeout(() => {
        addBotMessage(
          "Hello 👋 Welcome to Sai Infrastructure!\\n\\nI'm your virtual assistant. I can help you explore our services and answer your questions.\\n\\nWhat would you like to know about?"
        );
        setShowServiceOptions(true);
      }, 500);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Reset conversation after closing animation completes
    setTimeout(() => {
      setMessages([]);
      setInputValue('');
      setIsTyping(false);
      setShowServiceOptions(false);
    }, 300);
  };

  const addBotMessage = (text: string, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      options,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // Greetings
    if (input.match(/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)/)) {
      return "Hello! 😊 I'm happy to help you.\n\nWould you like to:\n• Learn about our services\n• Request a quotation\n• Ask a question";
    }

    // Services inquiry
    if (input.match(/(service|services|what do you|what you do|offerings|provide)/)) {
      return "We specialize in:\n\n✅ LED Sign Boards\n✅ Outdoor Signage\n✅ Indoor Signage\n✅ Neon Sign Boards\n✅ Acrylic Signage\n✅ Digital Displays\n✅ Vehicle Branding\n✅ ACP Panelling Work\n✅ Custom Branding Solutions\n\nWhich service interests you? Or would you like to request a quotation?";
    }

    // LED signs
    if (input.match(/(led|led sign|led board|light)/)) {
      return "Great choice! Our LED Sign Boards are:\n\n• Energy efficient\n• Bright & eye-catching\n• Weather resistant\n• Long-lasting\n• Customizable designs\n\nWould you like to request a quotation for LED signage?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Outdoor signage
    if (input.match(/(outdoor|outside|shop board|exterior)/)) {
      return "Our Outdoor Signage includes:\n\n• Durable materials\n• Weather-proof coating\n• High visibility\n• Custom sizes & designs\n• Professional installation\n\nInterested in getting a quotation?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Indoor signage
    if (input.match(/(indoor|inside|office|interior)/)) {
      return "Our Indoor Signage offers:\n\n• Professional look\n• Directory boards\n• Wall graphics\n• Reception signage\n• Safety signs\n\nShall I help you request a quotation?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Neon signs
    if (input.match(/(neon|neon sign)/)) {
      return "Neon Sign Boards are perfect for:\n\n• Restaurants & cafes\n• Bars & lounges\n• Retail shops\n• Modern branding\n• Eye-catching displays\n\nWould you like a quotation for neon signage?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Acrylic signage
    if (input.match(/(acrylic|acrylic sign|acrylic board)/)) {
      return "Acrylic Signage is ideal for:\n\n• Premium look & feel\n• 3D lettering\n• Backlit options\n• Lightweight & durable\n• Indoor & outdoor use\n• Corporate branding\n\nInterested in acrylic signage? I can help you get a quote!\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Digital displays
    if (input.match(/(digital|digital display|screen|monitor)/)) {
      return "Our Digital Displays include:\n\n• High-resolution screens\n• Content management\n• Dynamic advertising\n• Eye-catching animations\n• Perfect for retail & corporate\n\nWant to learn more? Request a quotation!\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Vehicle branding
    if (input.match(/(vehicle|car|truck|van|branding|wrap)/)) {
      return "Vehicle Branding includes:\n\n• Full vehicle wraps\n• Partial graphics\n• Fleet branding\n• Professional application\n• Durable vinyl materials\n\nReady to request a quotation?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // ACP panelling
    if (input.match(/(acp|panel|panelling|cladding)/)) {
      return "ACP Panelling Work provides:\n\n• Modern exterior finish\n• Durable & lightweight\n• Weather resistant\n• Various colors available\n• Professional installation\n\nInterested in getting a quote?\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com";
    }

    // Experience / About company
    if (input.match(/(experience|years|how long|established|about|who are you|company)/)) {
      return "Sai Infrastructure is a trusted name in signage! 🏆\n\n• Professional manufacturing\n• Quality craftsmanship\n• Experienced team\n• Serving shops, offices, factories & corporate buildings\n• Based in India\n\nWe've completed projects for restaurants, clinics, jewelry stores, and more!\n\nWould you like to see our work or get a quotation?";
    }

    // Portfolio / Previous work
    if (input.match(/(portfolio|work|projects|examples|samples|previous|completed)/)) {
      return "We've completed amazing projects! ✨\n\nRecent work includes:\n• Tanishq Jewellers\n• Kids Care Paediatric Clinic\n• Dosamaa Restaurant\n• And many more!\n\nYou can view our complete portfolio on the website's 'Our Work' page.\n\nInterested in similar work? Request a quotation!";
    }

    // Custom design
    if (input.match(/(custom|customize|design|personalize|unique|specific)/)) {
      return "Yes! We specialize in custom designs! 🎨\n\n• Your logo & branding\n• Custom colors\n• Unique shapes & sizes\n• Specific fonts\n• Creative concepts\n\nOur design team works with you to create the perfect signage.\n\nReady to discuss your custom project? Request a quotation!";
    }

    // Location / Service area
    if (input.match(/(where|location|area|service area|coverage|city|available)/)) {
      return "We serve various locations! 📍\n\nFor specific service area details and to confirm we serve your location, please:\n\n• Call us: 8796968701\n• Or submit a quotation request with your location\n\nWe'll confirm availability and provide details!";
    }

    // Colors
    if (input.match(/(color|colour|shade|hue|rgb)/)) {
      return "We offer extensive color options! 🌈\n\n• Full color spectrum\n• Brand color matching\n• LED color options (white, RGB, custom)\n• Neon in various colors\n• Printed graphics in any color\n\nFor exact color matching and options, request a quotation with your requirements!";
    }

    // Size questions
    if (input.match(/(size|dimension|big|small|large|height|width)/)) {
      return "We create signage in all sizes! 📏\n\n• Small shop boards\n• Medium office signs\n• Large building signage\n• Custom dimensions\n• Made to fit your space\n\nFor exact sizing and feasibility, please request a quotation with your dimensions!";
    }

    // Materials
    if (input.match(/(material|quality|durable|warranty)/)) {
      return "We use high-quality materials:\n\n✅ Weather-resistant\n✅ Long-lasting\n✅ Professional grade\n✅ Tested & certified\n\nFor specific material details based on your project, please request a quotation. Our team will provide complete information!";
    }

    // Installation
    if (input.match(/(install|installation|fitting|setup|mount)/)) {
      return "Yes, we provide professional installation! ✅\n\n• Expert technicians\n• Safe & secure mounting\n• Clean work area\n• Quality assurance\n• Post-installation support\n\nInstallation details and costs are included in your quotation. Shall I help you request one?";
    }

    // Maintenance / After-sales
    if (input.match(/(maintenance|service|repair|fix|after sales|support)/)) {
      return "We offer maintenance & support! 🔧\n\n• After-sales service\n• Repair assistance\n• Maintenance guidance\n• Long-term support\n• Quality guarantee\n\nFor maintenance services, call: 8796968701\nOr request a quotation for new work!";
    }

    // Business types served
    if (input.match(/(restaurant|shop|office|clinic|hospital|factory|showroom|mall|hotel)/)) {
      return "Perfect! We serve all business types! 🏢\n\n• Restaurants & Cafes\n• Retail Shops & Showrooms\n• Clinics & Hospitals\n• Corporate Offices\n• Factories & Industries\n• Hotels & Resorts\n• Shopping Malls\n\nWe've done work for businesses just like yours!\n\nReady to get a quotation for your business?";
    }

    // Energy efficiency
    if (input.match(/(energy|power|electricity|consumption|efficient|save)/)) {
      return "Our LED signage is super energy-efficient! ⚡\n\n• Low power consumption\n• Saves electricity costs\n• Long bulb life\n• Eco-friendly\n• Bright with less power\n\nLED signs can reduce energy costs by up to 80% compared to traditional lighting!\n\nWant to switch to energy-efficient signage? Request a quote!";
    }

    // Urgent / Emergency
    if (input.match(/(urgent|emergency|quick|fast|asap|immediate|rush)/)) {
      return "We handle urgent projects! ⚡\n\n• Express service available\n• Quick turnaround options\n• Priority processing\n• 1-week urgent projects possible\n\nFor urgent requirements:\n📞 Call directly: 8796968701\n\nOr mention 'URGENT' in your quotation request!";
    }

    // Free consultation / Design help
    if (input.match(/(consultation|consult|advice|help|suggest|recommend|free)/)) {
      return "Yes! We offer free consultation! 💡\n\n• Design suggestions\n• Material recommendations\n• Size guidance\n• Budget planning\n• Technical advice\n\nOur team is happy to help you choose the best signage solution.\n\nRequest a quotation and our team will consult with you!";
    }

    // Payment terms
    if (input.match(/(payment|pay|cost|pricing|advance|installment)/)) {
      return "Payment details are discussed during quotation! 💳\n\n• Flexible payment options\n• Transparent pricing\n• No hidden charges\n• Details provided in quote\n\nPlease request a quotation to receive:\n• Exact costs\n• Payment terms\n• Project breakdown\n\nShall I open the quotation form?";
    }

    // Waterproof / Weather resistant
    if (input.match(/(waterproof|rain|weather|sun|outdoor rated)/)) {
      return "Our outdoor signage is fully weather-resistant! ☔🌞\n\n• Waterproof construction\n• UV protected\n• Rain & sun resistant\n• Temperature tolerant\n• Durable in all seasons\n\nDesigned to last for years outdoors!\n\nInterested in weather-proof signage? Get a quote!";
    }

    // Comparison (LED vs Neon, etc.)
    if (input.match(/(difference|compare|better|vs|versus|which one)/)) {
      return "Great question! Each type has benefits:\n\n💡 LED Signs:\n• Energy efficient\n• Very bright\n• Long-lasting\n• Lower running cost\n\n🌟 Neon Signs:\n• Vintage aesthetic\n• Soft glow\n• Premium look\n• Modern trend\n\n🎯 Acrylic:\n• Professional & elegant\n• 3D effects\n• Premium finish\n\nBest choice depends on your needs!\n\nRequest a quotation and we'll recommend the perfect option!";
    }

    // Social media
    if (input.match(/(instagram|social|follow|facebook|page)/)) {
      return "Follow us on Instagram! 📱\n\n@_saiinfra_signages\n\nSee our latest projects, designs, and completed work!\n\nWould you like to request a quotation or know anything else?";
    }

    // Warranty
    if (input.match(/(warranty|guarantee|lasting|lifespan)/)) {
      return "We stand behind our quality! ✅\n\n• Quality assurance\n• Durable construction\n• Long-lasting materials\n• Professional workmanship\n\nSpecific warranty details are provided based on the product type.\n\nRequest a quotation for complete warranty information!";
    }

    // Bulk orders / Multiple locations
    if (input.match(/(bulk|multiple|many|several|franchise|chain)/)) {
      return "We handle bulk orders & multi-location projects! 🏢\n\n• Franchise chains\n• Multiple outlets\n• Bulk discounts available\n• Consistent branding\n• Coordinated installation\n\nPerfect for businesses expanding to multiple locations!\n\nRequest a quotation mentioning bulk/multiple units!";
    }

    // 3D lettering
    if (input.match(/(3d|three d|dimensional|raised|depth)/)) {
      return "3D Lettering looks amazing! ✨\n\n• Eye-catching depth effect\n• Premium appearance\n• Metal or acrylic options\n• Backlit possibilities\n• Perfect for corporate branding\n\nIdeal for reception areas, building facades, and premium shops!\n\nInterested in 3D signage? Request a quotation!";
    }

    // Safety / Permits
    if (input.match(/(permit|approval|legal|safe|regulation|compliance)/)) {
      return "We ensure safety & compliance! 📋\n\n• Safe installation practices\n• Quality materials\n• Professional mounting\n• Structural safety\n\nFor permits and local approvals, we can guide you. Requirements vary by location.\n\nRequest a quotation and discuss permit needs with our team!";
    }

    // Backlit / Illuminated
    if (input.match(/(backlit|illuminated|light up|glow|lit)/)) {
      return "Backlit signage creates amazing impact! 💡\n\n• Illuminated 24/7\n• Eye-catching at night\n• LED backlighting\n• Energy efficient\n• Multiple color options\n\nPerfect for shops, restaurants, and businesses that operate in the evening!\n\nWant backlit signage? Request a quotation!";
    }

    // Quotation/Price inquiry
    if (input.match(/(quote|quotation|price|cost|how much|rate|estimate)/)) {
      return "I'd be happy to help you get a quotation! 📋\n\nTo provide an accurate quote, our team needs:\n\n• Type of work\n• Work location/address\n• Budget range (optional)\n• Project timeline (optional)\n• Any special requirements\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com\n\nOur team will discuss your project and provide a detailed quotation!";
    }

    // Form help
    if (input.match(/(form|fill|submit|how to)/)) {
      return "For quotations and inquiries! 📞📧\n\nContact us:\n\n📞 Phone: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com\n\nOur team will:\n\n1️⃣ Understand your requirements\n2️⃣ Discuss your project details\n3️⃣ Provide accurate pricing\n4️⃣ Answer all your questions\n\nCall us now or visit the Contact page!";
    }

    // After submission
    if (input.match(/(after submit|what happens|next step|response time|how long)/)) {
      return "To get a quotation:\n\n📞 Call: 8796968701\n📧 Email: saiinfrastructure.official@gmail.com\n\n1️⃣ Tell us your requirements\n2️⃣ Discuss project details\n3️⃣ Get immediate answers\n4️⃣ Receive accurate pricing\n\n⏰ Available during business hours\n\nOr visit our Contact page!";
    }

    // Contact info
    if (input.match(/(contact|phone|call|email|address|location|reach)/)) {
      return "📞 Contact Us:\n\nPhone: 8796968701\nEmail: saiinfrastructure.official@gmail.com\n\nFollow us:\nInstagram: @_saiinfra_signages\n\nWould you like to request a quotation or ask anything else?";
    }

    // Timeline questions
    if (input.match(/(time|duration|how long|when|deadline|urgent)/)) {
      return "Project timelines vary based on:\n\n• Type of work\n• Size & complexity\n• Material availability\n• Installation requirements\n\nFor accurate timeline, please submit a quotation request. We offer:\n\n✅ Urgent projects (1 week)\n✅ Standard projects (2-4 weeks)\n✅ Custom timelines\n\nWould you like to request a quotation?";
    }

    // Yes responses
    if (input.match(/^(yes|yeah|yep|sure|okay|ok|please|go ahead)/)) {
      return "Perfect! 📞\n\nPlease call us at:\n8796968701\n\nOur team is ready to:\n• Understand your needs\n• Provide expert guidance\n• Prepare accurate quotations\n• Answer all questions\n\nLooking forward to working with you!";
    }

    // No responses
    if (input.match(/^(no|nope|not now|later|maybe)/)) {
      return "No problem! 😊\n\nTake your time. I'm here whenever you need help.\n\nFeel free to ask any questions about our services!";
    }

    // Thank you
    if (input.match(/(thank|thanks|appreciate)/)) {
      return "You're very welcome! 😊\n\nIs there anything else I can help you with today?";
    }

    // Goodbye
    if (input.match(/(bye|goodbye|see you|take care)/)) {
      return "Thank you for visiting Sai Infrastructure! 👋\n\nFeel free to return anytime. Have a great day!\n\nFor immediate assistance, call: 8796968701";
    }

    // Default response
    return "I'm here to help! 😊\n\nI can assist you with:\n\n• Information about our services\n• Requesting a quotation\n• Contact details\n• General questions\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = generateBotResponse(userMessage);
      
      if (response === "OPEN_QUOTATION_FORM") {
        addBotMessage("Great! Opening the quotation form for you now... 📋");
        setTimeout(() => {
          // onOpenQuotationForm();
          setIsOpen(false);
        }, 1000);
      } else {
        addBotMessage(response);
      }
      
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    addUserMessage(action);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(action);
      
      if (response === "OPEN_QUOTATION_FORM") {
        addBotMessage("Great! Opening the quotation form for you now... 📋");
        setTimeout(() => {
          // onOpenQuotationForm();
          setIsOpen(false);
        }, 1000);
      } else {
        addBotMessage(response);
      }
      
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? (
          <i className="fas fa-times text-2xl"></i>
        ) : (
          <div className="relative">
            <i className="fas fa-comments text-2xl"></i>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-40 bg-white rounded-2xl shadow-2xl flex flex-col max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:rounded-b-none"
            style={{ 
              width: 'min(400px, calc(100vw - 3rem))',
              height: 'min(600px, calc(100vh - 8rem))',
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            {/* Header */}
            <div className="bg-primary text-white px-6 py-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white p-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <img 
                    src={chatLogo} 
                    alt="Sai Infrastructure Chat" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="font-bold font-['Poppins']">Sai Infrastructure</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>AI Assistant</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={handleClose}
                className="text-white text-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {message.text}
                    {message.options && (
                      <div className="mt-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickAction(option)}
                            className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showServiceOptions && messages.length > 0 && messages.length < 4 && (
              <div className="px-4 py-3 bg-white border-t border-gray-200 flex-shrink-0">
                <div className="text-xs text-gray-500 mb-2 font-semibold">Explore our services:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      handleQuickAction('LED Sign Boards');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors font-medium"
                  >
                    💡 LED Signs
                  </button>
                  <button
                    onClick={() => {
                      handleQuickAction('Neon Sign Boards');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors font-medium"
                  >
                    🌟 Neon Signs
                  </button>
                  <button
                    onClick={() => {
                      handleQuickAction('Outdoor Signage');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                  >
                    🏢 Outdoor
                  </button>
                  <button
                    onClick={() => {
                      handleQuickAction('Indoor Signage');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                  >
                    🏪 Indoor
                  </button>
                  <button
                    onClick={() => {
                      handleQuickAction('Acrylic Signage');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors font-medium"
                  >
                    🎯 Acrylic
                  </button>
                  <button
                    onClick={() => {
                      handleQuickAction('Contact details');
                      setShowServiceOptions(false);
                    }}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-green-100 to-green-50 border border-green-300 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
                  >
                    📞 Contact Us
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl flex-shrink-0 max-md:rounded-b-none">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-paper-plane"></i>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}