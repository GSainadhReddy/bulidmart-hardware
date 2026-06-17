import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RefreshCcw, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Catalog({ addToCart, toggleWishlist, wishlist }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Read filter parameters from url query string
  const searchQuery = searchParams.get('search') || '';
  const categoryId = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Local mirror state for inputs
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);

  useEffect(() => {
    // Update local inputs if URL changes externally
    setLocalSearch(searchQuery);
    setLocalMinPrice(minPrice);
    setLocalMaxPrice(maxPrice);
  }, [searchQuery, categoryId, sort, minPrice, maxPrice]);

  useEffect(() => {
    // Fetch categories on load
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories || []))
      .catch(err => console.error("Error loading categories", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    // Assemble API query path
    let apiPath = `/api/products?`;
    const params = [];
    if (searchQuery) params.push(`search=${encodeURIComponent(searchQuery)}`);
    if (categoryId) params.push(`category=${categoryId}`);
    if (sort) params.push(`sort=${sort}`);

    apiPath += params.join('&');

    fetch(apiPath)
      .then(res => res.json())
      .then(data => {
        let list = data.products || [];
        
        // Apply client-side price filtering (Express API simplifies this, but client filter handles manual price ranges cleanly)
        if (minPrice) {
          list = list.filter(p => p.price >= parseFloat(minPrice));
        }
        if (maxPrice) {
          list = list.filter(p => p.price <= parseFloat(maxPrice));
        }

        setProducts(list);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading products", err);
        setLoading(false);
      });
  }, [searchQuery, categoryId, sort, minPrice, maxPrice]);

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateParam('search', localSearch);
  };

  const handlePriceApply = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (localMinPrice) newParams.set('minPrice', localMinPrice);
    else newParams.delete('minPrice');
    
    if (localMaxPrice) newParams.set('maxPrice', localMaxPrice);
    else newParams.delete('maxPrice');

    setSearchParams(newParams);
  };

  const resetFilters = () => {
    setLocalSearch('');
    setLocalMinPrice('');
    setLocalMaxPrice('');
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="catalog-page animate-fade">
      {/* Header section with active queries status */}
      <div className="catalog-header">
        <div>
          <h1>Product Catalog</h1>
          <p className="results-count">
            {loading ? 'Searching...' : `Found ${products.length} materials in stock`}
          </p>
        </div>
        
        {/* Sorting Dropdown */}
        <div className="catalog-sort-wrapper">
          <label htmlFor="sort-select">Sort By:</label>
          <select 
            id="sort-select" 
            value={sort}
            onChange={(e) => updateParam('sort', e.target.value)}
          >
            <option value="">Latest Arrival</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      <div className="catalog-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <SlidersHorizontal size={18} />
            <h3>Filter Materials</h3>
            {(searchQuery || categoryId || sort || minPrice || maxPrice) && (
              <button className="reset-btn" onClick={resetFilters} title="Reset all filters">
                <RefreshCcw size={14} />
              </button>
            )}
          </div>

          {/* Search bar */}
          <form className="sidebar-search" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search store..." 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button type="submit"><Search size={16} /></button>
          </form>

          {/* Categories Filter list */}
          <div className="filter-group">
            <h4>Material Categories</h4>
            <div className="category-links-list">
              <button 
                className={`category-filter-btn ${!categoryId ? 'active' : ''}`}
                onClick={() => updateParam('category', '')}
              >
                All Categories
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`category-filter-btn ${categoryId === cat.id.toString() ? 'active' : ''}`}
                  onClick={() => updateParam('category', cat.id.toString())}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h4>Price Limits (INR)</h4>
            <form className="price-range-form" onSubmit={handlePriceApply}>
              <div className="price-inputs">
                <input 
                  type="number" 
                  placeholder="Min" 
                  value={localMinPrice} 
                  onChange={(e) => setLocalMinPrice(e.target.value)}
                  min="0"
                />
                <span className="price-range-separator">-</span>
                <input 
                  type="number" 
                  placeholder="Max" 
                  value={localMaxPrice} 
                  onChange={(e) => setLocalMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
              <button type="submit" className="btn btn-outline btn-sm apply-btn">Apply Price</button>
            </form>
          </div>
        </aside>

        {/* Catalog Main Panel */}
        <main className="catalog-main">
          {loading ? (
            <div className="spinner"></div>
          ) : products.length === 0 ? (
            <div className="empty-catalog animate-scale">
              <span className="empty-icon">🔍</span>
              <h3>No products found</h3>
              <p>We couldn't find matches for your selection. Try adjusting your search keywords or price filter levels.</p>
              <button className="btn btn-primary btn-sm" onClick={resetFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="products-grid grid-cols-3">
              {products.map(prod => (
                <ProductCard 
                  key={prod.id} 
                  product={prod} 
                  addToCart={addToCart} 
                  toggleWishlist={toggleWishlist} 
                  wishlist={wishlist} 
                />
              ))}
            </div>
          )}
        </main>
      </div>

      <style>{`
        .catalog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
        }
        .catalog-header h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        .results-count {
          color: var(--gray);
          font-size: 0.95rem;
        }
        .catalog-sort-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .catalog-sort-wrapper label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark);
        }
        .catalog-sort-wrapper select {
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border-color);
          outline: none;
          background-color: var(--bg-white);
        }
        .catalog-sort-wrapper select:focus {
          border-color: var(--primary);
        }

        .catalog-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .filters-sidebar {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .sidebar-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .reset-btn {
          margin-left: auto;
          color: var(--gray);
        }
        .reset-btn:hover {
          color: var(--primary);
        }
        
        .sidebar-search {
          display: flex;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .sidebar-search input {
          flex: 1;
          border: none;
          padding: 0.5rem 0.75rem;
          outline: none;
          font-size: 0.85rem;
        }
        .sidebar-search button {
          padding: 0 0.75rem;
          background: var(--bg-light);
          border-left: 1px solid var(--border-color);
          color: var(--gray);
        }
        
        .filter-group {
          margin-bottom: 1.75rem;
        }
        .filter-group h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .category-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .category-filter-btn {
          width: 100%;
          text-align: left;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--dark-gray);
          border-left: 3px solid transparent;
        }
        .category-filter-btn:hover {
          background: var(--bg-light);
          color: var(--primary);
        }
        .category-filter-btn.active {
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 600;
          border-left-color: var(--primary);
        }

        .price-inputs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .price-inputs input {
          width: 100%;
          padding: 0.45rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border-color);
          outline: none;
          text-align: center;
          font-size: 0.85rem;
        }
        .price-inputs input:focus {
          border-color: var(--primary);
        }
        .price-range-separator {
          color: var(--gray);
        }
        .apply-btn {
          width: 100%;
          padding: 0.5rem;
          font-size: 0.8rem;
        }

        .empty-catalog {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }
        .empty-catalog h3 {
          margin-bottom: 0.5rem;
        }
        .empty-catalog p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .catalog-layout {
            grid-template-columns: 240px 1fr;
          }
        }
        @media (max-width: 768px) {
          .catalog-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .catalog-layout {
            grid-template-columns: 1fr;
          }
          .filters-sidebar {
            position: relative;
          }
        }
      `}</style>
    </div>
  );
}
