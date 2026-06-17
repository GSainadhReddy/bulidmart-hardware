import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, Landmark, Check } from 'lucide-react';

export default function Checkout({ cart, user, token, clearCart, showToast }) {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [placing, setPlacing] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 300;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="empty-checkout text-center animate-scale" style={{ padding: '6rem 2rem' }}>
        <h2>No Items to Checkout</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--gray)' }}>Your cart is empty. Please select materials from our store first.</p>
        <Link to="/catalog" className="btn btn-primary">Browse Catalog</Link>
      </div>
    );
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      showToast('Please specify a delivery/site address.', 'warning');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'warning');
      return;
    }

    setPlacing(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cart.map(it => ({
            product_id: it.product_id,
            quantity: it.quantity,
            price: it.price
          })),
          total_amount: total,
          shipping_address: address,
          phone,
          payment_method: paymentMethod
        })
      });

      const data = await res.json();
      if (res.ok) {
        showToast('Order placed successfully! Delivery is being arranged.', 'success');
        clearCart();
        navigate(`/order-tracking/${data.orderId}`);
      } else {
        showToast(data.message || 'Error placing order.', 'warning');
      }
    } catch (err) {
      showToast('Server connection failed.', 'danger');
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="checkout-page animate-fade">
      <h1>Checkout & Delivery Arrangements</h1>
      
      <div className="checkout-layout">
        
        {/* Left column: Address & Payment forms */}
        <form className="checkout-form-panel" onSubmit={handlePlaceOrder}>
          
          {/* Section 1: Delivery Details */}
          <div className="checkout-section">
            <h3 className="section-subtitle-custom">
              <Truck size={18} />
              <span>1. Site Delivery Address</span>
            </h3>
            
            <div className="form-group">
              <label className="form-label" htmlFor="delivery-address">Site Location / Shipping Address *</label>
              <textarea
                id="delivery-address"
                className="form-input"
                rows="4"
                placeholder="Enter complete address, plot/site number, contractor contact person name, building gate instructions..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone-number">On-Site Contact Mobile Number *</label>
              <input
                id="phone-number"
                type="tel"
                className="form-input"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <span className="input-helper-text">Our logistics coordinator or delivery truck drivers will use this to call on arrival.</span>
            </div>
          </div>

          {/* Section 2: Payments */}
          <div className="checkout-section">
            <h3 className="section-subtitle-custom">
              <ShieldCheck size={18} />
              <span>2. Select Billing Option</span>
            </h3>

            <div className="payment-options-grid">
              
              {/* Cash on delivery */}
              <div 
                className={`payment-card ${paymentMethod === 'cod' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <div className="card-selection-indicator">
                  {paymentMethod === 'cod' && <Check size={12} />}
                </div>
                <Truck size={24} className="payment-card-icon" />
                <div className="payment-card-meta">
                  <h5>Cash / Pay on Delivery</h5>
                  <p>Pay with Cash, UPI, or Card at your building site on delivery.</p>
                </div>
              </div>

              {/* UPI */}
              <div 
                className={`payment-card ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="card-selection-indicator">
                  {paymentMethod === 'upi' && <Check size={12} />}
                </div>
                <Landmark size={24} className="payment-card-icon" />
                <div className="payment-card-meta">
                  <h5>Instant UPI / NetBanking</h5>
                  <p>Pay instantly using PhonePe, GooglePay, PayTM, or bank transfer.</p>
                </div>
              </div>

              {/* Card */}
              <div 
                className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="card-selection-indicator">
                  {paymentMethod === 'card' && <Check size={12} />}
                </div>
                <CreditCard size={24} className="payment-card-icon" />
                <div className="payment-card-meta">
                  <h5>Credit / Debit Cards</h5>
                  <p>Secure payment checkout using major Visa or MasterCard.</p>
                </div>
              </div>

            </div>
          </div>

          <button type="submit" className="btn btn-primary place-order-btn" disabled={placing}>
            {placing ? 'Fulfilling Order...' : `Confirm & Place Order (INR ${total.toFixed(2)})`}
          </button>
        </form>

        {/* Right column: Sticky Order Preview */}
        <aside className="checkout-summary-panel">
          <h3>Items Summary</h3>
          
          <div className="checkout-items-list">
            {cart.map(item => (
              <div key={item.product_id} className="summary-item">
                <span className="qty-tag">{item.quantity}x</span>
                <div className="summary-item-details">
                  <span className="item-title">{item.name}</span>
                  <span className="item-unit-desc">INR {parseFloat(item.price).toFixed(2)} / {item.unit}</span>
                </div>
                <span className="item-sub-price">INR {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="checkout-totals">
            <div className="total-row-item">
              <span>Subtotal</span>
              <span>INR {subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row-item">
              <span>Site Cargo Shipping</span>
              <span>{shipping === 0 ? <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>FREE</span> : `INR ${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="total-row-item grand-total">
              <span>Grand Total</span>
              <span>INR {total.toFixed(2)}</span>
            </div>
          </div>
        </aside>

      </div>

      <style>{`
        .checkout-page h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .checkout-form-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .checkout-section {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .section-subtitle-custom {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .input-helper-text {
          font-size: 0.75rem;
          color: var(--gray);
          margin-top: 0.35rem;
          display: block;
        }

        .payment-options-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .payment-card {
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
        }
        .payment-card:hover {
          border-color: var(--primary);
          background-color: var(--bg-light);
        }
        .payment-card.active {
          border-color: var(--primary);
          background-color: var(--primary-light);
        }
        .card-selection-indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-white);
        }
        .payment-card.active .card-selection-indicator {
          border-color: var(--primary);
          background-color: var(--primary);
          color: var(--bg-white);
        }
        .payment-card-icon {
          color: var(--secondary);
        }
        .payment-card.active .payment-card-icon {
          color: var(--primary);
        }
        .payment-card-meta h5 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.15rem;
        }
        .payment-card-meta p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .place-order-btn {
          padding: 1rem;
          font-size: 1.1rem;
          box-shadow: 0 4px 14px rgba(245, 106, 0, 0.3);
        }

        .checkout-summary-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 90px;
        }
        .checkout-summary-panel h3 {
          font-size: 1.2rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .checkout-items-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 250px;
          overflow-y: auto;
          margin-bottom: 1.25rem;
          padding-right: 0.25rem;
        }
        .summary-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
        }
        .qty-tag {
          font-weight: 700;
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
        }
        .summary-item-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .item-title {
          font-weight: 600;
          color: var(--dark);
        }
        .item-unit-desc {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .item-sub-price {
          font-weight: 700;
          color: var(--dark);
        }
        .checkout-totals {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .total-row-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--dark-gray);
        }
        .total-row-item.grand-total {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--dark);
        }

        @media (max-width: 900px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }
          .checkout-summary-panel {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}
