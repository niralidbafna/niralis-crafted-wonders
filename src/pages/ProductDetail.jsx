import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle, Heart, Share2 } from 'lucide-react';
import { Button, ProductCard } from '../components';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [customizationData, setCustomizationData] = useState({
    recipientName: '',
    occasion: '',
    customMessage: '',
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-dark-gray mb-4">
            Product Not Found
          </h1>
          <Button variant="primary" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering: ${product.name}
${customizationData.recipientName ? `Recipient: ${customizationData.recipientName}` : ''}
${customizationData.occasion ? `Occasion: ${customizationData.occasion}` : ''}
${customizationData.customMessage ? `Custom Message: ${customizationData.customMessage}` : ''}

Price: ₹${product.price.toLocaleString('en-IN')}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919141285708?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Navigation */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/products')}
        className="flex items-center gap-2 text-light-gold hover:text-dark-gray transition-colors mt-4 ml-4 md:ml-8 font-semibold"
      >
        <ChevronLeft size={20} />
        Back to Products
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-warm-beige rounded-lg overflow-hidden mb-4 group">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev === 0 ? productImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev === productImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>

              {/* Favorite Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Heart
                  size={24}
                  className={isFavorite ? 'fill-light-gold text-light-gold' : 'text-dark-gray'}
                />
              </motion.button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto">
              {productImages.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-light-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-block bg-light-gold/20 text-light-gold text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Price</p>
              <p className="font-serif text-4xl font-bold text-gold">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="bg-warm-beige rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-dark-gray mb-4">Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-light-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-dark-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            {product.customization && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-soft-pink/20 rounded-lg p-6 mb-8"
              >
                <h3 className="font-semibold text-dark-gray mb-4 flex items-center gap-2">
                  <span className="text-light-gold">✨</span> Personalization Options
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">
                      Recipient's Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Sarah"
                      value={customizationData.recipientName}
                      onChange={(e) =>
                        setCustomizationData({
                          ...customizationData,
                          recipientName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">
                      Occasion
                    </label>
                    <select
                      value={customizationData.occasion}
                      onChange={(e) =>
                        setCustomizationData({
                          ...customizationData,
                          occasion: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                    >
                      <option value="">Select an occasion</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Congratulations">Congratulations</option>
                      <option value="Just Because">Just Because</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">
                      Custom Message
                    </label>
                    <textarea
                      placeholder="Add your personal message here..."
                      value={customizationData.customMessage}
                      onChange={(e) =>
                        setCustomizationData({
                          ...customizationData,
                          customMessage: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold resize-none h-24"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </motion.button>

              <Button variant="secondary" size="lg" className="flex-1">
                <Share2 size={20} className="w-5 h-5" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-light-gold/20"
          >
            <h2 className="font-serif text-4xl font-bold text-dark-gray mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
