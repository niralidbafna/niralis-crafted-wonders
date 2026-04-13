import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gold/20"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-warm-beige aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-light-gold/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Favorite Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-light-gold text-light-gold' : 'text-dark-gray'}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="font-serif text-lg font-semibold text-dark-gray mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="font-serif text-2xl font-bold text-gold">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Features */}
        <div className="mb-4 flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-warm-beige text-dark-gray px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link to={`/product/${product.id}`} className="w-full">
          <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            Customize & Order
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
