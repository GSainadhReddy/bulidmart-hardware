import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ClipboardList, Heart, Download, ExternalLink, LogOut, Trash2, ShoppingCart } from 'lucide-react';

export default function Profile({ user, token, wishlist, removeFromWishlist, addToCart, logout }) {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (activeTab === 'orders') {
      setLoadingOrders(true);
      fetch('/api/orders/my-orders', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          setOrders(data.orders || []);
          setLoadingOrders(false);
        })
        .catch(err => {
          console.error("Error fetching orders:", err);
          setLoadingOrders(false);
        });
    }
  }, [activeTab]);

  const getProductImage = (imgUrl) => {
    if (imgUrl && imgUrl !== 'default_product.jpg' && !imgUrl.endsWith('/default_product.jpg')) {
      return imgUrl;
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 80 80" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="80" height="80" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="%23f56a00">🧱</text>
    </svg>`;
  };

  return (
    <div className="profile-page animate-fade">
      <div className="profile-layout">
        
        {/* Left Side: Navigation Sidebar Card */}
        <aside className="profile-sidebar-card">
          <div className="profile-user-info">
            <div className="avatar-circle">
              <User size={36} />
            </div>
            <h2>{user.name}</h2>
            <span className="user-email-label">{user.email}</span>
            <span className="role-tag-badge">{user.role.toUpperCase()}</span>
          </div>

          <div className="profile-menu">
            <button 
              className={`menu-tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <ClipboardList size={18} />
              <span>Order History</span>
            </button>

            <button 
              className={`menu-tab-btn ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <Heart size={18} />
              <span>My Wishlist ({wishlist.length})</span>
            </button>

            <div className="sidebar-divider"></div>

            <button className="menu-tab-btn logout-tab-btn" onClick={logout}>
              <LogOut size={18} />
              <span>Sign Out Account</span>
            </button>
          </div>
        </aside>

        {/* Right Side: Tab Contents */}
        <main className="profile-main-panel">
          
          {/* TAB 1: ORDER HISTORY */}
          {activeTab === 'orders' && (
            <div className="tab-container animate-scale">
              <h2 className="tab-title">My Orders Log</h2>
              
              {loadingOrders ? (
                <div className="spinner"></div>
              ) : orders.length === 0 ? (
                <div className="empty-history text-center">
                  <ClipboardList size={48} className="empty-icon-gray" />
                  <h3>No Orders Placed Yet</h3>
                  <p>Browse our wide range of construction materials and place your first site order online today.</p>
                  <Link to="/catalog" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Browse Catalog</Link>
                </div>
              ) : (
                <div className="orders-log-list">
                  {orders.map(order => (
                    <div key={order.id} className="order-log-card">
                      
                      {/* Order top details */}
                      <div className="order-card-header">
                        <div>
                          <span className="order-id">ID: BM-{order.id.toString().padStart(6, '0')}</span>
                          <span className="order-date">{new Date(order.created_at).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="order-actions">
                          <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                            {order.status}
                          </span>
                          
                          <Link to={`/order-tracking/${order.id}`} className="btn btn-outline btn-sm track-btn">
                            <ExternalLink size={14} />
                            <span>Track Delivery</span>
                          </Link>

                          {/* Invoice PDF download */}
                          <a 
                            href={`/api/invoices/${order.id}`} 
                            download 
                            className="btn btn-outline btn-sm download-invoice-btn"
                          >
                            <Download size={14} />
                            <span>Invoice</span>
                          </a>
                        </div>
                      </div>

                      {/* Items row list */}
                      <div className="order-card-items">
                        {order.items && order.items.map(item => (
                          <div key={item.id} className="order-item-tiny">
                            <img src={getProductImage(item.image_url)} alt={item.product_name} className="tiny-img" />
                            <div className="tiny-meta">
                              <h5>{item.product_name}</h5>
                              <p>{item.quantity} x INR {parseFloat(item.price).toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="order-card-bottom">
                        <span>Paid via <strong>{order.payment_method.toUpperCase()}</strong></span>
                        <div className="total-display">
                          <span>Grand Total:</span>
                          <strong>INR {parseFloat(order.total_amount).toFixed(2)}</strong>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="tab-container animate-scale">
              <h2 className="tab-title">My Wishlisted Items</h2>

              {wishlist.length === 0 ? (
                <div className="empty-history text-center">
                  <Heart size={48} className="empty-icon-gray" />
                  <h3>Wishlist is Empty</h3>
                  <p>Select the heart icon on any product card in the catalog to save materials for quick access later.</p>
                  <Link to="/catalog" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Browse Catalog</Link>
                </div>
              ) : (
                <div className="wishlist-grid grid-cols-2">
                  {wishlist.map(item => (
                    <div key={item.id} className="wishlist-item-card">
                      <img src={getProductImage(item.image_url)} alt={item.name} className="wish-img" />
                      
                      <div className="wish-meta">
                        <h4>{item.name}</h4>
                        <div className="wish-price">INR {parseFloat(item.price).toFixed(2)}</div>
                        
                        <div className="wish-actions">
                          <button 
                            className="btn btn-primary btn-sm" 
                            disabled={item.stock === 0}
                            onClick={() => addToCart({ id: item.product_id, name: item.name, price: item.price, image_url: item.image_url, stock: item.stock, unit: 'pcs' }, 1)}
                          >
                            <ShoppingCart size={14} />
                            <span>Add to Cart</span>
                          </button>
                          
                          <button 
                            className="wish-delete-btn" 
                            onClick={() => removeFromWishlist(item.product_id)}
                            title="Remove from wishlist"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </main>

      </div>

      <style>{`
        .profile-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .profile-sidebar-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .profile-user-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 2rem;
        }
        .avatar-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--secondary-light);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border: 2px solid var(--border-color);
        }
        .profile-user-info h2 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .user-email-label {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 0.75rem;
        }
        .role-tag-badge {
          background-color: var(--primary-light);
          color: var(--primary);
          padding: 0.25rem 0.65rem;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
          letter-spacing: 0.5px;
        }

        .profile-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .menu-tab-btn {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--dark-gray);
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .menu-tab-btn:hover {
          background-color: var(--bg-light);
          color: var(--primary);
        }
        .menu-tab-btn.active {
          background-color: var(--secondary);
          color: var(--bg-white);
        }
        .sidebar-divider {
          border-top: 1px solid var(--border-color);
          margin: 0.75rem 0;
        }
        .logout-tab-btn {
          color: var(--danger);
        }
        .logout-tab-btn:hover {
          background-color: #fee2e2;
          color: var(--danger);
        }

        .profile-main-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          min-height: 500px;
        }
        .tab-title {
          font-size: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
          margin-bottom: 1.75rem;
        }
        
        .empty-history {
          padding: 4rem 1.5rem;
          color: var(--gray);
        }
        .empty-icon-gray {
          color: var(--light-gray);
          margin-bottom: 1rem;
        }
        
        .orders-log-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .order-log-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .order-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-color);
        }
        .order-id {
          font-weight: 700;
          color: var(--dark);
          margin-right: 0.5rem;
        }
        .order-date {
          font-size: 0.8rem;
          color: var(--gray);
        }
        .order-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .status-badge {
          padding: 0.25rem 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        .status-pending { background-color: #fef3c7; color: #d97706; }
        .status-packaging { background-color: #e0f2fe; color: #0369a1; }
        .status-in-transit { background-color: #e0e7ff; color: #4f46e5; }
        .status-delivered { background-color: #d1fae5; color: #059669; }
        .status-cancelled { background-color: #fee2e2; color: #dc2626; }

        .order-card-items {
          padding: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .order-item-tiny {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tiny-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
        }
        .tiny-meta h5 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
        }
        .tiny-meta p {
          font-size: 0.75rem;
          color: var(--gray);
        }
        
        .order-card-bottom {
          padding: 1rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .total-display span {
          color: var(--gray);
          margin-right: 0.25rem;
        }
        .total-display strong {
          font-size: 1.05rem;
          color: var(--dark);
        }

        .wishlist-item-card {
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
        }
        .wish-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
        }
        .wish-meta {
          flex: 1;
        }
        .wish-meta h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .wish-price {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }
        .wish-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .wish-delete-btn {
          color: var(--gray);
          padding: 0.25rem;
        }
        .wish-delete-btn:hover {
          color: var(--danger);
        }

        @media (max-width: 900px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }
          .profile-main-panel {
            padding: 1.5rem;
          }
          .order-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
