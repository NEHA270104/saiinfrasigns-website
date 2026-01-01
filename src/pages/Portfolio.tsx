import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Import real project images
import folkChaapImage from 'figma:asset/becaa7cf28f3ce4d24a0a0db207e49fff100a30d.png';
import saiDentalImage from 'figma:asset/b45605f2296cc950a9da4b58cdee94ffe0563fe1.png';
import exteriorCladdingImage from 'figma:asset/d35d7037c3d692170a8767e9bab432126e14b5c3.png';
import swamisamarthImage from 'figma:asset/0052fc3480634a486def46206bf079c4da8573c2.png';
import desirImage from 'figma:asset/c4bae4d02b28fb398ff967940c0ae490e9009df3.png';
import north37DhabaImage from 'figma:asset/286db2250b866e8d11bb39d4c09f5e15a97ff39b.png';
import caneyardVegImage from 'figma:asset/a73aa9f9486bfc791cf9243c054c5253b77437a5.png';
import gadgilJewellersImage from 'figma:asset/bd3bba40065f238340a78b30023cc109b2f8fc8c.png';
import tathastuImage from 'figma:asset/456ff05ad5e36854ef96470aa7162c41199e7f58.png';
import samruddhiJewellersImage from 'figma:asset/dcc20aeb16a58c22f712b3d52168fec554a82975.png';
import bookMyReadsImage from 'figma:asset/0e5bcd5f0482d06753bb07c2eaeab96f3e33ffcf.png';
import bobstImage from 'figma:asset/5b1a92d8a7035b9e2916371ba3ee2bb245259317.png';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Folk Chaap - Neon LED Signage',
      image: folkChaapImage,
      description: 'Custom neon LED signboard with unique octagonal design',
    },
    {
      id: 2,
      title: 'Sai Dental Care - Medical Clinic Signage',
      image: saiDentalImage,
      description: 'Professional illuminated signboard for dental clinic',
    },
    {
      id: 3,
      title: 'Mayureshwar Developers - Exterior Cladding',
      image: exteriorCladdingImage,
      description: 'Premium wooden facade cladding with modern architectural signage',
    },
    {
      id: 4,
      title: 'Shri Swami Samarth Snacks Center',
      image: swamisamarthImage,
      description: 'Vibrant LED signage with food menu display',
    },
    {
      id: 5,
      title: 'Désir - Backlit Acrylic Sign',
      image: desirImage,
      description: 'Elegant backlit signage for beauty & makeup store',
    },
    {
      id: 6,
      title: 'North 37 Dhaba - Restaurant LED Signage',
      image: north37DhabaImage,
      description: 'Eye-catching illuminated sign with truck graphic and branding',
    },
    {
      id: 7,
      title: 'Caneyard Veg - Restaurant Signage',
      image: caneyardVegImage,
      description: 'Bold green and white signboard for vegetarian restaurant',
    },
    {
      id: 8,
      title: 'Gadgil Jewellers - Premium Signage',
      image: gadgilJewellersImage,
      description: 'Elegant red and white signage for heritage jewelry store since 1832',
    },
    {
      id: 9,
      title: 'Tathastu - LED Signage',
      image: tathastuImage,
      description: 'Vibrant green LED sign with decorative lotus elements for premium collection',
    },
    {
      id: 10,
      title: 'Samruddhi Jewellers - Backlit Display',
      image: samruddhiJewellersImage,
      description: 'Luxury backlit frame display for high-end jewelry store branding',
    },
    {
      id: 11,
      title: 'Book My Reads - Bookstore Signage',
      image: bookMyReadsImage,
      description: 'Modern LED signboard for a cozy bookstore',
    },
    {
      id: 12,
      title: 'Bobst - Restaurant Signage',
      image: bobstImage,
      description: 'Bold and colorful signboard for a popular restaurant',
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
      <section className="py-20 bg-gray-50">
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