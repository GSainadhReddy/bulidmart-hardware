import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, PackageCheck, Truck, ShieldCheck, FileText } from 'lucide-react';

export default function OrderTracking({ token }) {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/orders`)
      .then(res => res.json())
      .then(data => {
        const found = (data.orders || []).find(o => o.id === parseInt(id));
        setOrder(found);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="spinner" style={{ marginTop: '10rem' }}></div>;
  }

  if (!order) {
    return (
      <div className="text-center animate-scale" style={{ padding: '6rem 2rem' }}>
        <h2>Order Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--gray)' }}>We couldn't locate this order code in your account logs.</p>
        <Link to="/profile" className="btn btn-primary btn-sm">Go to My Orders</Link>
      </div>
    );
  }

  // Map order status to integer steps
  // 1: Pending, 2: Packaging, 3: In Transit, 4: Delivered
  const getStepIndex = (status) => {
    switch (status) {
      case 'Pending': return 1;
      case 'Packaging': return 2;
      case 'In Transit': return 3;
      case 'Delivered': return 4;
      default: return 1;
    }
  };

  const currentStep = getStepIndex(order.status);
  const steps = [
    { label: 'Order Confirmed', icon: <Clock size={20} />, desc: 'Awaiting supplier allocation' },
    { label: 'Packaging Materials', icon: <PackageCheck size={20} />, desc: 'Loading products onto cargo truck' },
    { label: 'In Transit', icon: <Truck size={20} />, desc: 'Delivery vehicle en route to site' },
    { label: 'Delivered', icon: <ShieldCheck size={20} />, desc: 'Receipt signed on-site' }
  ];

  return (
    <div className="tracking-page animate-fade">
      {/* Back to Profile */}
      <Link to="/profile" className="back-link">
        <ArrowLeft size={16} />
        <span>Go to Order History</span>
      </Link>

      <div className="tracking-wrapper">
        
        {/* Top Header Card */}
        <div className="tracking-header-card">
          <div>
            <span className="order-id-badge">Order ID: BM-{order.id.toString().padStart(6, '0')}</span>
            <h1>Delivery Tracking status</h1>
            <p>Placing Date: {new Date(order.created_at).toLocaleString()}</p>
          </div>

          <a 
            href={`/api/invoices/${order.id}`}
            download
            className="btn btn-outline download-invoice-btn"
            style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
          >
            <FileText size={16} />
            <span>Download PDF Invoice</span>
          </a>
        </div>

        {/* Stepper Graphic */}
        <div className="stepper-container">
          <div className="stepper-progress-bar">
            <div 
              className="progress-line"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="stepper-nodes">
            {steps.map((step, idx) => {
              const stepNum = idx + 1;
              const isActive = stepNum <= currentStep;
              const isCurrent = stepNum === currentStep;

              return (
                <div key={idx} className={`step-node ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="step-icon-circle">
                    {step.icon}
                  </div>
                  <div className="step-text-meta">
                    <h4>{step.label}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order details description summary */}
        <div className="tracking-details-grid">
          
          {/* Shipping addresses */}
          <div className="details-card">
            <h3>Site Delivery Information</h3>
            <ul className="details-list">
              <li>
                <span className="details-label">Delivery Address:</span>
                <span className="details-value">{order.shipping_address}</span>
              </li>
              <li>
                <span className="details-label">Site Contact Phone:</span>
                <span className="details-value">{order.phone}</span>
              </li>
              <li>
                <span className="details-label">Fulfillment Status:</span>
                <span className="details-value font-bold text-primary">{order.status}</span>
              </li>
            </ul>
          </div>

          {/* Payment breakdown */}
          <div className="details-card">
            <h3>Fulfillment & Billing Details</h3>
            <ul className="details-list">
              <li>
                <span className="details-label">Payment Method:</span>
                <span className="details-value text-uppercase">{order.payment_method}</span>
              </li>
              <li>
                <span className="details-label">Invoice Grand Total:</span>
                <span className="details-value font-bold">INR {parseFloat(order.total_amount).toFixed(2)}</span>
              </li>
              <li>
                <span className="details-label">Delivery Partner:</span>
                <span className="details-value">BuildMart Heavy Cargo Logistics</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <style>{`
        .tracking-wrapper {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .tracking-header-card {
          padding: 2rem;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .order-id-badge {
          background-color: var(--secondary-light);
          color: var(--secondary);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        .tracking-header-card h1 {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }
        .tracking-header-card p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .stepper-container {
          padding: 4rem 3rem;
          position: relative;
          max-width: 950px;
          margin: 0 auto;
        }
        .stepper-progress-bar {
          position: absolute;
          top: 80px; /* Aligns with circle center */
          left: 60px;
          right: 60px;
          height: 4px;
          background-color: var(--border-color);
          z-index: 1;
        }
        .progress-line {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width var(--transition-slow);
        }
        .stepper-nodes {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
        }
        .step-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 120px;
          text-align: center;
        }
        .step-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-white);
          border: 3px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light-gray);
          margin-bottom: 1rem;
          transition: all var(--transition-normal);
        }
        .step-node.active .step-icon-circle {
          border-color: var(--primary);
          background-color: var(--primary);
          color: var(--bg-white);
          box-shadow: 0 4px 10px rgba(245, 106, 0, 0.25);
        }
        .step-node.current .step-icon-circle {
          border-color: var(--primary);
          background-color: var(--bg-white);
          color: var(--primary);
          animation: pulseBorder 1.5s infinite;
        }
        @keyframes pulseBorder {
          0% { box-shadow: 0 0 0 0 rgba(245, 106, 0, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(245, 106, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 106, 0, 0); }
        }
        .step-text-meta h4 {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--light-gray);
          margin-bottom: 0.25rem;
          transition: var(--transition-fast);
        }
        .step-node.active .step-text-meta h4 {
          color: var(--dark);
        }
        .step-text-meta p {
          font-size: 0.7rem;
          color: var(--gray);
          line-height: 1.3;
        }

        .tracking-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 2.5rem;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-color);
        }
        .details-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }
        .details-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .details-list li {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .details-label {
          color: var(--gray);
          font-weight: 500;
        }
        .details-value {
          color: var(--dark);
          max-width: 250px;
          text-align: right;
        }
        .text-primary { color: var(--primary); }
        .font-bold { font-weight: 700; }
        .text-uppercase { text-transform: uppercase; }

        @media (max-width: 768px) {
          .tracking-header-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .stepper-container {
            padding: 3rem 1rem;
          }
          .stepper-progress-bar {
            display: none;
          }
          .stepper-nodes {
            flex-direction: column;
            gap: 2rem;
          }
          .step-node {
            flex-direction: row;
            width: 100%;
            text-align: left;
            gap: 1.25rem;
          }
          .step-icon-circle {
            margin-bottom: 0;
          }
          .tracking-details-grid {
            grid-template-columns: 1fr;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
