import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { ProductCard, SectionTitle, Button } from '../components';
import { products, categories } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of personalized gifts for every occasion
          </p>
        </motion.div>
      </section>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
              <h3 className="font-serif text-xl font-bold text-dark-gray mb-6">
                Filters
              </h3>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-dark-gray mb-3">
                  Search Products
                </label>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-4">
                  Category
                </label>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      !selectedCategory
                        ? 'bg-light-gold text-white font-semibold'
                        : 'text-dark-gray hover:bg-light-gold/20'
                    }`}
                  >
                    All Products
                  </motion.button>
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category.name
                          ? 'bg-light-gold text-white font-semibold'
                          : 'text-dark-gray hover:bg-light-gold/20'
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || searchTerm) && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchTerm('');
                  }}
                  className="mt-6 w-full py-2 border-2 border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors font-semibold"
                >
                  Clear All Filters
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-6 flex gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-light-gold"
              >
                <Filter size={20} />
                Filters
              </motion.button>

              {/* Search Input - Mobile */}
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-light-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold"
              />
            </div>

            {/* Mobile Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mb-6 bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-dark-gray">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-1 hover:bg-warm-beige rounded"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        setSelectedCategory(null);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                        !selectedCategory
                          ? 'bg-blush text-dark-gray font-semibold'
                          : 'text-dark-gray hover:bg-warm-beige'
                      }`}
                    >
                      All Products
                    </motion.button>
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setShowFilters(false);
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category.name
                            ? 'bg-blush text-dark-gray font-semibold'
                            : 'text-dark-gray hover:bg-warm-beige'
                        }`}
                      >
                        {category.name}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </motion.div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      layout
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h3 className="font-serif text-2xl font-bold text-dark-gray mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search term
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchTerm('');
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
