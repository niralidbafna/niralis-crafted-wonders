import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Footer, NotFound } from './components';
import { Home, Products, ProductDetail, About, Contact } from './pages';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages 404.html redirect for SPA routing
    const params = new URLSearchParams(window.location.search);
    if (params.has('redirect')) {
      const redirect = params.get('redirect');
      window.history.replaceState(null, null, window.location.pathname);
      navigate('/' + redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
}

function App() {
  return (
    <Router basename="/niralis-crafted-wonders">
      <AppContent />
    </Router>
  );
}

export default App;
