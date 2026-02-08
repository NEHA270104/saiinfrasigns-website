import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      title: 'LED Sign Boards',
      icon: 'fa-lightbulb',
      image: 'https://images.unsplash.com/photo-1737683703423-921628a7116f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc2lnbmFnZSUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzY2NjQ4OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-quality LED signage solutions designed to maximize visibility and create a lasting impression.',
      features: [
        'Energy-efficient LED technology',
        'Bright and vibrant displays',
        'Customizable sizes and designs',
        'Long-lasting durability',
        'Weather-resistant construction',
      ],
    },
    {
      title: 'Outdoor Signage',
      icon: 'fa-building',
      image: 'https://images.unsplash.com/photo-1742142826649-843d61af3923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2lnbmFnZSUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY2NDg5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Weather-resistant outdoor signage for commercial buildings, storefronts, and business premises.',
      features: [
        'UV-resistant materials',
        'All-weather durability',
        'High visibility from distance',
        'Professional installation',
        'Low maintenance requirements',
      ],
    },
    {
      title: 'Indoor Signage',
      icon: 'fa-store',
      image: 'https://images.unsplash.com/photo-1559056961-a6b61993c0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHNpZ25hZ2V8ZW58MXx8fHwxNzY2NjQ4OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Professional interior signage solutions for offices, retail spaces, and corporate environments.',
      features: [
        'Modern and elegant designs',
        'Wayfinding solutions',
        'Reception and lobby signage',
        'Directory boards',
        'ADA-compliant options',
      ],
    },
    {
      title: 'Custom Branding Solutions',
      icon: 'fa-palette',
      image: 'https://images.unsplash.com/photo-1563279699-4c5dfcab048c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBicmFuZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY2NDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Tailored branding and signage solutions to elevate your business identity and market presence.',
      features: [
        'Custom design consultation',
        'Brand-aligned aesthetics',
        'Unique fabrication',
        'Complete branding packages',
        'Installation and support',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.i 
              className="fas fa-cogs text-accent mr-3"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            ></motion.i>
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive signage solutions designed to meet all your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div 
                    className="relative rounded-lg overflow-hidden shadow-xl group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <motion.div 
                      className="absolute top-6 left-6 bg-accent p-4 rounded-lg shadow-lg"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={`fas ${service.icon} text-3xl text-white`}></i>
                    </motion.div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold text-primary mb-4 font-['Poppins']">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      >
                        <motion.i 
                          className="fas fa-check-circle text-accent mt-0.5 flex-shrink-0"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        ></motion.i>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 font-['Poppins']">
              <i className="fas fa-plus-circle text-accent mr-3"></i>
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We also offer specialized signage solutions for various applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-neos',
                title: 'Neon Sign Boards',
                description: 'Classic neon signage with modern efficiency and design',
              },
              {
                icon: 'fa-square',
                title: 'Acrylic Signage',
                description: 'Premium acrylic signs with professional finishing',
              },
              {
                icon: 'fa-tv',
                title: 'Digital Displays',
                description: 'Dynamic digital signage for modern communication',
              },
              {
                icon: 'fa-exclamation-triangle',
                title: 'Safety Signage',
                description: 'Compliant safety and directional signs for workplaces',
              },
              {
                icon: 'fa-car',
                title: 'Vehicle Branding',
                description: 'Mobile advertising solutions for your fleet',
              },
              {
                icon: 'fa-layer-group',
                title: 'ACP Panelling Work',
                description: 'Fabricating and installing Aluminium Composite Panels (ACP) for building exteriors (cladding, facades)',
              },
              {
                icon: 'fa-tools',
                title: 'Installation Services',
                description: 'Professional installation and maintenance support',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="inline-block p-3 bg-accent/10 rounded-lg mb-3"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "rgba(249, 115, 22, 0.2)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`fas ${item.icon} text-2xl text-accent`}></i>
                </motion.div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-['Poppins']">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48"
          animate={{ 
            scale: [1, 1.4, 1],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48"
          animate={{ 
            scale: [1, 1.4, 1],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-rocket text-accent mr-3"></i>
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today for a free consultation
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
              className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now: 8796968701
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}