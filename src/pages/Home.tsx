import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutImage from 'figma:asset/dcc20aeb16a58c22f712b3d52168fec554a82975.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      title: 'LED Sign Boards',
      description: 'High-quality LED signage solutions for maximum visibility and brand impact.',
      icon: 'fa-lightbulb',
      image: 'https://images.unsplash.com/photo-1737683703423-921628a7116f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc2lnbmFnZSUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzY2NjQ4OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Outdoor Signage',
      description: 'Weather-resistant outdoor signs designed for commercial buildings and businesses.',
      icon: 'fa-building',
      image: 'https://images.unsplash.com/photo-1742142826649-843d61af3923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2lnbmFnZSUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY2NDg5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Indoor Signage',
      description: 'Professional interior signage for offices, retail spaces, and corporate environments.',
      icon: 'fa-store',
      image: 'https://images.unsplash.com/photo-1559056961-a6b61993c0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHNpZ25hZ2V8ZW58MXx8fHwxNzY2NjQ4OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Custom Branding Solutions',
      description: 'Tailored branding and signage solutions to elevate your business identity.',
      icon: 'fa-palette',
      image: 'https://images.unsplash.com/photo-1563279699-4c5dfcab048c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBicmFuZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY2NDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const whyChooseUs = [
    {
      icon: 'fa-award',
      title: 'Premium Quality Materials',
      description: 'We use only the finest materials to ensure durability and longevity.',
    },
    {
      icon: 'fa-clock',
      title: 'On-Time Project Delivery',
      description: 'Committed to meeting deadlines without compromising on quality.',
    },
    {
      icon: 'fa-users',
      title: 'Experienced Team',
      description: 'Years of expertise in signage manufacturing and installation.',
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Affordable Pricing',
      description: 'Competitive rates without sacrificing quality or service.',
    },
    {
      icon: 'fa-check-circle',
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We deliver excellence every time.',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1737683703423-921628a7116f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc2lnbmFnZSUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzY2NjQ4OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="LED Signage"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-['Poppins'] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sai Infrastructure
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-100 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            LED Sign Board & Professional Signage Solutions
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 font-['Poppins']">
              <i className="fas fa-cogs text-accent mr-3"></i>
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive signage solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigate('services')}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <motion.div 
                    className="flex items-center gap-3 mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div 
                      className="p-2 bg-accent/10 rounded-lg"
                      whileHover={{ 
                        rotate: 360,
                        backgroundColor: "rgba(249, 115, 22, 0.2)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={`fas ${service.icon} text-2xl text-accent`}></i>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary font-['Poppins']">
                      {service.title}
                    </h3>
                  </motion.div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src={aboutImage}
                  alt="About Sai Infrastructure"
                  className="rounded-lg shadow-xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10"
                  animate={{ 
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-primary mb-6 font-['Poppins']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <i className="fas fa-info-circle text-accent mr-3"></i>
                About Sai Infrastructure
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We are a leading provider of LED sign boards and professional signage solutions, 
                serving commercial shops, offices, factories, and corporate buildings across the region.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                With years of experience in the industry, we pride ourselves on delivering 
                high-quality products and exceptional service to help businesses enhance their 
                visibility and brand presence.
              </motion.p>
              <motion.button
                onClick={() => onNavigate('about')}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-right mr-2"></i>
                Read More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-['Poppins']">
              <i className="fas fa-star text-accent mr-3"></i>
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the Sai Infrastructure difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`fas ${item.icon} text-2xl text-accent`}></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2 font-['Poppins']">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-bullhorn text-accent mr-3"></i>
            Looking for Professional LED Sign Boards?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with us today for a free consultation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="tel:8796968701"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </motion.a>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
