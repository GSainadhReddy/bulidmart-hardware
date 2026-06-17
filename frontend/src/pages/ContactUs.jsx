import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

export default function ContactUs({ showToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Please fill out all contact fields.', 'warning');
      return;
    }
    
    setSending(true);
    setTimeout(() => {
      showToast('Thank you! Your message has been routed to our customer support desk.', 'success');
      setName('');
      setEmail('');
      setMessage('');
      setSending(false);
    }, 1200);
  };

  return (
    <div className="contact-page animate-fade">
      <div className="section-header text-center">
        <h1 className="section-title">Contact BuildMart Support</h1>
        <p className="section-subtitle">Get in touch with our heavy materials sales desk, check order statuses, or request custom quotes.</p>
      </div>

      <div className="contact-layout">
        
        {/* Left Side: Store information details */}
        <div className="contact-info-panel">
          <div className="info-card">
            <h3>Headquarters Sales Office</h3>
            <ul className="info-list">
              <li>
                <MapPin size={20} className="info-icon" />
                <div>
                  <h5>Street Location</h5>
                  <p>123 Industrial Way, Builders Zone, Bangalore, KA, India</p>
                </div>
              </li>
              <li>
                <Phone size={20} className="info-icon" />
                <div>
                  <h5>Customer Hotline</h5>
                  <p>+91 98765 43210 (Sales Desk)</p>
                  <p>+91 98765 43219 (Logistics / Truck Dispatch)</p>
                </div>
              </li>
              <li>
                <Mail size={20} className="info-icon" />
                <div>
                  <h5>Email Channels</h5>
                  <p>support@buildmart.com (General Help)</p>
                  <p>quotes@buildmart.com (Bulk Pricing requests)</p>
                </div>
              </li>
              <li>
                <Clock size={20} className="info-icon" />
                <div>
                  <h5>Business Hours</h5>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 9:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="certified-panel">
            <ShieldCheck size={24} color="var(--primary)" />
            <div>
              <h4>Authorized Distributor</h4>
              <p>BuildMart is an authorized vendor for UltraTech Cement, Asian Paints, Bosch Power Tools, and Tata Steel.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Message Submission Form */}
        <div className="contact-form-panel">
          <div className="form-card">
            <h3>Send Us a Message</h3>
            <p className="form-desc">Have a question about product availability, regional delivery coverage, or custom wholesale ordering? Drop us a line.</p>

            <form onSubmit={handleMessageSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">How can we help? *</label>
                <textarea
                  id="contact-message"
                  className="form-input"
                  rows="5"
                  placeholder="Write details of your query or custom materials requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
                <Send size={16} />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

      </div>

      <style>{`
        .contact-page {
          padding-bottom: 2rem;
        }
        .text-center { text-align: center; }
        
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          margin-top: 2rem;
          align-items: flex-start;
        }
        
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .info-card h3 {
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-list li {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .info-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .info-list h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.2rem;
        }
        .info-list p {
          font-size: 0.85rem;
          color: var(--dark-gray);
        }
        
        .certified-panel {
          background-color: var(--secondary-light);
          border: 1.5px dashed var(--accent);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .certified-panel h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }
        .certified-panel p {
          font-size: 0.8rem;
          color: var(--dark-gray);
          line-height: 1.4;
        }

        .form-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .form-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          color: var(--secondary);
        }
        .form-desc {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 1.75rem;
        }
        .submit-btn {
          width: 100%;
          padding: 0.85rem;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
