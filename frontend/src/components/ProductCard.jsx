import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';

export default function ProductCard({ product, addToCart, toggleWishlist, wishlist }) {
  const isWishlisted = wishlist.some(item => item.product_id === product.id);
  const isLowStock = product.stock > 0 && product.stock <= product.min_stock_level;
  const isOutOfStock = product.stock === 0;

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={14} className="star-icon fill-star" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} size={14} className="star-icon half-star" />);
      } else {
        stars.push(<Star key={i} size={14} className="star-icon empty-star" />);
      }
    }
    return stars;
  };

  // Generate a mock svg placeholder image depending on the product name in case uploads folder is empty
  const getProductImage = (imgUrl) => {
    if (imgUrl && imgUrl !== 'default_product.jpg' && !imgUrl.endsWith('/default_product.jpg')) {
      return imgUrl;
    }
    
    // Fallback: Custom inline SVG based on product name/category for maximum visual impact without broken image links
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" viewBox="0 0 300 220" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="300" height="220" fill="%231a365d" opacity="0.05"/>
      <circle cx="150" cy="95" r="45" fill="%23f56a00" opacity="0.1"/>
      <path d="M150 75 L170 110 L130 110 Z" fill="%23f56a00" stroke="%23f56a00" stroke-width="3"/>
      <rect x="140" y="110" width="20" height="20" fill="%23f56a00"/>
      <text x="50%" y="175" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold" fill="%23102a43">${encodeURIComponent(product.name)}</text>
      <text x="50%" y="195" dominant-baseline="middle" text-anchor="middle" font-size="11" fill="%23627d98">${encodeURIComponent(product.unit || 'pcs')}</text>
    </svg>`;
  };

  return (
    <div className="product-card animate-scale">
      {/* Wishlist Button */}
      <button 
        className={`wishlist-toggle-btn ${isWishlisted ? 'wishlisted' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart size={16} fill={isWishlisted ? "var(--danger)" : "none"} stroke={isWishlisted ? "var(--danger)" : "currentColor"} />
      </button>

      <Link to={`/product/${product.id}`} className="card-link">
        {/* Product Image Area */}
        <div className="product-img-wrapper">
          <img src={getProductImage(product.image_url)} alt={product.name} loading="lazy" />
          
          {/* Status Badges */}
          <div className="badge-container">
            {isOutOfStock && <span className="badge badge-danger">Out of stock</span>}
            {isLowStock && !isOutOfStock && <span className="badge badge-warning">Low stock</span>}
            {product.is_featured === 1 && <span className="badge badge-primary">Featured</span>}
          </div>
        </div>

        {/* Product Meta */}
        <div className="product-meta">
          <span className="product-category-tag">{product.category_name}</span>
          <h3 className="product-title">{product.name}</h3>
          
          {/* Reviews Rating summary */}
          <div className="product-rating-box">
            <div className="stars-wrapper">{renderStars(product.rating || 0)}</div>
            <span className="rating-text">({product.rating_count || 0})</span>
          </div>

          <div className="card-bottom">
            <div className="price-tag">
              <span className="currency">INR</span>
              <span className="price-value">{parseFloat(product.price).toFixed(2)}</span>
              <span className="price-unit">/{product.unit}</span>
            </div>

            {/* Cart Quick Add button */}
            <button 
              className="quick-add-cart-btn"
              disabled={isOutOfStock}
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1);
              }}
              title={isOutOfStock ? "Out of Stock" : "Quick Add to Cart"}
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </Link>

      <style>{`
        .product-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-flat);
          transition: all var(--transition-normal);
          position: relative;
          border: 1px solid var(--border-color);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(245, 106, 0, 0.4);
        }
        .wishlist-toggle-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--bg-white);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          color: var(--gray);
          z-index: 10;
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }
        .wishlist-toggle-btn:hover {
          color: var(--danger);
          transform: scale(1.1);
        }
        .wishlist-toggle-btn.wishlisted {
          color: var(--danger);
          border-color: rgba(239, 68, 68, 0.2);
          background: #fef2f2;
        }
        .card-link {
          display: block;
        }
        .product-img-wrapper {
          height: 180px;
          overflow: hidden;
          position: relative;
          background: #f1f5f9;
        }
        .product-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-img-wrapper img {
          transform: scale(1.05);
        }
        .badge-container {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .product-meta {
          padding: 1.25rem;
        }
        .product-category-tag {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.35rem;
        }
        .product-title {
          font-size: 1rem;
          color: var(--dark);
          font-weight: 600;
          margin-bottom: 0.5rem;
          height: 2.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.25;
        }
        .product-rating-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .stars-wrapper {
          display: flex;
          color: var(--warning);
        }
        .star-icon.fill-star { fill: currentColor; }
        .star-icon.half-star { fill: currentColor; opacity: 0.7; }
        .star-icon.empty-star { color: #cbd5e1; }
        .rating-text {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
          margin-top: 0.5rem;
        }
        .price-tag {
          display: flex;
          align-items: baseline;
        }
        .currency {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gray);
          margin-right: 2px;
        }
        .price-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--dark);
        }
        .price-unit {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .quick-add-cart-btn {
          background: var(--secondary);
          color: var(--bg-white);
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .quick-add-cart-btn:hover:not(:disabled) {
          background: var(--primary);
          transform: scale(1.05);
        }
        .quick-add-cart-btn:disabled {
          background: var(--light-gray);
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
