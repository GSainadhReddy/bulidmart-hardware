import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Profile from './pages/Profile';
import LoginRegister from './pages/LoginRegister';
import ContactUs from './pages/ContactUs';
import AdminDashboard from './pages/AdminDashboard';

// Pure JavaScript JWT Decoder
const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('bm_token') || null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);

  // Decode user details from token on load or change
  useEffect(() => {
    if (token) {
      const decoded = parseJwt(token);
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
        localStorage.setItem('bm_token', token);
      } else {
        // Expired
        logout();
      }
    } else {
      setUser(null);
      localStorage.removeItem('bm_token');
    }
  }, [token]);

  // Load wishlist when user is logged in
  useEffect(() => {
    if (user && token) {
      fetchWishlist();
    } else {
      setWishlist([]);
    }
  }, [user]);

  // Read local cart on boot
  useEffect(() => {
    const savedCart = localStorage.getItem('bm_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        setCart([]);
      }
    }
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('bm_cart', JSON.stringify(newCart));
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('bm_token');
    showToast('Logged out successfully.', 'info');
  };

  const fetchWishlist = async () => {
    try {
      const res = await fetch('/api/products/wishlist/items', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setWishlist(data.wishlist || []);
      }
    } catch (e) {
      console.error("Wishlist loading failed", e);
    }
  };

  const addToWishlist = async (productId) => {
    if (!user) {
      showToast('Please log in to add items to your wishlist.', 'warning');
      return;
    }
    try {
      const res = await fetch('/api/products/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ product_id: productId })
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Added to wishlist.', 'success');
        fetchWishlist();
      } else {
        showToast(data.message || 'Error updating wishlist.', 'warning');
      }
    } catch (e) {
      showToast('Connection failed. Wishlist not updated.', 'danger');
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!user) return;
    try {
      const res = await fetch(`/api/products/wishlist/remove/${productId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        showToast('Removed from wishlist.', 'info');
        fetchWishlist();
      }
    } catch (e) {
      showToast('Connection error.', 'danger');
    }
  };

  const toggleWishlist = (productId) => {
    const isExist = wishlist.some(item => item.product_id === productId);
    if (isExist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const addToCart = (product, qty = 1) => {
    const index = cart.findIndex(item => item.product_id === product.id);
    if (index !== -1) {
      const newQty = cart[index].quantity + qty;
      if (newQty > product.stock) {
        showToast(`Cannot add more. Stock limit: ${product.stock}`, 'warning');
        return;
      }
      const newCart = [...cart];
      newCart[index].quantity = newQty;
      saveCart(newCart);
    } else {
      if (qty > product.stock) {
        showToast(`Insufficient stock. Available: ${product.stock}`, 'warning');
        return;
      }
      saveCart([...cart, {
        product_id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: qty,
        unit: product.unit,
        stock: product.stock
      }]);
    }
    showToast('Added to shopping cart.', 'success');
  };

  const updateCartQty = (productId, qty) => {
    const index = cart.findIndex(item => item.product_id === productId);
    if (index === -1) return;
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    const item = cart[index];
    if (qty > item.stock) {
      showToast(`Cannot exceed current stock level of ${item.stock}`, 'warning');
      return;
    }
    const newCart = [...cart];
    newCart[index].quantity = qty;
    saveCart(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.product_id !== productId);
    saveCart(newCart);
    showToast('Item removed from cart.', 'info');
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar user={user} logout={logout} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} wishlistCount={wishlist.length} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/catalog" element={<Catalog addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} user={user} token={token} showToast={showToast} />} />
            <Route path="/cart" element={<Cart cart={cart} updateCartQty={updateCartQty} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={
              user ? <Checkout cart={cart} user={user} token={token} clearCart={clearCart} showToast={showToast} /> : <Navigate to="/login?redirect=checkout" />
            } />
            <Route path="/order-tracking/:id" element={
              user ? <OrderTracking token={token} /> : <Navigate to="/login" />
            } />
            <Route path="/profile" element={
              user ? <Profile user={user} token={token} wishlist={wishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} logout={logout} /> : <Navigate to="/login" />
            } />
            <Route path="/login" element={<LoginRegister setToken={setToken} user={user} showToast={showToast} />} />
            <Route path="/contact" element={<ContactUs showToast={showToast} />} />
            <Route path="/admin" element={
              user && user.role === 'admin' ? <AdminDashboard token={token} showToast={showToast} /> : <Navigate to="/" />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />

        {toast && (
          <div className={`toast animate-fade`}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: toast.type === 'success' ? 'var(--success)' : 
                             toast.type === 'warning' ? 'var(--warning)' : 
                             toast.type === 'danger' ? 'var(--danger)' : 'var(--accent)'
            }}></span>
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
