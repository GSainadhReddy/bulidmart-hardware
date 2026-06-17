import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Package, ListCollapse, ShoppingBag, Users, Plus, Edit3, Trash2, CheckCircle2, AlertTriangle, Download } from 'lucide-react';

export default function AdminDashboard({ token, showToast }) {
  const [activePanel, setActivePanel] = useState('analytics');

  // Core data states
  const [analytics, setAnalytics] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modals visibility states
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // null for Add, Product Object for Edit

  // Product Form states
  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodStock, setProdStock] = useState('');
  const [prodUnit, setProdUnit] = useState('pcs');
  const [prodDescription, setProdDescription] = useState('');
  const [prodMinStock, setProdMinStock] = useState('10');
  const [prodIsFeatured, setProdIsFeatured] = useState(false);
  const [prodIsBestseller, setProdIsBestseller] = useState(false);
  const [prodImageFile, setProdImageFile] = useState(null);

  // Category Form states
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');

  // Fetch all core data
  const fetchData = async () => {
    setLoading(true);
    try {
      const headers = { 'Authorization': `Bearer ${token}` };

      // 1. Fetch Analytics
      const resAnal = await fetch('/api/orders/analytics', { headers });
      if (resAnal.ok) {
        const data = await resAnal.json();
        setAnalytics(data);
      }

      // 2. Fetch Products
      const resProd = await fetch('/api/products');
      if (resProd.ok) {
        const data = await resProd.json();
        setProducts(data.products || []);
      }

      // 3. Fetch Categories
      const resCat = await fetch('/api/categories');
      if (resCat.ok) {
        const data = await resCat.json();
        setCategories(data.categories || []);
      }

      // 4. Fetch Orders
      const resOrd = await fetch('/api/orders', { headers });
      if (resOrd.ok) {
        const data = await resOrd.json();
        setOrders(data.orders || []);
      }

      // 5. Fetch Customers
      const resCust = await fetch('/api/auth/customers', { headers });
      if (resCust.ok) {
        const data = await resCust.json();
        setCustomers(data.customers || []);
      }
    } catch (err) {
      console.error("Error loading dashboard data", err);
      showToast("Connection error fetching dashboard data.", "danger");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  // Handle Product Add/Edit Dialog open
  const openProductDialog = (prod = null) => {
    if (prod) {
      setEditingProduct(prod);
      setProdName(prod.name);
      setProdCategory(prod.category_id.toString());
      setProdPrice(prod.price.toString());
      setProdStock(prod.stock.toString());
      setProdUnit(prod.unit);
      setProdDescription(prod.description || '');
      setProdMinStock(prod.min_stock_level.toString());
      setProdIsFeatured(prod.is_featured === 1);
      setProdIsBestseller(prod.is_bestseller === 1);
    } else {
      setEditingProduct(null);
      setProdName('');
      setProdCategory(categories[0]?.id.toString() || '');
      setProdPrice('');
      setProdStock('');
      setProdUnit('pcs');
      setProdDescription('');
      setProdMinStock('10');
      setProdIsFeatured(false);
      setProdIsBestseller(false);
    }
    setProdImageFile(null);
    setShowProductModal(true);
  };

  // Submit Product Form (Add or Edit)
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    if (!prodName || !prodCategory || !prodPrice || prodStock === '') {
      showToast('Name, Category, Price, and Stock are required fields.', 'warning');
      return;
    }

    const formData = new FormData();
    formData.append('name', prodName);
    formData.append('category_id', prodCategory);
    formData.append('price', prodPrice);
    formData.append('stock', prodStock);
    formData.append('unit', prodUnit);
    formData.append('description', prodDescription);
    formData.append('min_stock_level', prodMinStock);
    formData.append('is_featured', prodIsFeatured ? '1' : '0');
    formData.append('is_bestseller', prodIsBestseller ? '1' : '0');
    if (prodImageFile) {
      formData.append('image', prodImageFile);
    }

    try {
      const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData // Note: Content-Type header must be omitted when sending FormData so the browser auto-adds the boundary token!
      });

      if (res.ok) {
        showToast(editingProduct ? 'Product updated successfully.' : 'Product created successfully.', 'success');
        setShowProductModal(false);
        fetchData();
      } else {
        const data = await res.json();
        showToast(data.message || 'Error saving product.', 'warning');
      }
    } catch (err) {
      showToast('Connection failed saving product.', 'danger');
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        showToast('Product deleted from inventory.', 'info');
        fetchData();
      } else {
        showToast('Failed to delete product.', 'warning');
      }
    } catch (err) {
      showToast('Connection error.', 'danger');
    }
  };

  // Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCatName.trim()) {
      showToast('Category name is required.', 'warning');
      return;
    }

    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: newCatName, description: newCatDesc })
      });
      const data = await res.json();
      if (res.ok) {
        showToast('New category added successfully.', 'success');
        setNewCatName('');
        setNewCatDesc('');
        fetchData();
      } else {
        showToast(data.message || 'Error adding category.', 'warning');
      }
    } catch (err) {
      showToast('Connection error.', 'danger');
    }
  };

  // Delete Category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Delete this category? Products linked to this category may display errors.")) return;
    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        showToast('Category deleted.', 'info');
        fetchData();
      } else {
        const data = await res.json();
        showToast(data.message || 'Failed to delete category.', 'warning');
      }
    } catch (err) {
      showToast('Connection error.', 'danger');
    }
  };

  // Update Order Status
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        showToast(`Order status updated to "${newStatus}".`, 'success');
        fetchData();
      } else {
        showToast('Failed to update status.', 'warning');
      }
    } catch (err) {
      showToast('Connection error.', 'danger');
    }
  };

  const getProductImage = (imgUrl) => {
    if (imgUrl && imgUrl !== 'default_product.jpg' && !imgUrl.endsWith('/default_product.jpg')) {
      return imgUrl;
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="40" height="40" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="%23f56a00">🧱</text>
    </svg>`;
  };

  return (
    <div className="admin-page animate-fade">
      <div className="admin-layout">
        
        {/* Navigation Sidebar Drawer */}
        <aside className="admin-sidebar">
          <div className="sidebar-header">
            <div className="admin-icon-box">🛡️</div>
            <div>
              <h3>Admin Console</h3>
              <p>Store Management</p>
            </div>
          </div>

          <div className="sidebar-menu">
            <button 
              className={`menu-btn ${activePanel === 'analytics' ? 'active' : ''}`}
              onClick={() => setActivePanel('analytics')}
            >
              <LayoutDashboard size={18} />
              <span>Analytics Overview</span>
            </button>
            
            <button 
              className={`menu-btn ${activePanel === 'products' ? 'active' : ''}`}
              onClick={() => setActivePanel('products')}
            >
              <Package size={18} />
              <span>Product Inventory</span>
            </button>
            
            <button 
              className={`menu-btn ${activePanel === 'categories' ? 'active' : ''}`}
              onClick={() => setActivePanel('categories')}
            >
              <ListCollapse size={18} />
              <span>Categories Settings</span>
            </button>
            
            <button 
              className={`menu-btn ${activePanel === 'orders' ? 'active' : ''}`}
              onClick={() => setActivePanel('orders')}
            >
              <ShoppingBag size={18} />
              <span>Customer Orders</span>
            </button>
            
            <button 
              className={`menu-btn ${activePanel === 'customers' ? 'active' : ''}`}
              onClick={() => setActivePanel('customers')}
            >
              <Users size={18} />
              <span>Registered Users</span>
            </button>
          </div>
        </aside>

        {/* Dashboard Main Viewports */}
        <main className="admin-main-viewport">
          
          {loading ? (
            <div className="spinner" style={{ marginTop: '10rem' }}></div>
          ) : (
            <>
              {/* PANEL 1: ANALYTICS */}
              {activePanel === 'analytics' && analytics && (
                <div className="panel-container animate-scale">
                  <h2>Sales & Operations Analytics</h2>
                  
                  {/* Overview Cards */}
                  <div className="analytics-summary-grid">
                    <div className="summary-card text-secondary">
                      <div className="card-top">
                        <span>Grand Revenue</span>
                        <LandmarkIcon size={24} />
                      </div>
                      <h3>INR {analytics.summary.totalSales.toFixed(2)}</h3>
                      <p>Total successful orders receipts</p>
                    </div>

                    <div className="summary-card text-primary">
                      <div className="card-top">
                        <span>Total Orders</span>
                        <ShoppingBag size={24} />
                      </div>
                      <h3>{analytics.summary.orderCount}</h3>
                      <p>Transactions processed</p>
                    </div>

                    <div className="summary-card text-success">
                      <div className="card-top">
                        <span>Catalog Items</span>
                        <Package size={24} />
                      </div>
                      <h3>{analytics.summary.productCount}</h3>
                      <p>Materials products defined</p>
                    </div>

                    <div className="summary-card text-info">
                      <div className="card-top">
                        <span>Registered Builders</span>
                        <Users size={24} />
                      </div>
                      <h3>{analytics.summary.customerCount}</h3>
                      <p>Clients in database</p>
                    </div>
                  </div>

                  <div className="analytics-details-layout">
                    {/* Low stock indicators list */}
                    <div className="analytics-sub-card low-stock-card">
                      <div className="sub-card-header">
                        <AlertTriangle size={18} color="var(--danger)" />
                        <h4>Low Stock Alerts</h4>
                      </div>
                      
                      {analytics.lowStockItems.length === 0 ? (
                        <div className="success-stock-state">
                          <CheckCircle2 size={36} color="var(--success)" />
                          <p>All product inventories are healthy!</p>
                        </div>
                      ) : (
                        <div className="low-stock-list">
                          {analytics.lowStockItems.map(item => (
                            <div key={item.id} className="low-stock-item">
                              <div>
                                <h5>{item.name}</h5>
                                <span className="category-label">{item.category_name}</span>
                              </div>
                              <div className="stock-alert-values text-right">
                                <strong className="text-danger">{item.stock}</strong> / {item.min_stock_level} {item.unit}
                                <p className="stock-desc-label">Current / Min Limit</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sales category revenue bar-grid */}
                    <div className="analytics-sub-card category-revenue-card">
                      <h4>Revenue Breakdown by Category</h4>
                      {analytics.categorySales.length === 0 ? (
                        <p style={{ color: 'var(--gray)', fontSize: '0.9rem', fontStyle: 'italic', padding: '1rem 0' }}>No sales data available yet.</p>
                      ) : (
                        <div className="category-revenue-chart">
                          {analytics.categorySales.map((cat, idx) => {
                            const maxRev = Math.max(...analytics.categorySales.map(c => c.revenue)) || 1;
                            const percent = (cat.revenue / maxRev) * 100;
                            return (
                              <div key={idx} className="chart-row">
                                <span className="chart-row-label">{cat.category_name}</span>
                                <div className="chart-bar-wrapper">
                                  <div className="chart-bar" style={{ width: `${percent}%` }}></div>
                                </div>
                                <span className="chart-row-value">INR {parseFloat(cat.revenue).toFixed(0)}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* PANEL 2: PRODUCT INVENTORY */}
              {activePanel === 'products' && (
                <div className="panel-container animate-scale">
                  <div className="panel-header-actions">
                    <h2>Material Inventory</h2>
                    <button className="btn btn-primary btn-sm" onClick={() => openProductDialog(null)}>
                      <Plus size={16} />
                      <span>Add Product</span>
                    </button>
                  </div>

                  <div className="table-responsive-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Material Name</th>
                          <th>Category</th>
                          <th>Price (INR)</th>
                          <th>Stock Level</th>
                          <th>Min Level</th>
                          <th>Ftr / Best</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map(prod => {
                          const isLow = prod.stock <= prod.min_stock_level;
                          return (
                            <tr key={prod.id} className={isLow ? 'table-row-warning' : ''}>
                              <td>
                                <img src={getProductImage(prod.image_url)} alt="" className="table-thumbnail" />
                              </td>
                              <td className="font-bold">{prod.name}</td>
                              <td>{prod.category_name}</td>
                              <td>{parseFloat(prod.price).toFixed(2)} / {prod.unit}</td>
                              <td>
                                <span className={`table-stock-badge ${isLow ? 'text-danger font-bold' : ''}`}>
                                  {prod.stock} {prod.unit}s
                                </span>
                              </td>
                              <td>{prod.min_stock_level}</td>
                              <td>
                                {prod.is_featured === 1 && <span className="tiny-badge bg-primary">F</span>}
                                {prod.is_bestseller === 1 && <span className="tiny-badge bg-secondary">B</span>}
                              </td>
                              <td>
                                <div className="table-row-actions">
                                  <button className="icon-btn edit-btn" onClick={() => openProductDialog(prod)} title="Edit product">
                                    <Edit3 size={14} />
                                  </button>
                                  <button className="icon-btn delete-btn" onClick={() => handleDeleteProduct(prod.id)} title="Delete product">
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* PANEL 3: CATEGORIES SETTINGS */}
              {activePanel === 'categories' && (
                <div className="panel-container animate-scale">
                  <h2>Categories Settings</h2>
                  
                  <div className="categories-settings-layout">
                    {/* Add Category Form */}
                    <form className="add-category-card" onSubmit={handleAddCategory}>
                      <h3>Add New Category</h3>
                      
                      <div className="form-group">
                        <label className="form-label" htmlFor="cat-name">Category Title *</label>
                        <input
                          id="cat-name"
                          type="text"
                          className="form-input"
                          placeholder="e.g. Plumbing Materials"
                          value={newCatName}
                          onChange={(e) => setNewCatName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="cat-desc">Description</label>
                        <textarea
                          id="cat-desc"
                          className="form-input"
                          rows="3"
                          placeholder="Brief description of materials..."
                          value={newCatDesc}
                          onChange={(e) => setNewCatDesc(e.target.value)}
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%' }}>Add Category</button>
                    </form>

                    {/* Categories Listing */}
                    <div className="categories-list-card">
                      <h3>Available Categories</h3>
                      <div className="categories-list">
                        {categories.map(cat => (
                          <div key={cat.id} className="category-item-row">
                            <div>
                              <h4>{cat.name}</h4>
                              <p>{cat.description || 'No description provided.'}</p>
                            </div>
                            <button className="delete-cat-btn" onClick={() => handleDeleteCategory(cat.id)}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PANEL 4: CUSTOMER ORDERS */}
              {activePanel === 'orders' && (
                <div className="panel-container animate-scale">
                  <h2>Fulfillment & Customer Orders</h2>

                  <div className="table-responsive-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Client Name</th>
                          <th>Items Summary</th>
                          <th>Total Price</th>
                          <th>Payment</th>
                          <th>Delivery Address</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id}>
                            <td>BM-{order.id.toString().padStart(5, '0')}</td>
                            <td>
                              <strong>{order.customer_name}</strong>
                              <p style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>{order.customer_email}</p>
                            </td>
                            <td>
                              <div className="order-items-tooltip-list">
                                {order.items && order.items.map(it => (
                                  <div key={it.id} className="tooltip-item-row">
                                    <span>{it.quantity}x {it.product_name}</span>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="font-bold">INR {parseFloat(order.total_amount).toFixed(2)}</td>
                            <td className="text-uppercase">{order.payment_method}</td>
                            <td>
                              <span className="address-cell-text" title={order.shipping_address}>
                                {order.shipping_address}
                              </span>
                              <p style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Tel: {order.phone}</p>
                            </td>
                            <td>
                              <select 
                                className={`status-dropdown status-select-${order.status.toLowerCase().replace(' ', '-')}`}
                                value={order.status}
                                onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Packaging">Packaging</option>
                                <option value="In Transit">In Transit</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td>
                              {/* Direct Invoice PDF download link */}
                              <a 
                                href={`/api/invoices/${order.id}`} 
                                download 
                                className="icon-btn edit-btn" 
                                style={{ display: 'inline-flex', alignHeight: 'center' }}
                                title="Download PDF invoice"
                              >
                                <Download size={14} />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* PANEL 5: REGISTERED USERS */}
              {activePanel === 'customers' && (
                <div className="panel-container animate-scale">
                  <h2>Registered Clients Database</h2>
                  
                  <div className="table-responsive-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Client ID</th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Role Type</th>
                          <th>Registration Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map(cust => (
                          <tr key={cust.id}>
                            <td>CL-{cust.id.toString().padStart(4, '0')}</td>
                            <td className="font-bold">{cust.name}</td>
                            <td>{cust.email}</td>
                            <td>
                              <span className="badge badge-info">{cust.role}</span>
                            </td>
                            <td>{new Date(cust.created_at).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}

        </main>
      </div>

      {/* POPUP PRODUCT MODAL (ADD / EDIT PRODUCT) */}
      {showProductModal && (
        <div className="modal-overlay animate-fade">
          <div className="modal-content animate-scale">
            <div className="modal-header">
              <h3>{editingProduct ? 'Edit Inventory Product' : 'Add Material Product'}</h3>
              <button className="modal-close-btn" onClick={() => setShowProductModal(false)}>×</button>
            </div>
            
            <form onSubmit={handleProductSubmit} className="modal-body-form">
              <div className="grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-name">Material Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. UltraTech Cement"
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-category">Category *</label>
                  <select
                    id="modal-category"
                    className="form-input"
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid-cols-3" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-price">Price (INR) *</label>
                  <input
                    id="modal-price"
                    type="number"
                    className="form-input"
                    placeholder="450.00"
                    step="0.01"
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-stock">Initial Stock *</label>
                  <input
                    id="modal-stock"
                    type="number"
                    className="form-input"
                    placeholder="100"
                    value={prodStock}
                    onChange={(e) => setProdStock(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-unit">Unit *</label>
                  <input
                    id="modal-unit"
                    type="text"
                    className="form-input"
                    placeholder="e.g. bag, pcs, box"
                    value={prodUnit}
                    onChange={(e) => setProdUnit(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-min-stock">Min Stock Level Warning *</label>
                  <input
                    id="modal-min-stock"
                    type="number"
                    className="form-input"
                    value={prodMinStock}
                    onChange={(e) => setProdMinStock(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-image">Product Image File</label>
                  <input
                    id="modal-image"
                    type="file"
                    accept="image/*"
                    className="form-input"
                    onChange={(e) => setProdImageFile(e.target.files[0])}
                  />
                  <span className="input-helper-text">Select a JPG/PNG to upload to the server.</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-desc">Description</label>
                <textarea
                  id="modal-desc"
                  className="form-input"
                  rows="3"
                  placeholder="Material specs, usage instructions, strength ratings..."
                  value={prodDescription}
                  onChange={(e) => setProdDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group checkbox-row" style={{ display: 'flex', gap: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={prodIsFeatured} 
                    onChange={(e) => setProdIsFeatured(e.target.checked)} 
                  />
                  <strong>Is Featured Product</strong>
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={prodIsBestseller} 
                    onChange={(e) => setProdIsBestseller(e.target.checked)} 
                  />
                  <strong>Is Bestselling Material</strong>
                </label>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setShowProductModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary btn-sm">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .admin-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .admin-sidebar {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .admin-icon-box {
          font-size: 1.75rem;
          background-color: var(--secondary-light);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .sidebar-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
        }
        .sidebar-header p {
          font-size: 0.75rem;
          color: var(--gray);
        }
        
        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .menu-btn {
          width: 100%;
          text-align: left;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          color: var(--dark-gray);
          transition: var(--transition-fast);
        }
        .menu-btn:hover {
          background-color: var(--bg-light);
          color: var(--primary);
        }
        .menu-btn.active {
          background-color: var(--primary);
          color: var(--bg-white);
          font-weight: 600;
        }

        .admin-main-viewport {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          min-height: 600px;
        }
        .panel-container h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        
        .analytics-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .summary-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          background-color: var(--bg-light);
        }
        .summary-card.text-secondary { border-left: 4px solid var(--secondary); }
        .summary-card.text-primary { border-left: 4px solid var(--primary); }
        .summary-card.text-success { border-left: 4px solid var(--success); }
        .summary-card.text-info { border-left: 4px solid var(--accent); }
        
        .card-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .summary-card h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .summary-card p {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .analytics-details-layout {
          display: grid;
          grid-template-columns: 1.1fr 1.5fr;
          gap: 2rem;
        }
        .analytics-sub-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }
        .sub-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .analytics-sub-card h4 {
          font-size: 1rem;
          font-weight: 700;
        }
        .success-stock-state {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--gray);
        }
        .success-stock-state p {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        .low-stock-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 250px;
          overflow-y: auto;
        }
        .low-stock-item {
          display: flex;
          justify-content: space-between;
          background-color: var(--bg-light);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border-left: 3.5px solid var(--danger);
          font-size: 0.85rem;
        }
        .low-stock-item h5 {
          font-weight: 600;
        }
        .category-label {
          font-size: 0.7rem;
          color: var(--gray);
        }
        .stock-alert-values {
          font-weight: 600;
        }
        .stock-desc-label {
          font-size: 0.65rem;
          color: var(--gray);
          font-weight: normal;
        }

        .category-revenue-card h4 {
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .category-revenue-chart {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chart-row {
          display: grid;
          grid-template-columns: 130px 1fr 90px;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
        }
        .chart-row-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        .chart-bar-wrapper {
          height: 12px;
          background-color: var(--bg-light);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .chart-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          border-radius: var(--radius-full);
        }
        .chart-row-value {
          text-align: right;
          font-weight: 700;
          color: var(--dark);
        }

        .panel-header-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .panel-header-actions h2 {
          border: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        /* Data Tables Styling */
        .table-responsive-wrapper {
          width: 100%;
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .data-table th {
          background-color: var(--bg-light);
          padding: 1rem 1.25rem;
          font-weight: 700;
          color: var(--dark-gray);
          border-bottom: 1.5px solid var(--border-color);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }
        .data-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--dark-gray);
        }
        .data-table tbody tr:hover {
          background-color: var(--bg-light);
        }
        .table-row-warning {
          background-color: #fffbeb;
        }
        .table-row-warning:hover {
          background-color: #fef3c7 !important;
        }
        .table-thumbnail {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background-color: var(--bg-white);
        }
        .table-row-actions {
          display: flex;
          gap: 0.5rem;
        }
        .icon-btn {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          background-color: var(--bg-white);
          color: var(--gray);
        }
        .icon-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }
        .icon-btn.delete-btn:hover {
          color: var(--danger);
          border-color: var(--danger);
          background-color: #fef2f2;
        }
        
        .address-cell-text {
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .status-dropdown {
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.75rem;
          border: 1.5px solid var(--border-color);
          outline: none;
        }
        .status-select-pending { background-color: #fef3c7; color: #b45309; border-color: #fde68a; }
        .status-select-packaging { background-color: #e0f2fe; color: #0369a1; border-color: #bae6fd; }
        .status-select-in-transit { background-color: #e0e7ff; color: #4338ca; border-color: #c7d2fe; }
        .status-select-delivered { background-color: #d1fae5; color: #047857; border-color: #a7f3d0; }
        .status-select-cancelled { background-color: #fee2e2; color: #b91c1c; border-color: #fca5a5; }

        .categories-settings-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }
        .add-category-card, .categories-list-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }
        .add-category-card h3, .categories-list-card h3 {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .category-item-row {
          background-color: var(--bg-light);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .category-item-row h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .category-item-row p {
          font-size: 0.8rem;
          color: var(--gray);
        }
        .delete-cat-btn {
          color: var(--gray);
        }
        .delete-cat-btn:hover {
          color: var(--danger);
        }

        /* Modal Overlays */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          background-color: var(--bg-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 650px;
          overflow: hidden;
        }
        .modal-header {
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--bg-light);
        }
        .modal-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .modal-close-btn {
          font-size: 1.75rem;
          color: var(--gray);
          line-height: 1;
        }
        .modal-close-btn:hover {
          color: var(--dark);
        }
        .modal-body-form {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          margin-top: 1rem;
        }
        .checkbox-row {
          margin-top: 0.5rem;
        }
        .font-bold { font-weight: 700; }
        .text-uppercase { text-transform: uppercase; }
        .text-danger { color: var(--danger); }
        .text-right { text-align: right; }

        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 1fr;
          }
          .analytics-summary-grid {
            grid-template-columns: 1fr 1fr;
          }
          .analytics-details-layout {
            grid-template-columns: 1fr;
          }
          .categories-settings-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// Simple inline component inside dashboard file for safety
function LandmarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 2 7 22 7" />
    </svg>
  );
}
