import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function MainLayout() {
  return (
    <main id="content" className="min-h-screen bg-brand-900 text-white selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Features />
      <Testimonials />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;