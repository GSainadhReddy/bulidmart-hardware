import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ShieldAlert, ArrowLeft, Send } from 'lucide-react';

export default function ProductDetail({ addToCart, toggleWishlist, wishlist, user, token, showToast }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  // Review form inputs
  const [ratingInput, setRatingInput] = useState(5);
  const [commentInput, setCommentInput] = useState('');
  const [submittingReview, setSubmittingReview] = useState(false);

  const isWishlisted = wishlist.some(item => item.product_id === parseInt(id));

  const fetchProductDetails = () => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(data => {
        setProduct(data.product);
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        showToast("Error loading product details.", "danger");
        navigate('/catalog');
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="spinner" style={{ marginTop: '10rem' }}></div>;
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  const isLowStock = product.stock > 0 && product.stock <= product.min_stock_level;
  const isOutOfStock = product.stock === 0;

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      showToast('Please log in to submit a review.', 'warning');
      return;
    }

    setSubmittingReview(true);
    try {
      const res = await fetch(`/api/products/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating: ratingInput, comment: commentInput })
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Review submitted successfully!', 'success');
        setCommentInput('');
        fetchProductDetails(); // reload reviews & rating
      } else {
        showToast(data.message || 'Error submitting review.', 'warning');
      }
    } catch (err) {
      showToast('Connection failed.', 'danger');
    } finally {
      setSubmittingReview(false);
    }
  };

  const getProductImage = (imgUrl) => {
    if (imgUrl && imgUrl !== 'default_product.jpg' && !imgUrl.endsWith('/default_product.jpg')) {
      return imgUrl;
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="400" height="300" fill="%231a365d" opacity="0.05"/>
      <circle cx="200" cy="130" r="55" fill="%23f56a00" opacity="0.1"/>
      <path d="M200 105 L225 145 L175 145 Z" fill="%23f56a00" stroke="%23f56a00" stroke-width="4"/>
      <rect x="188" y="145" width="24" height="24" fill="%23f56a00"/>
      <text x="50%" y="225" dominant-baseline="middle" text-anchor="middle" font-size="18" font-weight="bold" fill="%23102a43">${encodeURIComponent(product.name)}</text>
    </svg>`;
  };

  const renderStars = (rating, size = 16) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={size} className="star-fill" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} size={size} className="star-half" />);
      } else {
        stars.push(<Star key={i} size={size} className="star-empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-detail-page animate-fade">
      {/* Back button */}
      <Link to="/catalog" className="back-link">
        <ArrowLeft size={16} />
        <span>Back to Catalog</span>
      </Link>

      <div className="detail-layout">
        {/* Left column: image panel */}
        <div className="detail-image-panel">
          <div className="detail-img-wrapper">
            <img src={getProductImage(product.image_url)} alt={product.name} />
          </div>
        </div>

        {/* Right column: purchase details */}
        <div className="detail-info-panel">
          <span className="info-category">{product.category_name}</span>
          <h1 className="info-title">{product.name}</h1>
          
          <div className="rating-summary-row">
            <div className="stars">{renderStars(product.rating || 0, 18)}</div>
            <span className="rating-score">{product.rating || '0.0'}</span>
            <span className="rating-count">({reviews.length} customer reviews)</span>
          </div>

          <div className="info-price-row">
            <span className="info-price">INR {parseFloat(product.price).toFixed(2)}</span>
            <span className="info-unit">per {product.unit}</span>
          </div>

          <p className="info-description">{product.description || 'No product details provided.'}</p>

          {/* Inventory status bar */}
          <div className="stock-status-box">
            {isOutOfStock ? (
              <div className="stock-alert danger">
                <ShieldAlert size={18} />
                <span>Out of Stock - Materials temporarily unavailable</span>
              </div>
            ) : isLowStock ? (
              <div className="stock-alert warning">
                <ShieldAlert size={18} />
                <span>Low Stock Alert - Only {product.stock} {product.unit}s remaining</span>
              </div>
            ) : (
              <div className="stock-alert success">
                <span>In Stock - {product.stock} {product.unit}s available for immediate site delivery</span>
              </div>
            )}
          </div>

          {/* Action Row */}
          {!isOutOfStock && (
            <div className="purchase-controls">
              <div className="qty-picker">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
              </div>

              <button className="btn btn-primary" onClick={() => addToCart(product, qty)}>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>

              <button 
                className={`btn btn-outline wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart size={18} fill={isWishlisted ? "var(--danger)" : "none"} />
                <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reviews & Submission Area */}
      <div className="reviews-section">
        <h2>Customer Reviews & Feedbacks</h2>
        
        <div className="reviews-layout">
          {/* Review write panel */}
          <div className="write-review-panel">
            <h3>Write a Review</h3>
            {user ? (
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label className="form-label">Select Star Rating</label>
                  <div className="star-rating-select">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star} 
                        type="button" 
                        onClick={() => setRatingInput(star)}
                        className={star <= ratingInput ? 'selected' : ''}
                      >
                        <Star size={24} fill={star <= ratingInput ? "var(--warning)" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="comment-text">Your Comments</label>
                  <textarea 
                    id="comment-text"
                    className="form-input" 
                    rows="4" 
                    placeholder="Describe your experience with this material (durability, delivery condition)..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-secondary" disabled={submittingReview}>
                  <Send size={16} />
                  <span>{submittingReview ? 'Submitting...' : 'Submit Feedback'}</span>
                </button>
              </form>
            ) : (
              <div className="login-prompt-box">
                <p>You must be signed in to submit product reviews.</p>
                <Link to="/login" className="btn btn-outline btn-sm">Sign In Account</Link>
              </div>
            )}
          </div>

          {/* Review list panel */}
          <div className="reviews-list-panel">
            <h3>Recent Feedbacks ({reviews.length})</h3>
            {reviews.length === 0 ? (
              <p className="no-reviews">No reviews submitted yet for this product. Be the first to leave a feedback!</p>
            ) : (
              <div className="reviews-list">
                {reviews.map(rev => (
                  <div key={rev.id} className="review-card">
                    <div className="review-card-header">
                      <h5>{rev.user_name}</h5>
                      <span className="review-date">{new Date(rev.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="stars-wrapper">{renderStars(rev.rating, 14)}</div>
                    <p className="review-comment">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .back-link:hover {
          color: var(--primary);
        }

        .detail-layout {
          display: grid;
          grid-template-columns: 1.2fr 1.5fr;
          gap: 3rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 3.5rem;
        }
        .detail-image-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .detail-img-wrapper img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
        }

        .detail-info-panel {
          display: flex;
          flex-direction: column;
        }
        .info-category {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .info-title {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }
        .rating-summary-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .rating-summary-row .stars {
          color: var(--warning);
          display: flex;
        }
        .star-fill { fill: currentColor; }
        .star-half { fill: currentColor; opacity: 0.7; }
        .star-empty { color: #cbd5e1; }
        .rating-score {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--dark);
        }
        .rating-count {
          font-size: 0.85rem;
          color: var(--gray);
        }
        .info-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .info-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--dark);
        }
        .info-unit {
          color: var(--gray);
        }
        .info-description {
          font-size: 1rem;
          color: var(--dark-gray);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .stock-status-box {
          margin-bottom: 2rem;
        }
        .stock-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .stock-alert.success {
          background-color: #d1fae5;
          color: #065f46;
        }
        .stock-alert.warning {
          background-color: #fef3c7;
          color: #92400e;
        }
        .stock-alert.danger {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .purchase-controls {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: auto;
        }
        .qty-picker {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--bg-light);
        }
        .qty-picker button {
          padding: 0.75rem 1.25rem;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .qty-picker button:hover {
          background-color: #e2e8f0;
        }
        .qty-picker span {
          padding: 0 1rem;
          font-weight: 700;
          min-width: 45px;
          text-align: center;
        }
        .wishlist-btn.wishlisted {
          color: var(--danger);
          border-color: var(--danger);
          background-color: #fef2f2;
        }

        .reviews-section {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .reviews-section h2 {
          font-size: 1.5rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.75rem;
          margin-bottom: 2rem;
        }
        .reviews-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
        }
        .write-review-panel h3, .reviews-list-panel h3 {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
        }
        .star-rating-select {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .star-rating-select button {
          color: #cbd5e1;
        }
        .star-rating-select button.selected {
          color: var(--warning);
        }
        .login-prompt-box {
          background-color: var(--bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          text-align: center;
          border: 1px dashed var(--border-color);
        }
        .login-prompt-box p {
          font-size: 0.9rem;
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .reviews-list-panel {
          border-left: 1px solid var(--border-color);
          padding-left: 3.5rem;
        }
        .no-reviews {
          color: var(--gray);
          font-style: italic;
          font-size: 0.95rem;
        }
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .review-card {
          padding: 1rem;
          background-color: var(--bg-light);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .review-card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .review-card-header h5 {
          font-size: 0.95rem;
          font-weight: 600;
        }
        .review-date {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .review-card .stars-wrapper {
          color: var(--warning);
          margin-bottom: 0.5rem;
        }
        .review-comment {
          font-size: 0.9rem;
          color: var(--dark-gray);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1.75rem;
          }
          .reviews-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .reviews-list-panel {
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
