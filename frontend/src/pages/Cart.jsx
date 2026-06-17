import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function Cart({ cart, updateCartQty, removeFromCart }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Standard site cargo delivery charges: Free above 5000 INR, else 300 INR
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 300;
  const total = subtotal + shipping;

  const getProductImage = (item) => {
    if (item.image_url && item.image_url !== 'default_product.jpg' && !item.image_url.endsWith('/default_product.jpg')) {
      return item.image_url;
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="80" height="80" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="%23f56a00">🧱</text>
    </svg>`;
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart-page animate-scale">
        <ShoppingBag size={64} className="empty-cart-icon" />
        <h2>Your Shopping Cart is Empty</h2>
        <p>You haven't added any construction or home building materials yet. Head over to our catalog to select cement, tools, bricks, or paints.</p>
        <Link to="/catalog" className="btn btn-primary">Browse Materials</Link>
      </div>
    );
  }

  return (
    <div className="cart-page animate-fade">
      <h1>Shopping Cart</h1>
      
      <div className="cart-layout">
        {/* Left column: Items list */}
        <div className="cart-items-panel">
          <div className="table-header-row">
            <span>Product Details</span>
            <span>Quantity</span>
            <span>Total Price</span>
          </div>

          <div className="cart-items-list">
            {cart.map(item => (
              <div key={item.product_id} className="cart-item-row">
                
                {/* Item Details */}
                <div className="item-details">
                  <img src={getProductImage(item)} alt={item.name} className="item-img" />
                  <div>
                    <h3 className="item-name">
                      <Link to={`/product/${item.product_id}`}>{item.name}</Link>
                    </h3>
                    <div className="item-price-desc">
                      INR {parseFloat(item.price).toFixed(2)} / {item.unit}
                    </div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.product_id)}>
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                {/* Quantity Editor */}
                <div className="item-quantity">
                  <div className="cart-qty-picker">
                    <button onClick={() => updateCartQty(item.product_id, item.quantity - 1)}>
                      <Minus size={12} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartQty(item.product_id, item.quantity + 1)}>
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="unit-label">{item.unit}s</span>
                </div>

                {/* Subtotal */}
                <div className="item-subtotal">
                  INR {(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right column: Invoice summary card */}
        <aside className="order-summary-panel">
          <h3>Order Summary</h3>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>INR {subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Cargo Site Shipping</span>
              <span>{shipping === 0 ? <span className="free-shipping">FREE</span> : `INR ${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <div className="shipping-hint">
                Add <strong>INR {(5000 - subtotal).toFixed(2)}</strong> more in products to qualify for free site shipping!
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-row total-row">
              <span>Total Price</span>
              <span>INR {total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/checkout" className="btn btn-primary checkout-action-btn">
            <span>Proceed to Checkout</span>
            <ArrowRight size={18} />
          </Link>
          
          <div className="security-guarantee">
            🔒 Safe & Secure Checkout Guarantee
          </div>
        </aside>
      </div>

      <style>{`
        .empty-cart-page {
          text-align: center;
          padding: 5rem 2rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 4rem auto;
        }
        .empty-cart-icon {
          color: var(--light-gray);
          margin-bottom: 1.5rem;
        }
        .empty-cart-page h2 {
          margin-bottom: 0.75rem;
        }
        .empty-cart-page p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .cart-page h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .cart-items-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .table-header-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 1rem 1.5rem;
          background-color: var(--bg-light);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--dark-gray);
          border-bottom: 1px solid var(--border-color);
        }
        .cart-item-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          align-items: center;
        }
        .cart-item-row:last-child {
          border-bottom: none;
        }
        
        .item-details {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .item-img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: #f1f5f9;
          border: 1px solid var(--border-color);
        }
        .item-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .item-name a:hover {
          color: var(--primary);
        }
        .item-price-desc {
          font-size: 0.8rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }
        .remove-item-btn {
          color: var(--gray);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .remove-item-btn:hover {
          color: var(--danger);
        }
        
        .item-quantity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }
        .cart-qty-picker {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--bg-light);
        }
        .cart-qty-picker button {
          padding: 0.4rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-qty-picker button:hover {
          background-color: var(--light-gray);
        }
        .cart-qty-picker span {
          min-width: 30px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .unit-label {
          font-size: 0.75rem;
          color: var(--gray);
          margin-left: 2px;
        }
        
        .item-subtotal {
          font-weight: 700;
          color: var(--dark);
          font-size: 1.1rem;
        }

        .order-summary-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .order-summary-panel h3 {
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .summary-row.total-row {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--dark);
          margin-top: 1rem;
        }
        .free-shipping {
          color: var(--success);
          font-weight: 700;
        }
        .shipping-hint {
          font-size: 0.75rem;
          background-color: var(--primary-light);
          color: var(--primary);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
          border: 1px dashed rgba(245,106,0,0.2);
        }
        .summary-divider {
          border-top: 1px solid var(--border-color);
          margin: 1rem 0;
        }
        .checkout-action-btn {
          width: 100%;
          padding: 0.9rem;
          gap: 0.75rem;
        }
        .security-guarantee {
          font-size: 0.75rem;
          color: var(--gray);
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 900px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .table-header-row {
            display: none;
          }
          .cart-item-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            text-align: center;
          }
          .item-details {
            flex-direction: column;
          }
          .item-quantity {
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
