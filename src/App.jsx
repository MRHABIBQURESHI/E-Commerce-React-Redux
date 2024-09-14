// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import AboutPage from './Pages/AboutPage';
import ReviewPage from './Pages/ReviewPage';
import ProductsPage from './Pages/ProductsPage';
import SalePage from './Pages/SalePage';
import NotFoundPage from './Error/Error';
import PrivateRoute from './AdminAuth/PrivateRoute';
import LoginPage from './AdminAuth/LoginPage';
import { AuthProvider } from './Context/AuthContext';
import Mobile from './ProductPages/Mobile';
import Laptop from './ProductPages/Laptop';
import Watch from './ProductPages/Watch';
import Tablet from './ProductPages/Tablet';
import Pc from './ProductPages/Pc';
import Admin from './AdminPannel/Admin';
import Cart from './Pages/Cart';
import Total from './Pages/Total';
import ThankYou from './Pages/Thankyou';



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/total" element={<Total />} />
          <Route path="/success" element={<ThankYou />} />

          {/* Products Routes */}
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/smart-watches" element={<Watch />} />
          <Route path="/tablets" element={<Tablet />} />
          <Route path="/gaming-pc" element={<Pc />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Panel Routes */}
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
         

          {/* Catch-All Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
