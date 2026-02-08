import { motion } from 'motion/react';
import { QuotationForm } from '../components/QuotationForm';
import { useState } from 'react';

export function About() {
  const [isQuotationFormOpen, setIsQuotationFormOpen] = useState(false);
  const highlights = [
    {
      icon: 'fa-award',
      title: '5+ Years',
      description: 'Industry Experience',
    },
    {
      icon: 'fa-users',
      title: '500+',
      description: 'Happy Clients',
    },
    {
      icon: 'fa-trophy',
      title: '100+',
      description: 'Projects Completed',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.i 
              className="fas fa-building text-accent mr-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            ></motion.i>
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in LED signage and infrastructure solutions
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
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
                  src="https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY1NjI4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sai Infrastructure Team"
                  className="rounded-lg shadow-xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
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
                className="text-4xl font-bold text-primary mb-6 font-['Poppins']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <i className="fas fa-handshake text-accent mr-3"></i>
                Welcome to Sai Infrastructure
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Sai Infrastructure is a premier manufacturer and provider of LED sign boards and 
                comprehensive signage solutions. We specialize in delivering high-quality, 
                innovative signage products that help businesses stand out and make a lasting impression.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Our expertise spans across various industries, serving commercial shops, offices, 
                factories, and corporate buildings. We understand that effective signage is crucial 
                for brand visibility and customer engagement.
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                With a commitment to quality, innovation, and customer satisfaction, we have 
                established ourselves as a trusted name in the signage industry. Our team of 
                experienced professionals works tirelessly to deliver solutions that exceed expectations.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "rgba(249, 115, 22, 0.2)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`fas ${item.icon} text-3xl text-accent`}></i>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-2 font-['Poppins']"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              className="bg-primary/5 p-8 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(30, 58, 138, 0.2)" }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity }}
              ></motion.div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div 
                  className="p-3 bg-accent rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-bullseye text-2xl text-white"></i>
                </motion.div>
                <h2 className="text-3xl font-bold text-primary font-['Poppins']">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To provide exceptional LED signage and branding solutions that empower businesses 
                to enhance their visibility, strengthen their brand identity, and achieve their 
                marketing goals. We are committed to delivering superior quality products with 
                innovative designs, timely execution, and unmatched customer service.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-accent/5 p-8 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
            >
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"
                animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              ></motion.div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div 
                  className="p-3 bg-primary rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-eye text-2xl text-white"></i>
                </motion.div>
                <h2 className="text-3xl font-bold text-primary font-['Poppins']">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To become the most trusted and preferred signage solutions provider in the region, 
                known for our innovation, quality, and customer-centric approach. We aspire to 
                continuously evolve with emerging technologies and industry trends to deliver 
                cutting-edge solutions that drive business success for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
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
              <i className="fas fa-industry text-accent mr-3"></i>
              Industry Experience
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Serving diverse sectors with tailored signage solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 'fa-shopping-cart',
                title: 'Commercial & Retail',
                description: 'Eye-catching storefront signage, illuminated displays, and promotional boards that attract customers and boost sales for retail businesses and commercial shops.'
              },
              {
                icon: 'fa-briefcase',
                title: 'Corporate & Offices',
                description: 'Professional reception signage, wayfinding solutions, and branded displays that create a strong corporate identity and enhance workplace aesthetics.'
              },
              {
                icon: 'fa-industry',
                title: 'Industrial & Factories',
                description: 'Durable safety signage, facility identification boards, and industrial-grade displays designed to withstand harsh environments and ensure compliance.'
              },
              {
                icon: 'fa-hotel',
                title: 'Hospitality & Services',
                description: 'Elegant signage solutions for hotels, restaurants, and service providers that enhance customer experience and reinforce brand presence.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="inline-block p-3 bg-accent/10 rounded-lg mb-3"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`fas ${item.icon} text-2xl text-accent`}></i>
                </motion.div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-['Poppins']">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-accent/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Ready to Transform Your Business Identity?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how we can help elevate your brand with our signage solutions
          </motion.p>
          <motion.a
            href="tel:8796968701"
            className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-phone mr-2"></i>
            Contact Us Today
          </motion.a>
        </div>
      </section>

      {/* Quotation Form */}
      {isQuotationFormOpen && (
        <QuotationForm onClose={() => setIsQuotationFormOpen(false)} />
      )}
    </div>
  );
}