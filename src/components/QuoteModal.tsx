import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    workType: '',
    projectDescription: '',
    expectations: '',
    timeline: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-5b59724a/submit-quote`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote request');
      }

      toast.success(
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Thank you for your quote request!</div>
          <div className="text-sm opacity-90">Our team will review your requirements and get back to you within 24 hours at {formData.email}</div>
        </div>,
        {
          duration: 6000,
          style: {
            padding: '20px',
            minWidth: '400px',
          },
        }
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        contact: '',
        workType: '',
        projectDescription: '',
        expectations: '',
        timeline: '',
        budget: '',
      });
      
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error(
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Submission Failed</div>
          <div className="text-sm opacity-90">There was an error submitting your quote request. Please try again or contact us directly.</div>
        </div>,
        {
          duration: 6000,
        }
      );
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-6 rounded-t-2xl z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold font-['Poppins'] flex items-center gap-3">
                        <motion.i 
                          className="fas fa-clipboard-list text-accent"
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        ></motion.i>
                        Request a Quote
                      </h2>
                      <p className="text-gray-100 mt-2">Fill out the form below and we'll get back to you soon</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-white hover:text-accent transition-colors"
                    >
                      <i className="fas fa-times text-2xl"></i>
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2 font-['Poppins']">
                      <i className="fas fa-user-circle text-accent"></i>
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                          <i className="fas fa-user text-accent mr-2"></i>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                          placeholder="John Doe"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                          <i className="fas fa-envelope text-accent mr-2"></i>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="contact" className="block text-gray-700 mb-2 font-medium">
                        <i className="fas fa-phone text-accent mr-2"></i>
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </motion.div>
                  </div>

                  {/* Project Details Section */}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2 font-['Poppins']">
                      <i className="fas fa-briefcase text-accent"></i>
                      Project Details
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label htmlFor="workType" className="block text-gray-700 mb-2 font-medium">
                        <i className="fas fa-tools text-accent mr-2"></i>
                        Type of Work *
                      </label>
                      <select
                        id="workType"
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                      >
                        <option value="">Select service type</option>
                        <option value="led-signboard">LED Sign Board</option>
                        <option value="outdoor-signage">Outdoor Signage</option>
                        <option value="indoor-signage">Indoor Signage</option>
                        <option value="custom-branding">Custom Branding Solutions</option>
                        <option value="neon-signs">Neon Signs</option>
                        <option value="acrylic-signage">Acrylic Signage</option>
                        <option value="metal-signage">Metal Signage</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="projectDescription" className="block text-gray-700 mb-2 font-medium">
                        <i className="fas fa-file-alt text-accent mr-2"></i>
                        Project Description *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white resize-none transition-all"
                        placeholder="Describe your project in detail... (size, location, materials, etc.)"
                      />
                    </motion.div>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label htmlFor="expectations" className="block text-gray-700 mb-2 font-medium">
                        <i className="fas fa-star text-accent mr-2"></i>
                        Your Expectations *
                      </label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white resize-none transition-all"
                        placeholder="What do you expect from this project? Quality requirements, design preferences, specific features..."
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label htmlFor="timeline" className="block text-gray-700 mb-2 font-medium">
                          <i className="fas fa-calendar-alt text-accent mr-2"></i>
                          Expected Timeline *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (Within 1 week)</option>
                          <option value="1-2weeks">1-2 Weeks</option>
                          <option value="2-4weeks">2-4 Weeks</option>
                          <option value="1-2months">1-2 Months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                      >
                        <label htmlFor="budget" className="block text-gray-700 mb-2 font-medium">
                          <i className="fas fa-rupee-sign text-accent mr-2"></i>
                          Budget Range (Optional)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-25k">Under ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                          <option value="1L-2L">₹1,00,000 - ₹2,00,000</option>
                          <option value="above-2L">Above ₹2,00,000</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </motion.div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.div 
                    className="pt-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                    >
                      <i className="fas fa-times mr-2"></i>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Submit Quote Request
                        </>
                      )}
                    </button>
                  </motion.div>

                  {/* Privacy Note */}
                  <motion.p 
                    className="text-xs text-gray-500 text-center pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <i className="fas fa-lock mr-1"></i>
                    Your information is secure and will only be used to provide you with a quote
                  </motion.p>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}