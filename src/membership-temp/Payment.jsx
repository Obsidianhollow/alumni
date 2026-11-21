
import { useState } from "react";
import { Link } from "react-router-dom";
import "./membership.css";

function Payment() {
  const [applicationId, setApplicationId] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!applicationId.trim()) {
      setMessage("Please enter your application reference number.");
      return;
    }

    if (!checked) {
      setMessage("Please confirm that your application has been approved.");
      return;
    }

    setMessage(
      "Payment verification is not connected yet. Please contact the Alumni Association before making any payment."
    );
  };

  return (
    <div className="membership-page membership-payment-page">

      {/* HERO SECTION */}
      <section className="membership-hero">
        <div className="membership-hero-content">
          <span className="membership-eyebrow">
            AGCS HALDIA ALUMNI ASSOCIATION
          </span>

          <h1>
            Complete Your
            <span>Membership.</span>
          </h1>

          <p>
            Your next step towards becoming a member of the
            AGCS Haldia Alumni Association.
          </p>

          <div className="membership-hero-meta">
            <span>MEMBERSHIP PAYMENT</span>
            <span className="membership-meta-divider">✦</span>
            <span>₹500 REGISTRATION FEE</span>
          </div>
        </div>

        <div className="membership-fee-card">
          <span>MEMBERSHIP FEE</span>
          <strong>₹500</strong>
          <small>Rupees Five Hundred Only</small>
          <div className="fee-card-line"></div>
          <p>Pay only after your application has been approved.</p>
        </div>
      </section>

      {/* PAYMENT CONTENT */}
      <main className="membership-payment-container">

        <div className="membership-payment-heading">
          <span className="membership-section-kicker">
            PAYMENT PORTAL
          </span>

          <h2>Membership Payment</h2>

          <p>
            Enter your application details to proceed with the
            membership payment process.
          </p>
        </div>

        {/* PAYMENT NOTICE */}
        <div className="membership-payment-alert">
          <div className="membership-note-icon">!</div>

          <div>
            <strong>Important Payment Instructions</strong>
            <p>
              Payment should only be made after receiving approval
              from the Alumni Association. Applications under review
              are not eligible for payment.
            </p>
          </div>
        </div>

        {/* PAYMENT CARD */}
        <div className="membership-payment-main-card">

          <div className="membership-payment-card-header">
            <span>01 / APPLICATION DETAILS</span>
            <span className="membership-payment-status-badge">
              Approval Required
            </span>
          </div>

          <h3>Verify Your Application</h3>

          <p>
            Enter the reference number you received after submitting
            your membership registration form.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="membership-field">
              <label htmlFor="paymentApplicationId">
                Application Reference Number
              </label>

              <input
                id="paymentApplicationId"
                type="text"
                placeholder="Example: AGCS-2026-0001"
                value={applicationId}
                onChange={(e) => {
                  setApplicationId(e.target.value);
                  setMessage("");
                }}
                required
              />
            </div>

            <label className="membership-payment-confirmation">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                  setMessage("");
                }}
              />

              <span>
                I confirm that I have received approval from the
                Alumni Association to proceed with payment.
              </span>
            </label>

            <button
              type="submit"
              className="membership-primary-button"
            >
              Verify Application
              <span>→</span>
            </button>

          </form>

          {message && (
            <div className="membership-payment-message" role="alert">
              {message}
            </div>
          )}

          <div className="membership-payment-disabled-note">
            <span>🔒</span>
            <p>
              Online payment is currently unavailable. The payment
              gateway will be enabled after backend and payment
              verification integration.
            </p>
          </div>

        </div>

        {/* FEE BREAKDOWN */}
        <section className="membership-payment-breakdown">

          <span className="membership-section-kicker">
            PAYMENT SUMMARY
          </span>

          <h2>Fee Details</h2>

          <div className="membership-payment-breakdown-card">
            <div>
              <span>Alumni Membership Registration</span>
              <small>One-time registration fee</small>
            </div>

            <strong>₹500.00</strong>
          </div>

          <div className="membership-payment-total">
            <span>Total Payable</span>
            <strong>₹500</strong>
          </div>

        </section>

        {/* HELP SECTION */}
        <section className="membership-payment-help">
          <div>
            <span className="membership-section-kicker">
              NEED ASSISTANCE?
            </span>

            <h3>We're Here to Help.</h3>

            <p>
              If your application has been approved but you are unable
              to proceed with payment, contact the Alumni Association
              for assistance.
            </p>

            <a href="mailto:agalumni.hld@agschools.edu.in">
              agalumni.hld@agschools.edu.in
            </a>
          </div>

          <div className="membership-payment-help-icon">
            ?
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="membership-payment-footer">
          <Link to="/membership/status">
            ← Check Application Status
          </Link>

          <Link to="/membership">
            Membership Registration
          </Link>
        </div>

      </main>
    </div>
  );
}

export default Payment;
