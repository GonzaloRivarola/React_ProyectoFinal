// src/App.jsx
import './App.css';
import { useEffect, useRef } from 'react';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Footer from './components/Footer/Footer';
import Products from './pages/Products'; // Página de productos
import ProductDetail from './pages/ProductDetail'; // Página de detalles del producto
import CartPage from './pages/CartPage'; // Página del carrito de compras

function Home({ section2Ref }) {
  return (
    <>
      <Section1 />
      <Section2 ref={section2Ref} />
      <Section3 />
    </>
  );
}

function App() {
  const section2Ref = useRef();
  const lastScrollY = useRef(0);

  useEffect(() => {
    let hasScrolled = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hasScrolled && currentScrollY > 50) {
        if (section2Ref.current) {
          section2Ref.current.scrollIntoView({ behavior: 'smooth' });
          hasScrolled = true;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home section2Ref={section2Ref} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} /> {/* Ruta para el carrito */}
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
