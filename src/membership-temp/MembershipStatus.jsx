
import { useState } from "react";
import { Link } from "react-router-dom";
import "./membership.css";

function MembershipStatus() {
  const [applicationId, setApplicationId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!applicationId.trim()) {
      return;
    }

    setSearched(true);
  };

  return (
    <div className="membership-page membership-status-page">

      {/* HERO SECTION */}
      <section className="membership-hero">
        <div className="membership-hero-content">
          <span className="membership-eyebrow">
            AGCS HALDIA ALUMNI ASSOCIATION
          </span>

          <h1>
            Track Your
            <span>Application.</span>
          </h1>

          <p>
            Stay updated on your alumni membership application.
            Enter your application reference number to check its status.
          </p>

          <div className="membership-hero-meta">
            <span>MEMBERSHIP TRACKING</span>
            <span className="membership-meta-divider">✦</span>
            <span>ALUMNI ASSOCIATION</span>
          </div>
        </div>
      </section>

      {/* STATUS SEARCH */}
      <main className="membership-status-container">

        <div className="membership-status-heading">
          <span className="membership-section-kicker">
            APPLICATION TRACKER
          </span>

          <h2>Check Your Status</h2>

          <p>
            Enter the reference number provided after submitting
            your membership application.
          </p>
        </div>

        <div className="membership-status-card">

          <div className="membership-status-icon">
            <span>⌕</span>
          </div>

          <h3>Find Your Application</h3>

          <p>
            Your application reference number helps us identify
            your membership request.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="membership-field">
              <label htmlFor="applicationId">
                Application Reference Number
              </label>

              <input
                id="applicationId"
                type="text"
                placeholder="Example: AGCS-2026-0001"
                value={applicationId}
                onChange={(e) => {
                  setApplicationId(e.target.value);
                  setSearched(false);
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="membership-primary-button"
            >
              Check Application Status
              <span>→</span>
            </button>
          </form>

          {searched && (
            <div className="membership-status-message">
              <strong>Online tracking is not connected yet.</strong>
              <p>
                Your reference number has been entered, but application
                records are not yet connected to the website. Please
                contact the Alumni Association for an update.
              </p>
            </div>
          )}

        </div>

        {/* STATUS GUIDE */}
        <section className="membership-status-guide">
          <span className="membership-section-kicker">
            UNDERSTANDING YOUR APPLICATION
          </span>

          <h2>Application Process</h2>

          <div className="membership-status-steps">

            <div className="membership-status-step">
              <span>01</span>
              <div>
                <h3>Submitted</h3>
                <p>
                  Your membership application has been received.
                </p>
              </div>
            </div>

            <div className="membership-status-step">
              <span>02</span>
              <div>
                <h3>Under Verification</h3>
                <p>
                  The Alumni Association is reviewing your details.
                </p>
              </div>
            </div>

            <div className="membership-status-step">
              <span>03</span>
              <div>
                <h3>Approved</h3>
                <p>
                  Your application has been approved. You can proceed
                  with the membership fee payment.
                </p>
              </div>
            </div>

            <div className="membership-status-step">
              <span>04</span>
              <div>
                <h3>Membership Confirmed</h3>
                <p>
                  Your payment has been verified and your membership
                  is confirmed.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER LINK */}
        <div className="membership-status-footer">
          <p>Haven't applied for membership yet?</p>

          <Link
            to="/membership"
            className="membership-status-link"
          >
            Apply for Membership →
          </Link>
        </div>

      </main>
    </div>
  );
}

export default MembershipStatus;
