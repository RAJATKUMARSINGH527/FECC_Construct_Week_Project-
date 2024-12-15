import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Help from './components/custom/Help';
import Navbar from './components/custom/Navbar';
import Footer from './components/custom/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDetails from './components/custom/ProductDetails';
import HeroSection from './components/custom/HeroSection';
import Features from './components/custom/Features';
import Label from './components/custom/label';
import WomensBrandShowcase from './components/custom/WomensBrandShowcase';
import MensBrandShowcase from './components/custom/MensBrandShowcase';
import WomenBrand from './components/custom/WomenBrands';
import MenBrand from './components/custom/MenBrands';
import SocialCards from './components/custom/Social&Cards';
import Year from './components/custom/Year';


const products = [
  { id: 1, name: 'Product 1', price: 20, image: '/image1.png', category: 'men' },
  // Add more product objects here
];

const App = () => {
  return (
    <>
      <Help />
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      
      </Routes> */}

      <HeroSection />
      <Features />
      <Label/>
      <WomensBrandShowcase/>
      <WomenBrand />
      <MensBrandShowcase />
      <MenBrand/>
      <SocialCards/>
      <Footer />
      <Year/>
    </>
  );
};

export default App;
