import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, LogOut, LayoutDashboard, Menu, X, Hammer } from 'lucide-react';

export default function Navbar({ user, logout, cartCount, wishlistCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={handleLinkClick}>
          <div className="logo-icon">
            <Hammer size={24} color="#ffffff" strokeWidth={2.5} />
          </div>
          <span className="brand-text">Build<span>Mart</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Action Controls */}
        <div className="navbar-actions">
          {user && user.role === 'admin' && (
            <Link to="/admin" className="action-btn admin-badge" title="Admin Panel">
              <LayoutDashboard size={20} />
              <span className="btn-label">Dashboard</span>
            </Link>
          )}
          
          <Link to="/profile" className="action-btn" title="Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="action-badge bg-primary">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="action-btn" title="Shopping Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="action-badge bg-secondary">{cartCount}</span>}
          </Link>

          {user ? (
            <div className="user-dropdown-trigger">
              <Link to="/profile" className="action-btn profile-trigger">
                <User size={20} />
                <span className="username-display">{user.name.split(' ')[0]}</span>
              </Link>
              <button onClick={logout} className="logout-btn" title="Log Out">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link-btn">
              Sign In
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer animate-fade">
          <ul className="drawer-links">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/catalog" onClick={handleLinkClick}>Browse Products</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
            {user && user.role === 'admin' && (
              <li><Link to="/admin" onClick={handleLinkClick}>Admin Dashboard</Link></li>
            )}
            <li><Link to="/profile" onClick={handleLinkClick}>My Account</Link></li>
            {!user && <li><Link to="/login" onClick={handleLinkClick}>Sign In</Link></li>}
          </ul>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(26, 54, 93, 0.95); /* Deep industrial navy with blur */
          backdrop-filter: blur(8px);
          color: var(--bg-white);
          z-index: 1000;
          border-bottom: 2px solid var(--primary);
          box-shadow: var(--shadow-md);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 1rem 1.5rem;
          height: 70px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .logo-icon {
          background: var(--primary);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-text span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          transition: var(--transition-fast);
          position: relative;
          padding: 0.25rem 0;
        }
        .nav-link:hover {
          color: var(--bg-white);
        }
        .nav-link.active {
          color: var(--primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          transition: var(--transition-fast);
        }
        .action-btn:hover {
          color: var(--primary);
        }
        .action-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 0.65rem;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-white);
        }
        .action-badge.bg-primary { background-color: var(--primary); }
        .action-badge.bg-secondary { background-color: var(--accent); }
        .admin-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          gap: 0.4rem;
        }
        .admin-badge:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--bg-white);
        }
        .user-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .profile-trigger {
          gap: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .username-display {
          max-width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .logout-btn {
          color: rgba(255, 255, 255, 0.6);
          margin-left: 0.25rem;
        }
        .logout-btn:hover {
          color: var(--danger);
        }
        .login-link-btn {
          background: var(--primary);
          color: var(--bg-white);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .login-link-btn:hover {
          background: var(--primary-hover);
        }
        .mobile-toggle {
          display: none;
          color: var(--bg-white);
        }
        .mobile-drawer {
          display: none;
          background: var(--secondary-hover);
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .drawer-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 1rem 0;
        }
        .drawer-links a {
          display: block;
          padding: 0.75rem 1.5rem;
          font-size: 1.05rem;
          border-left: 3px solid transparent;
        }
        .drawer-links a:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links, .username-display {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
