import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Shield, Truck, Sparkles, Star, ChevronDown, Hammer, Compass, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Home({ addToCart, toggleWishlist, wishlist }) {
  const [featured, setFeatured] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [faqOpen, setFaqOpen] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const prods = data.products || [];
        setFeatured(prods.filter(p => p.is_featured === 1).slice(0, 4));
        setBestsellers(prods.filter(p => p.is_bestseller === 1).slice(0, 4));
      })
      .catch(err => console.error("Error loading products", err));

    // Fetch categories
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        setCategories((data.categories || []).slice(0, 6)); // Display first 6
      })
      .catch(err => console.error("Error loading categories", err));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchText)}`);
    } else {
      navigate('/catalog');
    }
  };

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getCategoryIconName = (name) => {
    switch (name.toLowerCase()) {
      case 'cement': return '🧱';
      case 'bricks': return '🧱';
      case 'steel & iron': return '🔗';
      case 'paints': return '🎨';
      case 'plumbing materials': return '🚰';
      case 'electrical supplies': return '🔌';
      case 'power tools': return '🔌';
      case 'hand tools': return '🔧';
      case 'safety equipment': return '🦺';
      default: return '🛠️';
    }
  };

  return (
    <div className="home-page animate-fade">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">🧱 PREMIUM CONSTRUCTION MATERIALS</span>
          <h1>Build Stronger, Build Smarter with BuildMart</h1>
          <p>
            Get top-quality cement, reinforcement steel, tools, paints, and safety equipment delivered directly to your construction site. Wholesale pricing and unmatched durability.
          </p>
          
          <form className="hero-search-form" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search for cement, bricks, power tools, steel rods..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="hero-search-btn">
              <Search size={18} />
              <span>Search</span>
            </button>
          </form>

          <div className="hero-cta-buttons">
            <Link to="/catalog" className="btn btn-primary">Browse Catalog</Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--bg-white)', borderColor: 'var(--bg-white)' }}>Contact Support</Link>
          </div>
        </div>
      </section>

      {/* Selling Points Bar */}
      <section className="usp-section">
        <div className="usp-grid">
          <div className="usp-card">
            <Shield size={32} className="usp-icon" />
            <div>
              <h5>A-Grade Certification</h5>
              <p>All materials comply with ISO standards</p>
            </div>
          </div>
          <div className="usp-card">
            <Truck size={32} className="usp-icon" />
            <div>
              <h5>Site Delivery</h5>
              <p>Reliable shipping directly to your site</p>
            </div>
          </div>
          <div className="usp-card">
            <Sparkles size={32} className="usp-icon" />
            <div>
              <h5>Best Price Guarantee</h5>
              <p>Bulk rates for developers and builders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="home-categories-section">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find standard materials for columns, walls, wiring, plumbing, and finishing</p>
        </div>
        
        <div className="categories-grid grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/catalog?category=${cat.id}`} className="cat-card">
              <span className="cat-icon">{getCategoryIconName(cat.name)}</span>
              <div>
                <h4>{cat.name}</h4>
                <p>{cat.description || 'Browse professional equipment'}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Specially curated high-strength components and tools in demand today</p>
        </div>
        <div className="products-grid grid-cols-4">
          {featured.map(prod => (
            <ProductCard 
              key={prod.id} 
              product={prod} 
              addToCart={addToCart} 
              toggleWishlist={toggleWishlist} 
              wishlist={wishlist} 
            />
          ))}
        </div>
      </section>

      {/* Bestselling Products */}
      <section className="products-section alternate-bg">
        <div className="products-container">
          <div className="section-header">
            <h2 className="section-title">Top Sellers</h2>
            <p className="section-subtitle">Tested, verified, and heavily stocked materials used by major developers</p>
          </div>
          <div className="products-grid grid-cols-4">
            {bestsellers.map(prod => (
              <ProductCard 
                key={prod.id} 
                product={prod} 
                addToCart={addToCart} 
                toggleWishlist={toggleWishlist} 
                wishlist={wishlist} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Builder Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">Contractor Reviews</h2>
          <p className="section-subtitle">What engineers and developers say about buying from BuildMart</p>
        </div>
        
        <div className="testimonials-grid grid-cols-3">
          <div className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p>"BuildMart has saved us tons of time. We get steel rods and cement delivered straight to our site in hours. Great pricing and responsive support."</p>
            <div className="testimonial-author">
              <div className="author-init">A</div>
              <div>
                <h5>Arun R.</h5>
                <span>Site Engineer, SV Builders</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p>"Outstanding customer care! One of our order items was short in stock, they instantly upgraded us to a higher tier wire without charging extra. Recommended!"</p>
            <div className="testimonial-author">
              <div className="author-init">M</div>
              <div>
                <h5>Megha K.</h5>
                <span>Interior Designer, DecorLab</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p>"The admin panel invoices make expense reports very convenient. Orders are fast, stock counts are exact, and they carry all major power tool brands."</p>
            <div className="testimonial-author">
              <div className="author-init">V</div>
              <div>
                <h5>Vikram S.</h5>
                <span>Independent Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">Common questions about order placements, wholesale rates, and delivery</p>
        </div>

        <div className="faq-accordion-list">
          {[
            {
              q: "Do you deliver to construction sites directly?",
              a: "Yes! We specialize in direct-to-site shipping. When placing your order, specify the correct gate location, site plot number, and a contact phone number for our delivery truck drivers."
            },
            {
              q: "Can I receive wholesale pricing on large bulk orders?",
              a: "Absolutely. We offer competitive rates for bulk quantities of cement bags, bricks, and steel rods. Contact our customer sales desk via our Contact Page to receive a custom bulk quote."
            },
            {
              q: "Are the steel bars and cement bags ISO certified?",
              a: "Yes. All reinforcement steel (TMT Bars) and cement grades we supply carry official manufacturer certification and comply fully with national building code structural regulations."
            },
            {
              q: "How do I track the progress of my delivery truck?",
              a: "Once your order is processed, check your 'Profile' page or use the specific tracking URL sent to you. You can see whether the order is Pending, Packaging, In Transit, or Delivered in real-time."
            }
          ].map((faq, index) => (
            <div key={index} className={`faq-item ${faqOpen[index] ? 'open' : ''}`}>
              <button className="faq-trigger" onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className="faq-arrow" />
              </button>
              {faqOpen[index] && (
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .home-page {
          width: 100%;
        }
        .hero-section {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop'); /* Structural building grid */
          background-size: cover;
          background-position: center;
          color: var(--bg-white);
          padding: 6rem 3rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(15, 23, 42, 0.75));
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 750px;
        }
        .hero-badge {
          background: var(--primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .hero-content h1 {
          color: var(--bg-white);
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          font-weight: 800;
        }
        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.5;
        }
        .hero-search-form {
          display: flex;
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          padding: 0.25rem;
          margin-bottom: 2rem;
          border: 2px solid transparent;
        }
        .hero-search-form:focus-within {
          border-color: var(--primary);
        }
        .hero-search-form input {
          flex: 1;
          border: none;
          padding: 0.75rem 1.25rem;
          outline: none;
          color: var(--dark-gray);
        }
        .hero-search-btn {
          background: var(--primary);
          color: var(--bg-white);
          border: none;
          padding: 0 1.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        .hero-search-btn:hover {
          background: var(--primary-hover);
        }
        .hero-cta-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .usp-section {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 3.5rem;
          border: 1px solid var(--border-color);
        }
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .usp-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .usp-icon {
          color: var(--primary);
        }
        .usp-card h5 {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .usp-card p {
          font-size: 0.85rem;
          color: var(--gray);
        }

        .home-categories-section {
          margin-bottom: 4rem;
        }
        .cat-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: all var(--transition-normal);
        }
        .cat-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .cat-icon {
          font-size: 2.25rem;
          background: var(--secondary-light);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }
        .cat-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .cat-card p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .products-section {
          margin-bottom: 4rem;
        }
        .products-section.alternate-bg {
          background: var(--secondary-light);
          padding: 4rem 2rem;
          border-radius: var(--radius-lg);
          margin-left: -2rem;
          margin-right: -2rem;
        }
        .products-container {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .testimonials-section {
          margin-bottom: 4rem;
        }
        .testimonial-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .testimonial-card .stars {
          color: var(--warning);
          display: flex;
          gap: 2px;
        }
        .testimonial-card p {
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: auto;
        }
        .author-init {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--secondary);
          color: var(--bg-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .testimonial-author h5 {
          font-size: 0.95rem;
        }
        .testimonial-author span {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .faq-section {
          margin-bottom: 2rem;
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          background: var(--bg-white);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item.open {
          border-color: var(--primary);
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          font-weight: 600;
          color: var(--dark);
          text-align: left;
        }
        .faq-arrow {
          transition: transform var(--transition-normal);
          color: var(--gray);
        }
        .faq-item.open .faq-arrow {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .faq-content {
          padding: 0 1.25rem 1.25rem 1.25rem;
          font-size: 0.95rem;
          color: var(--dark-gray);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem;
          }
          .hero-content h1 {
            font-size: 2.25rem;
          }
          .hero-search-form {
            flex-direction: column;
            background: transparent;
            padding: 0;
            gap: 0.5rem;
          }
          .hero-search-form input {
            background: var(--bg-white);
            border-radius: var(--radius-md);
          }
          .hero-search-btn {
            padding: 0.75rem;
            justify-content: center;
            border-radius: var(--radius-md);
          }
          .usp-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .products-section.alternate-bg {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
