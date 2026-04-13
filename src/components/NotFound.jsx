import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-cream"
    >
      <div className="text-center px-4">
        <h1 className="font-serif text-7xl md:text-9xl font-bold text-light-gold/50 mb-4">
          404
        </h1>
        <h2 className="font-serif text-4xl font-bold text-dark-gray mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          We couldn't find what you're looking for. Let's get you back to crafting wonderful gifts.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
