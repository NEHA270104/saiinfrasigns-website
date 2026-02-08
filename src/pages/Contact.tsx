import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.i 
              className="fas fa-envelope text-accent mr-3"
              animate={{ 
                rotate: [0, -15, 15, -15, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            ></motion.i>
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us for all your signage needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 font-['Poppins']">
                <i className="fas fa-comment-dots text-accent mr-3"></i>
                Get in Touch
              </h2>
              <motion.div 
                className="mb-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border-l-4 border-accent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <motion.i 
                    className="fas fa-gift text-accent text-2xl mt-1"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  ></motion.i>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-['Poppins']">
                      Want a FREE Quotation?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We'd love to hear about your project! Drop us an email with your requirements, 
                      and we'll get back to you with a detailed quotation tailored to your needs. 
                      No obligations, completely free!
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <i className="fas fa-envelope text-accent"></i>
                      <a
                        href="mailto:saiinfrastructure.official@gmail.com"
                        className="text-primary hover:text-accent transition-colors font-semibold underline decoration-accent/30 hover:decoration-accent"
                      >
                        saiinfrastructure.official@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help! Reach out to us through any of the following channels, 
                and our team will respond to your inquiry as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      backgroundColor: "rgba(249, 115, 22, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-phone text-2xl text-accent"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1 font-['Poppins']">
                      Phone
                    </h3>
                    <a
                      href="tel:8796968701"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      8796968701
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(249, 115, 22, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-envelope text-2xl text-accent"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1 font-['Poppins']">
                      Email
                    </h3>
                    <a
                      href="mailto:saiinfrastructure.official@gmail.com"
                      className="text-gray-600 hover:text-accent transition-colors break-all"
                    >
                      saiinfrastructure.official@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(249, 115, 22, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-map-marker-alt text-2xl text-accent"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1 font-['Poppins']">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      1/13, Mukund Nagar,<br />
                      Pune, Maharashtra 411037
                    </p>
                  </div>
                </motion.div>

                {/* Instagram */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                    whileHover={{ 
                      rotate: 360,
                      backgroundColor: "rgba(249, 115, 22, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fab fa-instagram text-2xl text-accent"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1 font-['Poppins']">
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/_saiinfra_signages"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      @_saiinfra_signages
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Business Hours */}
              <motion.div 
                className="mt-10 p-6 bg-primary/5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ boxShadow: "0 10px 30px rgba(30, 58, 138, 0.1)" }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4 font-['Poppins']">
                  <i className="fas fa-clock text-accent mr-2"></i>
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span><i className="fas fa-calendar-day text-accent mr-2"></i>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span><i className="fas fa-calendar-day text-accent mr-2"></i>Saturday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span><i className="fas fa-calendar-day text-accent mr-2"></i>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4 font-['Poppins']">
              <i className="fas fa-map-marker-alt text-accent mr-3"></i>
              Visit Us
            </h2>
            <p className="text-gray-600">
              We welcome you to visit our facility and discuss your requirements in person
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps?q=1/13,+Mukund+Nagar,+Pune,+Maharashtra+411037&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai Infrastructure Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white font-['Poppins']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-headset text-accent mr-3"></i>
            Need Immediate Assistance?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Call us now and speak directly with our signage experts
          </motion.p>
          <motion.a
            href="tel:8796968701"
            className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.i 
              className="fas fa-phone"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            ></motion.i>
            8796968701
          </motion.a>
        </div>
      </section>
    </div>
  );
}