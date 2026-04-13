import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Instagram } from 'lucide-react';
import { Button, ProductCard, SectionTitle, TestimonialCard } from '../components';
import { products, testimonials } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const galleryImages = [
    'https://images.unsplash.com/photo-1549465220-1a2ca9debafe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1599810694-a5f8b4a9f7f5?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556479299-c628f76b4efa?w=400&h=400&fit=crop',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-br from-cream via-warm-beige to-blush">
        {/* Premium Background Overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-dark-gray rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-light-gold/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block bg-light-gold/20 text-light-gold px-6 py-2 rounded-full text-sm md:text-base font-semibold mb-4">
              ✨ Premium Personalized Gifting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-bold text-dark-gray mb-6 leading-tight"
          >
            Where every gift tells a story...
            <br className="hidden md:inline" />
            {/* <span className="text-light-gold">Some should be felt.</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover thoughtfully curated, personalized gifts that create unforgettable moments and lasting connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Explore Gifts
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Order Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blush rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-blush rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        {/* Premium background gradient */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cream via-light-gold/10 to-cream rounded-3xl -z-10 opacity-40"></div>
        <SectionTitle
          title="Featured Collections"
          subtitle="Handpicked gifts crafted with love and attention to detail"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-warm-beige via-warm-beige to-light-gold/10 relative">
        {/* Premium decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Loved by Many"
            subtitle="See what our customers say about their special moments"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        {/* Premium background */}
        <div className="absolute -inset-4 bg-gradient-to-br from-cream/50 via-light-gold/5 to-cream/50 rounded-3xl -z-10\"></div>
        <SectionTitle
          title="Gallery Preview"
          subtitle="Follow us for more magical moments @niraliscraftedwonders"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -5 }}
              className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow border border-gold/30"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 relative z-20"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.instagram.com/niraliscraftedwonders/', '_blank')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-light-gold to-gold text-white px-7 py-3 rounded-lg font-semibold text-base cursor-pointer hover:shadow-xl transition-shadow active:scale-95"
          >
            <Instagram size={20} />
            Follow on Instagram
          </motion.button>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-light-gold/20 via-gold/10 to-light-gold/20 relative overflow-hidden">
        {/* Premium decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-light-gold/10 rounded-full blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center relative z-10 bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 shadow-xl"
        >
          <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl font-bold text-dark-gray mb-4">
            Ready to Create Magic?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start building your personalized gift today. Every moment matters.
          </p>
          <Link to="/products">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              Explore Our Gifts
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
