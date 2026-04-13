import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gold border border-gold/20"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-gold text-gold"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-dark-gray mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush to-soft-pink flex items-center justify-center">
          <span className="text-white font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-dark-gray">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.occasion}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
