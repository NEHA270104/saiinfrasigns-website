import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuotationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuotationForm({ isOpen, onClose }: QuotationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workType: '',
    address: '',
    budget: '',
    timeline: '',
    specifications: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you can replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setShowSuccessPopup(true);
      
      // Reset form after showing success popup
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          workType: '',
          address: '',
          budget: '',
          timeline: '',
          specifications: '',
        });
        setSubmitSuccess(false);
        setShowSuccessPopup(false);
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="quotation-form"
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary text-white px-8 py-6 rounded-t-2xl relative flex-shrink-0">
              <motion.button
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors text-2xl"
                onClick={onClose}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
              
              <h2 className="text-3xl font-bold font-['Poppins'] mb-2">
                <i className="fas fa-file-invoice text-accent mr-3"></i>
                Request a Quotation
              </h2>
              <p className="text-gray-100">Fill in the details and we'll get back to you soon</p>
            </div>

            {/* Form - Scrollable */}
            <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-user text-primary mr-2"></i>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-envelope text-primary mr-2"></i>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-phone text-primary mr-2"></i>
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Work Type */}
                <div>
                  <label htmlFor="workType" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-briefcase text-primary mr-2"></i>
                    Type of Work *
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    required
                    value={formData.workType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select work type</option>
                    <option value="LED Sign Boards">LED Sign Boards</option>
                    <option value="Outdoor Signage">Outdoor Signage</option>
                    <option value="Indoor Signage">Indoor Signage</option>
                    <option value="Neon Sign Boards">Neon Sign Boards</option>
                    <option value="Acrylic Signage">Acrylic Signage</option>
                    <option value="Digital Displays">Digital Displays</option>
                    <option value="Safety Signage">Safety Signage</option>
                    <option value="Vehicle Branding">Vehicle Branding</option>
                    <option value="ACP Panelling Work">ACP Panelling Work</option>
                    <option value="Custom Branding Solutions">Custom Branding Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-rupee-sign text-primary mr-2"></i>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                    <option value="Above ₹2,50,000">Above ₹2,50,000</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-calendar-alt text-primary mr-2"></i>
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="Urgent (Within 1 week)">Urgent (Within 1 week)</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                  Work Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter the location where work needs to be done"
                />
              </div>

              {/* Specifications */}
              <div className="mt-6">
                <label htmlFor="specifications" className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-clipboard-list text-primary mr-2"></i>
                  Additional Specifications
                </label>
                <textarea
                  id="specifications"
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Any specific requirements, dimensions, colors, or other details..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting && !submitSuccess ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !submitSuccess ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <i className="fas fa-check-circle mr-2"></i>
                      Request Submitted!
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Submit Request
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          key="success-popup"
          className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 10 }}
          >
            <motion.div
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.i
                className="fas fa-check text-green-600 text-4xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              ></motion.i>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold text-primary mb-4 font-['Poppins']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Thank You!
            </motion.h3>

            <motion.p
              className="text-gray-600 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Your quotation request has been successfully submitted. Our team will review your requirements and get back to you shortly.
            </motion.p>

            <motion.div
              className="bg-accent/10 rounded-lg p-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-accent font-semibold text-sm">
                <i className="fas fa-phone mr-2"></i>
                Need immediate assistance?
              </p>
              <a
                href="tel:8796968701"
                className="text-primary font-bold text-lg hover:text-accent transition-colors"
              >
                Call us at 8796968701
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <i className="fas fa-clock"></i>
              <span>We'll respond within 24 hours</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}