
import { useState } from "react";
import { Link } from "react-router-dom";
import "./membership.css";

// =========================================
// INITIAL FORM DATA
// =========================================

const initialForm = {
  fullName: "",
  schoolName: "",
  passingYear: "",
  classStream: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  address: "",
  cityCountry: "",
  profession: "",
  organization: "",
  contributions: [],
  participate: "",
  communication: "",
  place: "",
  declarationDate: "",
  declaration: false,
};

const contributionOptions = [
  "Mentoring",
  "Career Guidance",
  "Placement Support",
  "Academic Support",
  "Events",
  "School Development",
  "Other",
];

// =========================================
// MEMBERSHIP COMPONENT
// =========================================

function Membership() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [otherContribution, setOtherContribution] = useState("");

  // =========================================
  // HANDLE INPUT CHANGES
  // =========================================

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================================
  // HANDLE CONTRIBUTION OPTIONS
  // =========================================

  const handleContribution = (option) => {
    setForm((previous) => ({
      ...previous,
      contributions: previous.contributions.includes(option)
        ? previous.contributions.filter((item) => item !== option)
        : [...previous.contributions, option],
    }));
  };

  // =========================================
  // HANDLE FORM SUBMISSION
  // =========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.declaration) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    const applicationData = {
      ...form,
      otherContribution: form.contributions.includes("Other")
        ? otherContribution
        : "",
      registrationFee: 1000,
      paymentStatus: "Not Paid",
      applicationStatus: "Submitted",
    };

    // Frontend demonstration only.
    // Actual saving will be enabled after backend integration.

    console.log("Membership Application:", applicationData);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================
  // RESET FORM
  // =========================================

  const resetForm = () => {
    setForm(initialForm);
    setOtherContribution("");
    setSubmitted(false);
  };

  // =========================================
  // SUCCESS SCREEN
  // =========================================

  if (submitted) {
    return (
      <section className="membership-page">
        <div className="membership-success-card">

          <div className="membership-success-icon">
            ✓
          </div>

          <span className="membership-eyebrow">
            AGCS HALDIA ALUMNI ASSOCIATION
          </span>

          <h1>Thank You for Registering!</h1>

          <p>
            Your form has been completed successfully in this
            frontend demonstration. Actual submission and
            reference number generation will be enabled after
            backend integration.
          </p>

          <div className="membership-success-info">
            <span>Membership Registration Fee</span>

            <strong>₹1,000</strong>

            <small>
              Payment will be available only after administrator
              verification and approval.
            </small>
          </div>

          <button
            type="button"
            className="membership-primary-button"
            onClick={resetForm}
          >
            Back to Registration
          </button>

          <Link
            to="/"
            className="membership-back-link"
          >
            Return to Homepage
          </Link>

        </div>
      </section>
    );
  }

  // =========================================
  // MAIN REGISTRATION PAGE
  // =========================================

  return (
    <section className="membership-page">

      {/* =====================================
          PAGE INTRO / HERO
      ===================================== */}

      <div className="membership-hero">

        <div className="membership-hero-content">

          <span className="membership-eyebrow">
            ALUMNI ASSOCIATION OF AGCS HALDIA
          </span>

          <h1>
            Become a Part of
            <span> Our Legacy.</span>
          </h1>

          <p>
            Reconnect with your roots, strengthen lifelong
            relationships and contribute towards the future
            of our school community.
          </p>

          <div className="membership-hero-meta">
            <span>
              ALUMNI MEMBERSHIP REGISTRATION FORM
            </span>

            <span className="membership-meta-divider">
              /
            </span>

            <span>2026</span>
          </div>

        </div>

        {/* REGISTRATION FEE CARD */}

        <div className="membership-fee-card">

          <span>REGISTRATION FEE</span>

          <strong>₹1,000</strong>

          <small>For all applicants</small>

          <div className="fee-card-line" />

          <p>Pay only after admin approval</p>

        </div>

      </div>

      {/* =====================================
          REGISTRATION FORM CONTAINER
      ===================================== */}

      <div className="membership-form-container">

        {/* FORM HEADING */}

        <div className="membership-form-heading">

          <div>

            <span className="membership-section-kicker">
              YOUR JOURNEY CONTINUES
            </span>

            <h2>Membership Registration</h2>

            <p>
              Please provide accurate information in all
              required fields.
            </p>

          </div>

          <div className="membership-form-number">
            <span>FORM</span>
            <strong>01 / 04</strong>
          </div>

        </div>

        <form onSubmit={handleSubmit}>

          {/* =================================
              01 - PERSONAL INFORMATION
          ================================= */}

          <div className="membership-form-section">

            <div className="membership-section-heading">

              <span className="membership-section-number">
                01
              </span>

              <div>
                <h3>Personal Information</h3>
                <p>Tell us a little about yourself.</p>
              </div>

            </div>

            <div className="membership-grid">

              {/* FULL NAME */}

              <div className="membership-field">

                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />

              </div>

              {/* NAME DURING SCHOOLING */}

              <div className="membership-field">

                <label htmlFor="schoolName">
                  Name at the Time of Schooling
                </label>

                <input
                  id="schoolName"
                  name="schoolName"
                  value={form.schoolName}
                  onChange={handleChange}
                  placeholder="If different from current name"
                />

              </div>

              {/* YEAR OF PASSING */}

              <div className="membership-field">

                <label htmlFor="passingYear">
                  Year of Passing / Batch <span>*</span>
                </label>

                <input
                  id="passingYear"
                  name="passingYear"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={form.passingYear}
                  onChange={handleChange}
                  placeholder="e.g. 2023"
                  required
                />

              </div>

              {/* CLASS / STREAM */}

              <div className="membership-field">

                <label htmlFor="classStream">
                  Class / Stream <span>*</span>
                </label>

                <input
                  id="classStream"
                  name="classStream"
                  value={form.classStream}
                  onChange={handleChange}
                  placeholder="Enter class or stream"
                  required
                />

              </div>

              {/* DATE OF BIRTH */}

              <div className="membership-field">

                <label htmlFor="dob">
                  Date of Birth <span>*</span>
                </label>

                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* GENDER */}

              <div className="membership-field">

                <label>
                  Gender <span>*</span>
                </label>

                <div className="membership-radio-group">

                  {[
                    "Male",
                    "Female",
                    "Other / Prefer not to say",
                  ].map((option) => (

                    <label
                      key={option}
                      className="membership-choice"
                    >

                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={form.gender === option}
                        onChange={handleChange}
                        required
                      />

                      <span>{option}</span>

                    </label>

                  ))}

                </div>

              </div>

              {/* MOBILE NUMBER */}

              <div className="membership-field">

                <label htmlFor="mobile">
                  Mobile Number <span>*</span>
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  autoComplete="tel"
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="membership-field">

                <label htmlFor="email">
                  Email ID <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  autoComplete="email"
                  required
                />

              </div>

              {/* CURRENT ADDRESS */}

              <div className="membership-field membership-field-full">

                <label htmlFor="address">
                  Current Address <span>*</span>
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your complete current address"
                  rows="3"
                  autoComplete="street-address"
                  required
                />

              </div>

              {/* CITY / COUNTRY */}

              <div className="membership-field">

                <label htmlFor="cityCountry">
                  Present City / Country <span>*</span>
                </label>

                <input
                  id="cityCountry"
                  name="cityCountry"
                  value={form.cityCountry}
                  onChange={handleChange}
                  placeholder="e.g. Kolkata, India"
                  required
                />

              </div>

              {/* PROFESSION */}

              <div className="membership-field">

                <label htmlFor="profession">
                  Current Profession / Designation
                </label>

                <input
                  id="profession"
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  placeholder="Your current profession"
                />

              </div>

              {/* ORGANIZATION */}

              <div className="membership-field membership-field-full">

                <label htmlFor="organization">
                  Organization / Institution
                </label>

                <input
                  id="organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Enter organization or institution"
                />

              </div>

            </div>

          </div>

          {/* =================================
              02 - ALUMNI ENGAGEMENT
          ================================= */}

          <div className="membership-form-section">

            <div className="membership-section-heading">

              <span className="membership-section-number">
                02
              </span>

              <div>
                <h3>Alumni Engagement</h3>

                <p>
                  Share how you would like to contribute
                  to our alumni community.
                </p>
              </div>

            </div>

            {/* CONTRIBUTION AREAS */}

            <div className="membership-field">

              <label>
                Area(s) in which you would like to contribute
              </label>

              <div className="membership-checkbox-grid">

                {contributionOptions.map((option) => (

                  <label
                    key={option}
                    className={`membership-check-card ${
                      form.contributions.includes(option)
                        ? "selected"
                        : ""
                    }`}
                  >

                    <input
                      type="checkbox"
                      checked={form.contributions.includes(option)}
                      onChange={() => handleContribution(option)}
                    />

                    <span className="membership-custom-check">
                      ✓
                    </span>

                    <span>{option}</span>

                  </label>

                ))}

              </div>

              {/* OTHER CONTRIBUTION */}

              {form.contributions.includes("Other") && (

                <input
                  className="membership-other-input"
                  value={otherContribution}
                  onChange={(event) =>
                    setOtherContribution(event.target.value)
                  }
                  placeholder="Please specify other contribution area"
                  aria-label="Other contribution area"
                />

              )}

            </div>

            <div className="membership-grid membership-engagement-grid">

              {/* PARTICIPATION */}

              <div className="membership-field">

                <label>
                  Would you like to participate in Alumni
                  Association activities? <span>*</span>
                </label>

                <div className="membership-radio-group">

                  {["Yes", "No"].map((option) => (

                    <label
                      key={option}
                      className="membership-choice"
                    >

                      <input
                        type="radio"
                        name="participate"
                        value={option}
                        checked={form.participate === option}
                        onChange={handleChange}
                        required
                      />

                      <span>{option}</span>

                    </label>

                  ))}

                </div>

              </div>

              {/* COMMUNICATION */}

              <div className="membership-field">

                <label>
                  Preferred Mode of Communication <span>*</span>
                </label>

                <div className="membership-radio-group">

                  {["WhatsApp", "Email", "Phone"].map((option) => (

                    <label
                      key={option}
                      className="membership-choice"
                    >

                      <input
                        type="radio"
                        name="communication"
                        value={option}
                        checked={form.communication === option}
                        onChange={handleChange}
                        required
                      />

                      <span>{option}</span>

                    </label>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* =================================
              03 - MEMBERSHIP FEE
          ================================= */}

          <div className="membership-form-section">

            <div className="membership-section-heading">

              <span className="membership-section-number">
                03
              </span>

              <div>
                <h3>Membership Fee</h3>
                <p>Registration fee and payment information.</p>
              </div>

            </div>

            <div className="membership-payment-summary">

              <div>
                <span>Membership Registration Fee</span>
                <small>Rupees One Thousand Only</small>
              </div>

              <strong>₹1,000/-</strong>

            </div>

            <div className="membership-payment-note">

              <span className="membership-note-icon">
                i
              </span>

              <p>
                Payment is not required at this stage. Your
                application will first be reviewed by the
                Alumni Association. Payment instructions will
                be made available only after approval.
              </p>

            </div>

          </div>

          {/* =================================
              04 - DECLARATION
          ================================= */}

          <div className="membership-form-section">

            <div className="membership-section-heading">

              <span className="membership-section-number">
                04
              </span>

              <div>
                <h3>Declaration</h3>
                <p>Please read and accept the declaration.</p>
              </div>

            </div>

            {/* DECLARATION TEXT */}

            <div className="membership-declaration">

              I hereby declare that the information provided
              in this registration form is true and correct
              to the best of my knowledge. I agree to abide
              by the rules, objectives and guidelines of the
              AGCS Haldia Alumni Association. I consent to the
              use of the information provided above for
              official alumni communication and
              association-related activities.

            </div>

            {/* DECLARATION ACCEPTANCE */}

            <label className="membership-declaration-check">

              <input
                type="checkbox"
                name="declaration"
                checked={form.declaration}
                onChange={handleChange}
                required
              />

              <span>
                I have read and agree to the above declaration.
                <strong> *</strong>
              </span>

            </label>

            {/* PLACE, DATE AND SIGNATURE */}

            <div className="membership-grid membership-signature-grid">

              {/* PLACE */}

              <div className="membership-field">

                <label htmlFor="place">
                  Place <span>*</span>
                </label>

                <input
                  id="place"
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                  placeholder="Enter place"
                  required
                />

              </div>

              {/* DECLARATION DATE */}

              <div className="membership-field">

                <label htmlFor="declarationDate">
                  Date <span>*</span>
                </label>

                <input
                  id="declarationDate"
                  name="declarationDate"
                  type="date"
                  value={form.declarationDate}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* APPLICANT SIGNATURE */}

              <div className="membership-field membership-field-full">

                <label htmlFor="applicantSignature">
                  Applicant Signature
                </label>

                <input
                  id="applicantSignature"
                  value={form.fullName}
                  readOnly
                  placeholder="Your full name will represent your typed signature"
                  aria-label="Applicant typed signature"
                />

                <small>
                  Your typed name will be used as the applicant
                  signature in this online form.
                </small>

              </div>

            </div>

          </div>

          {/* =================================
              SUBMIT APPLICATION
          ================================= */}

          <div className="membership-submit-area">

            <p>
              Fields marked with <strong>*</strong> are required.
            </p>

            <button
              type="submit"
              className="membership-primary-button"
            >
              Submit Application <span>↗</span>
            </button>

            <small>
              No payment is collected during registration.
            </small>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Membership;
