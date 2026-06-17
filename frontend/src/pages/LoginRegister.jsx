import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { UserPlus, LogIn, Lock, Mail, User } from 'lucide-react';

export default function LoginRegister({ setToken, user, showToast }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  // Toggle between 'login' and 'register'
  const [activeTab, setActiveTab] = useState('login');

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // If user is already logged in, redirect away
    if (user) {
      navigate(redirect);
    }
  }, [user, redirect, navigate]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Email and password fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email format.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    if (activeTab === 'register') {
      if (!name) {
        setErrorMsg('Please fill in your name.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match.');
        return;
      }
    }

    setSubmitting(true);
    try {
      const endpoint = activeTab === 'login' ? '/api/auth/login' : '/api/auth/register';
      const body = activeTab === 'login' 
        ? { email, password } 
        : { name, email, password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();

      if (res.ok) {
        if (activeTab === 'login') {
          showToast('Signed in successfully!', 'success');
          setToken(data.token);
        } else {
          showToast('Registration complete! Please sign in.', 'success');
          setActiveTab('login');
          setPassword('');
          setConfirmPassword('');
        }
      } else {
        setErrorMsg(data.message || 'Authorization failed. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the backend server.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page animate-fade">
      <div className="auth-container">
        
        {/* Toggle tabs */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setErrorMsg('');
            }}
          >
            <LogIn size={18} />
            <span>Sign In</span>
          </button>
          
          <button 
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('register');
              setErrorMsg('');
            }}
          >
            <UserPlus size={18} />
            <span>Register</span>
          </button>
        </div>

        {/* Auth form panel */}
        <div className="auth-form-panel">
          <div className="auth-header-desc text-center">
            <h2>{activeTab === 'login' ? 'Welcome Back' : 'Create Builder Account'}</h2>
            <p>Access BuildMart order tracking, wishlists, and wholesale billing rates.</p>
          </div>

          {errorMsg && (
            <div className="auth-error-box animate-scale">
              <span>⚠️ {errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="form-group">
                <label className="form-label" htmlFor="register-name">Full Name *</label>
                <div className="input-with-icon">
                  <User size={16} className="input-field-icon" />
                  <input
                    id="register-name"
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="auth-email">Email Address *</label>
              <div className="input-with-icon">
                <Mail size={16} className="input-field-icon" />
                <input
                  id="auth-email"
                  type="email"
                  className="form-input"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="auth-password">Password *</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-field-icon" />
                <input
                  id="auth-password"
                  type="password"
                  className="form-input"
                  placeholder="Enter secret password (min 6 chars)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {activeTab === 'register' && (
              <div className="form-group">
                <label className="form-label" htmlFor="auth-confirm-password">Confirm Password *</label>
                <div className="input-with-icon">
                  <Lock size={16} className="input-field-icon" />
                  <input
                    id="auth-confirm-password"
                    type="password"
                    className="form-input"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={submitting}>
              {submitting 
                ? 'Processing...' 
                : activeTab === 'login' ? 'Sign In Account' : 'Register Builder Account'
              }
            </button>
          </form>

          {activeTab === 'login' ? (
            <p className="auth-footer-text text-center">
              Don't have a professional account?{' '}
              <button className="toggle-link" onClick={() => setActiveTab('register')}>Register here</button>
            </p>
          ) : (
            <p className="auth-footer-text text-center">
              Already registered?{' '}
              <button className="toggle-link" onClick={() => setActiveTab('login')}>Sign in here</button>
            </p>
          )}

          {/* Seeding Demo Accounts Information */}
          <div className="seed-accounts-box">
            <h5>💡 Try BuildMart Demo Accounts</h5>
            <div className="account-row">
              <span><strong>Customer:</strong> john@gmail.com</span>
              <span><strong>Pass:</strong> user123</span>
            </div>
            <div className="account-row">
              <span><strong>Admin:</strong> admin@buildmart.com</span>
              <span><strong>Pass:</strong> admin123</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .auth-page {
          padding: 4rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        .auth-container {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          width: 100%;
          max-width: 450px;
          box-shadow: var(--shadow-lg);
        }
        
        .auth-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border-color);
        }
        .auth-tab-btn {
          padding: 1.25rem;
          font-weight: 700;
          color: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-bottom: 3px solid transparent;
        }
        .auth-tab-btn:hover {
          color: var(--primary);
          background-color: var(--bg-light);
        }
        .auth-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background-color: var(--bg-white);
        }
        
        .auth-form-panel {
          padding: 2.5rem;
        }
        .auth-header-desc h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .auth-header-desc p {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 1.75rem;
        }
        
        .auth-error-box {
          background-color: #fee2e2;
          color: #b91c1c;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .input-with-icon {
          position: relative;
        }
        .input-field-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray);
          pointer-events: none;
        }
        .input-with-icon .form-input {
          padding-left: 2.75rem;
        }
        
        .auth-submit-btn {
          width: 100%;
          padding: 0.85rem;
          margin-top: 1.5rem;
        }
        
        .auth-footer-text {
          font-size: 0.85rem;
          color: var(--gray);
          margin-top: 1.5rem;
        }
        .toggle-link {
          color: var(--primary);
          font-weight: 700;
        }
        .toggle-link:hover {
          text-decoration: underline;
        }
        
        .seed-accounts-box {
          margin-top: 2rem;
          border-top: 1px dashed var(--border-color);
          padding-top: 1.25rem;
          background-color: var(--bg-light);
          padding: 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
        }
        .seed-accounts-box h5 {
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }
        .account-row {
          display: flex;
          justify-content: space-between;
          color: var(--gray);
          margin-bottom: 0.25rem;
        }
        .account-row:last-child {
          margin-bottom: 0;
        }
        .text-center { text-align: center; }
      `}</style>
    </div>
  );
}
