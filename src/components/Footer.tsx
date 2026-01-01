import { motion } from 'motion/react';
import logoImage from 'figma:asset/668d5867f499eb76e25800fbc80ebfdc4a571661.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Sai Infrastructure Logo" 
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-200 text-sm">
              Leading provider of LED sign boards and professional signage solutions for businesses.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-200 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-200 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-200 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-gray-200 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-200 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <i className="fas fa-lightbulb text-accent"></i>
                LED Sign Boards
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-building text-accent"></i>
                Outdoor Signage
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-store text-accent"></i>
                Indoor Signage
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-palette text-accent"></i>
                Custom Branding
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8796968701"
                  className="flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-sm group"
                >
                  <i className="fas fa-phone text-accent group-hover:rotate-12 transition-transform"></i>
                  8796968701
                </a>
              </li>
              <li>
                <a
                  href="mailto:saiinfrastructure.official@gmail.com"
                  className="flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-sm group"
                >
                  <i className="fas fa-envelope text-accent group-hover:scale-110 transition-transform"></i>
                  saiinfrastructure.official@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_saiinfra_signages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-sm group"
                >
                  <i className="fab fa-instagram text-accent group-hover:scale-110 transition-transform"></i>
                  @_saiinfra_signages
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-200 text-sm">
                  <i className="fas fa-map-marker-alt text-accent mt-1"></i>
                  <span>1/13, Mukund Nagar, Pune, Maharashtra 411037</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Sai Infrastructure. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}