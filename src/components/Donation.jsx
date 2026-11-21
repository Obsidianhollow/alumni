
import React from "react";
import "../css/Donation.css";

const createSampleQR = () => {
  const size = 25;

  const isFinderPattern = (row, col, startRow, startCol) => {
    const r = row - startRow;
    const c = col - startCol;

    if (r < 0 || r > 6 || c < 0 || c > 6) return null;

    return (
      r === 0 ||
      r === 6 ||
      c === 0 ||
      c === 6 ||
      (r >= 2 && r <= 4 && c >= 2 && c <= 4)
    );
  };

  return Array.from({ length: size * size }, (_, index) => {
    const row = Math.floor(index / size);
    const col = index % size;

    const patterns = [
      isFinderPattern(row, col, 0, 0),
      isFinderPattern(row, col, 0, 18),
      isFinderPattern(row, col, 18, 0),
    ];

    const finder = patterns.find((pattern) => pattern !== null);

    return finder !== undefined
      ? finder
      : ((row * 17 + col * 13 + row * col * 7) % 11) < 5;
  });
};

const sampleQR = createSampleQR();

function Donation() {
  return (
    <section className="donation-section" id="donation">
      <div className="donation-container">

        {/* SECTION HEADING */}
        <div className="donation-heading">
          <span className="donation-eyebrow">
            SUPPORT OUR SCHOOL
          </span>

          <h2 className="donation-title">
  Give Back.{" "}
  <span style={{ color: "#B31F35" }}>
    Make a Difference.
  </span>
</h2>

          <p>
            Your contribution helps us preserve our school's legacy
            and support the alumni community for generations to come.
          </p>
        </div>

        {/* DONATION CONTENT */}
        <div className="donation-content">

          {/* BANK DETAILS */}
          <div className="donation-bank-card">

            <div className="donation-card-heading">
              <div className="donation-icon">
                <i className="fas fa-university"></i>
              </div>

              <div>
                <span>DONATION THROUGH BANK</span>
                <h3>Bank Account Details</h3>
              </div>
            </div>

            <div className="donation-account-name">
              ALUMNI ASSOCIATION OF ASSEMBLY OF GOD CHURCH
            </div>

            <div className="donation-detail-list">

              <div className="donation-detail">
                <span>Bank Name</span>
                <strong>Canara Bank</strong>
              </div>

              <div className="donation-detail">
                <span>Branch</span>
                <strong>
                  Tripathi Complex, Sukanta Nagar, City Centre
                </strong>
              </div>

              <div className="donation-detail">
                <span>Account Number</span>
                <strong>110025358373</strong>
              </div>

              <div className="donation-detail">
                <span>IFSC Code</span>
                <strong>CNRB0002938</strong>
              </div>

              <div className="donation-detail">
                <span>MICR Code</span>
                <strong>721015002</strong>
              </div>

            </div>

            <div className="donation-bank-footer">
              Please verify the account details before making a donation.
            </div>
          </div>

          {/* QR CODE */}
          <div className="donation-qr-card">

            <div className="donation-qr-heading">
              <span>QUICK & EASY</span>

              <h3>Scan & Donate</h3>

              <p>
                Use your preferred UPI application to scan the
                authorised donation QR code.
              </p>
            </div>

            <div className="donation-qr-wrapper">
              <div className="donation-qr-grid">

                {sampleQR.map((filled, index) => (
                  <span
                    key={index}
                    className={filled ? "qr-dark" : "qr-light"}
                  />
                ))}

                <div className="donation-qr-stamp">
                  SAMPLE
                </div>

              </div>
            </div>

            <div className="donation-sample-warning">
              SAMPLE QR — NOT FOR PAYMENT
            </div>

            <p className="donation-qr-caption">
              Replace this sample with the official, verified
              association donation QR code before publishing.
            </p>

          </div>
        </div>

        {/* IMPORTANT NOTICE */}
        <div className="donation-notice">

          <div className="donation-notice-icon">
            <i className="fas fa-exclamation-circle"></i>
          </div>

          <div>
            <h4>Important Notice</h4>

            <p>
              This QR code and bank account are strictly for donations
              to the Alumni Association. Payments made for any other
              purpose will not be accepted. The school will not be
              responsible for such payments.
            </p>
          </div>

        </div>

        {/* CONTACT */}
        <div className="donation-contact">
          <span>Need assistance regarding donations?</span>

          <a href="mailto:agalumni.hld@agschools.edu.in">
            agalumni.hld@agschools.edu.in
          </a>
        </div>

      </div>
    </section>
  );
}

export default Donation;
