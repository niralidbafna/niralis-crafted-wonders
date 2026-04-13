import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Users } from 'lucide-react';
import { SectionTitle, Button } from '../components';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '2000+',
      label: 'Happy Customers',
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Personalized Gifts',
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Satisfaction Rate',
    },
    {
      icon: Sparkles,
      number: '5⭐',
      label: 'Average Rating',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Thoughtful',
      description: 'Every gift is created with care and attention to the emotional connection it creates.',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'We use only the finest materials and craftspeople to ensure lasting impressions.',
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Customization is at the heart of everything we do, making each gift truly unique.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain high standards in presentation, packaging, and customer service.',
    },
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
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blush/30 to-soft-pink/30 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-dark-gray mb-6">
            About Nirali's Crafted Wonders
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A celebration of thoughtful gifting, where every creation tells a story and every moment matters.
          </p>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-light-gold/20 text-light-gold text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Our Story
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              A Journey of Love & Creativity
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              What started as a personal passion has blossomed into a beautiful mission. I'm Nirali, and for as long as I can remember, I've believed that gifts are more than just objects—they're vessels of emotion, memory, and love.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Every scroll I write, every hamper I curate, and every box I design carries a piece of my heart. I wanted to create something that would make people pause, feel, and truly connect with the moments they're celebrating.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              In 2021, Nirali's Crafted Wonders was born from the belief that not every gift should be just opened—some should be felt. Today, we've had the honor of being part of thousands of special moments, and that's what drives us every single day.
            </p>

            <p className="text-light-gold font-semibold italic">
              "I pour my soul into each creation, because your moment deserves nothing less."
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blush/40 to-soft-pink/40" />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
              alt="Nirali's Crafted Wonders"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blush/20 to-soft-pink/20 py-16 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <Icon className="w-12 h-12 text-light-gold mx-auto mb-4" />
                <p className="font-serif text-4xl font-bold text-dark-gray mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <SectionTitle
          title="Our Values"
          subtitle="What drives us every single day"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow border-b-4 border-blush"
              >
                <Icon className="w-10 h-10 text-light-gold mb-4" />
                <h3 className="font-serif text-2xl font-bold text-dark-gray mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Process */}
      <section className="bg-warm-beige py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Creative Process"
            subtitle="How we bring your gift dreams to life"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: '1',
                title: 'Understand',
                description: 'We listen to your story and understand the occasion and recipient.',
              },
              {
                step: '2',
                title: 'Design',
                description: 'Our creative team crafts a personalized design just for you.',
              },
              {
                step: '3',
                title: 'Create',
                description: 'Handmade with premium materials and meticulous attention to detail.',
              },
              {
                step: '4',
                title: 'Deliver',
                description: 'Beautifully packaged and delivered with care to make moments magical.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 h-full relative z-10">
                  <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-blush to-soft-pink rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-semibold text-dark-gray mt-4 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>

                {/* Connector Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blush to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heart className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold text-dark-gray mb-4">
            Ready to Create Magic?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create a gift that will be remembered forever.
          </p>
          <Link to="/products">
            <Button variant="gold" size="lg">
              Explore Our Collections
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
