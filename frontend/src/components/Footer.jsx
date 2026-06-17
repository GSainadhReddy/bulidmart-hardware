import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <h3>Build<span>Mart</span></h3>
          <p className="about-text">
            Your premium partner in construction and home-building supplies. We provide top-grade steel, cement, pipes, tools, and paint for contractors and homeowners alike.
          </p>
          <div className="certified-badge">
            <ShieldCheck size={18} color="var(--primary)" />
            <span>ISO 9001:2015 Certified Materials</span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h4>Material Categories</h4>
          <ul className="footer-links">
            <li><Link to="/catalog?category=1">Cement & Concrete</Link></li>
            <li><Link to="/catalog?category=2">Clay & Bricks</Link></li>
            <li><Link to="/catalog?category=3">Steel & Reinforcement</Link></li>
            <li><Link to="/catalog?category=4">Paints & Coats</Link></li>
            <li><Link to="/catalog?category=7">Electrical & Power Tools</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/catalog">Browse Catalog</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
            <li><Link to="/login">Account Access</Link></li>
            <li><Link to="/profile">My Order History</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h4>Store Operations</h4>
          <ul className="contact-details">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Industrial Way, Builders Zone, Bangalore, KA, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>support@buildmart.com</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM<br />Sun: 9:00 AM - 2:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BuildMart Store. All Rights Reserved. Engineered for Quality.</p>
      </div>

      <style>{`
        .footer-wrapper {
          background: #101e31; /* Even darker blue for contrast */
          color: #a0aec0;
          border-top: 4px solid var(--primary);
          padding: 4rem 1.5rem 1.5rem 1.5rem;
          font-size: 0.9rem;
        }
        .footer-container {
          max-width: var(--max-width);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-section h3 {
          font-size: 1.6rem;
          color: var(--bg-white);
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .footer-section h3 span {
          color: var(--primary);
        }
        .footer-section h4 {
          font-size: 1.1rem;
          color: var(--bg-white);
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-section h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 2px;
          background: var(--primary);
        }
        .about-text {
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .certified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.05);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--bg-white);
          border: 1px dashed rgba(255,255,255,0.15);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          transition: var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .contact-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .contact-details li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-bottom {
          max-width: var(--max-width);
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
        }
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 500px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
