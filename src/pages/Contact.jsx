import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Check } from 'lucide-react';
import { Button, SectionTitle } from '../components';
import { products } from '../data/products';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    customMessage: '',
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [buildYourOwnStep, setBuildYourOwnStep] = useState(1);
  const [orderSummary, setOrderSummary] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', occasion: '', customMessage: '' });
    }, 3000);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hi! I'd like to get in touch:
Name: ${formData.name}
Phone: ${formData.phone}
Occasion: ${formData.occasion}
Message: ${formData.customMessage}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919141285708?text=${encodedMessage}`, '_blank');
  };

  const toggleItemSelection = (product) => {
    setSelectedItems((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const handleBuildYourOwnOrder = () => {
    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const itemNames = selectedItems.map((item) => item.name).join(', ');
    const message = `Hi! I'd like to order a custom gift with:
Items: ${itemNames}
Total Price: ₹${totalPrice.toLocaleString('en-IN')}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919141285708?text=${encodedMessage}`, '_blank');
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blush/20 to-soft-pink/20 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-dark-gray mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Have questions or ready to order? We're here to help!
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg p-8 shadow-sm h-full">
              <h2 className="font-serif text-2xl font-bold text-dark-gray mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-light-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark-gray">Phone</p>
                    <p className="text-gray-600">+91 9141285708</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-light-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark-gray">Email</p>
                    <p className="text-gray-600">niraliscraftedwonders@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-light-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark-gray">Address</p>
                    <p className="text-gray-600">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark-gray">WhatsApp</p>
                    <a
                      href="https://wa.me/919141285708"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blush/20">
                <p className="text-sm text-gray-600 mb-4">
                  Response time: Usually within 2-4 hours on business days
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-dark-gray mb-8">
                Send us a Message
              </h2>

              <AnimatePresence>
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-xl font-semibold text-dark-gray">
                      Message Received!
                    </p>
                    <p className="text-gray-600 text-center mt-2">
                      We'll get back to you soon. You can also reach us via WhatsApp for faster response.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        placeholder="Your phone number"
                        className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">
                        Occasion
                      </label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                      >
                        <option value="">Select an occasion</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Congratulations">Congratulations</option>
                        <option value="Just Because">Just Because</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">
                        Message
                      </label>
                      <textarea
                        name="customMessage"
                        value={formData.customMessage}
                        onChange={handleFormChange}
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold resize-none h-32"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="primary" size="lg" className="flex-1">
                        Submit Form
                      </Button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={20} />
                        Send via WhatsApp
                      </motion.button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Build Your Own Gift Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blush/20 to-soft-pink/20 rounded-lg p-8 md:p-12">
            <SectionTitle
              title="Build Your Own Gift"
              subtitle="Select items and create a personalized hamper tailored to your needs"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Item Selection */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleItemSelection(product)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedItems.find((p) => p.id === product.id)
                          ? 'border-light-gold bg-light-gold/10'
                          : 'border-light-gold/30 hover:border-light-gold/60'
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {selectedItems.find((p) => p.id === product.id) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Check size={24} className="text-white" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-dark-gray mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            ₹{product.price.toLocaleString('en-IN')}
                          </p>
                          <span className="text-xs bg-warm-beige text-dark-gray px-2 py-1 rounded inline-block">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-6 sticky top-24 shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-dark-gray mb-6">
                    Order Summary
                  </h3>

                  <AnimatePresence>
                    {selectedItems.length === 0 ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600 text-center py-8"
                      >
                        Select items to create your custom gift
                      </motion.p>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                          {selectedItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between items-center text-sm pb-3 border-b border-light-gold/20"
                            >
                              <span className="text-dark-gray">{item.name}</span>
                              <span className="font-semibold">
                                ₹{item.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-light-gold pt-4 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-dark-gray">
                              Total Items: {selectedItems.length}
                            </span>
                            <span className="font-serif text-2xl font-bold text-gold">
                              ₹{totalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={handleBuildYourOwnOrder}
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={20} />
                          Order Now
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
