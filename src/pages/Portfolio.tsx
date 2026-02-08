import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuotationForm } from '../components/QuotationForm';

// Import real project images
import exteriorCladdingImage from 'figma:asset/d35d7037c3d692170a8767e9bab432126e14b5c3.png';
import swamisamarthImage from 'figma:asset/0052fc3480634a486def46206bf079c4da8573c2.png';
import north37DhabaImage from 'figma:asset/286db2250b866e8d11bb39d4c09f5e15a97ff39b.png';
import caneyardVegImage from 'figma:asset/a73aa9f9486bfc791cf9243c054c5253b77437a5.png';
import gadgilJewellersImage from 'figma:asset/bd3bba40065f238340a78b30023cc109b2f8fc8c.png';
import tathastuImage from 'figma:asset/456ff05ad5e36854ef96470aa7162c41199e7f58.png';
import samruddhiJewellers2Image from 'figma:asset/34fb1b9303622bd2a04545baadcd3cb011d0474b.png';
import pinkSecretsImage from 'figma:asset/89b43df0cffc310c3c8efad2b39c403795dd6324.png';
import aadinathMandirImage from 'figma:asset/457213e68132ad5a368eea5663a026261f6ec4e9.png';
import manyavarImage from 'figma:asset/480d8e62d42bae22358f40c72bfe6389093568ad.png';
import smiraHolidaysImage from 'figma:asset/b9ae2cd6cc39630e21d1ae4363eee951b593b6b2.png';
import shawarmaBiteImage from 'figma:asset/b7aa5c62622b289c97c13f5a3456d16f68f06f70.png';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Gadgil Jewellers - Premium Signage',
      image: gadgilJewellersImage,
      description: 'Elegant red and white signage for heritage jewelry store since 1832',
    },
    {
      id: 2,
      title: 'Tathastu - LED Signage',
      image: tathastuImage,
      description: 'Vibrant green LED sign with decorative lotus elements for premium collection',
    },
    {
      id: 3,
      title: 'Smira Holidays - Backlit LED Signage',
      image: smiraHolidaysImage,
      description: 'Modern blue LED backlit signage with elegant bird logo for travel agency',
    },
    {
      id: 4,
      title: 'Manyavar - Premium Retail Signage',
      image: manyavarImage,
      description: 'High-end illuminated signage with brand display panels for ethnic wear store',
    },
    {
      id: 5,
      title: 'Pink Secrets - Premium Retail Signage',
      image: pinkSecretsImage,
      description: 'Vibrant pink neon LED signage with brand partner displays for lingerie boutique',
    },
    {
      id: 6,
      title: 'Caneyard Veg - Restaurant Signage',
      image: caneyardVegImage,
      description: 'Bold green and white signboard for vegetarian restaurant',
    },
    {
      id: 7,
      title: 'Adinath Pimpaleshwar Mahadev Temple',
      image: aadinathMandirImage,
      description: 'Traditional LED signage in red with Lord Shiva imagery for temple complex',
    },
    {
      id: 8,
      title: 'Shri Swami Samarth Snacks Center',
      image: swamisamarthImage,
      description: 'Vibrant LED signage with food menu display',
    },
    {
      id: 9,
      title: 'North 37 Dhaba - Restaurant LED Signage',
      image: north37DhabaImage,
      description: 'Eye-catching illuminated sign with truck graphic and branding',
    },
    {
      id: 10,
      title: 'Mayureshwar Developers - Exterior Cladding',
      image: exteriorCladdingImage,
      description: 'Premium wooden facade cladding with modern architectural signage',
    },
    {
      id: 11,
      title: 'Samruddhi Jewellers - Premium Signage',
      image: samruddhiJewellers2Image,
      description: 'Elegant red and white signage for heritage jewelry store since 1832',
    },
    {
      id: 12,
      title: 'Shawarma Bite - Restaurant LED Signage',
      image: shawarmaBiteImage,
      description: 'Bilingual LED neon signboard with chef mascot for shawarma restaurant',
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
            rotate: [0, 180, 0],
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
              className="fas fa-images text-accent mr-3"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.i>
            Our Work
          </motion.h1>
          <motion.p
            className="text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of successful signage projects
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key="projects"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(project.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.i
                        className="fas fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      ></motion.i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2 font-['Poppins']">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <motion.div
        className="mt-20 py-16 bg-[#F5F5DC] rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* Instagram Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ 
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="fab fa-instagram text-white text-4xl"></i>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Poppins']">
            Want to See More Photos?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Follow us on Instagram for the latest project updates, behind-the-scenes content, and more of our completed works.
          </p>

          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/_saiinfra_signages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white text-lg font-semibold shadow-lg"
            style={{ 
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(188, 24, 136, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-instagram text-2xl"></i>
            <span>@_saiinfra_signages</span>
            <i className="fas fa-external-link-alt text-sm"></i>
          </motion.a>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>

            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter((p) => p.id === selectedImage)
                .map((project) => (
                  <div key={project.id}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg shadow-2xl"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
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
            Want Your Project Featured Here?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create something amazing together
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
              className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone"></i>
              Call Now
            </motion.a>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}