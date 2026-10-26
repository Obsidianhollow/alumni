import React from "react";
import "../css/CoreCommittee.css";

const committeeMembers = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "President",
    department: "Alumni Association",
    image: "/images/committee/member-01.jpg",
  },
  {
    name: "Prof. Ananya Sen",
    designation: "Vice President",
    department: "Alumni Association",
    image: "/images/committee/member-02.jpg",
  },
  {
    name: "Mr. Arindam Roy",
    designation: "General Secretary",
    department: "Alumni Association",
    image: "/images/committee/member-03.jpg",
  },
  {
    name: "Ms. Sneha Das",
    designation: "Joint Secretary",
    department: "Alumni Association",
    image: "/images/committee/member-04.jpg",
  },
  {
    name: "Mr. Abhishek Sharma",
    designation: "Treasurer",
    department: "Alumni Association",
    image: "/images/committee/member-05.jpg",
  },
  {
    name: "Dr. Priya Mukherjee",
    designation: "Executive Member",
    department: "Alumni Association",
    image: "/images/committee/member-06.jpg",
  },
];

function CoreCommittee() {
  return (
    <div className="committee-page">

      {/* HERO */}
      <section className="committee-hero">
        <div className="committee-hero-content">
          <span className="committee-eyebrow">
            ALUMNI ASSOCIATION
          </span>

          <h1>
            Core Committee
          </h1>

          <p>
            Meet the dedicated leaders working together to strengthen
            our alumni community and build meaningful connections
            between graduates, students and the institution.
          </p>
        </div>

        <div className="committee-hero-shape shape-one"></div>
        <div className="committee-hero-shape shape-two"></div>
      </section>

      {/* INTRO */}
      <section className="committee-intro">
        <div className="committee-intro-label">
          <span></span>
          OUR LEADERSHIP
        </div>

        <div className="committee-intro-grid">
          <h2>
            Leadership with purpose.
          </h2>

          <p>
            The Core Committee provides strategic direction to the
            Alumni Association and works towards creating opportunities
            for engagement, collaboration and lifelong connections
            among our alumni.
          </p>
        </div>
      </section>

      {/* COMMITTEE */}
      <section className="committee-section">

        <div className="committee-section-heading">
          <div>
            <span className="section-kicker">
              CORE COMMITTEE
            </span>

            <h2>
              Meet the team
            </h2>
          </div>

          <p>
            A committed group of professionals and representatives
            guiding the association forward.
          </p>
        </div>

        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <article
              className={`committee-card ${
                index === 0 ? "committee-card-featured" : ""
              }`}
              key={member.name}
            >
              <div className="committee-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                />

                <span className="member-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="committee-card-content">
                <span className="member-designation">
                  {member.designation}
                </span>

                <h3>{member.name}</h3>

                <p>{member.department}</p>

                <div className="member-line"></div>

                <span className="member-role">
                  Core Committee Member
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="committee-responsibility">

        <div className="responsibility-content">
          <span className="section-kicker">
            OUR RESPONSIBILITY
          </span>

          <h2>
            Building a stronger alumni network.
          </h2>

          <p>
            Through collaboration, mentorship, events and community
            initiatives, the committee works to create a lasting
            relationship between the institution and its alumni.
          </p>
        </div>

        <div className="responsibility-stats">
          <div>
            <strong>01</strong>
            <span>Leadership</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Engagement</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Community</span>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="committee-cta">
        <div>
          <span className="section-kicker">
            STAY CONNECTED
          </span>

          <h2>
            Be part of our alumni community.
          </h2>

          <p>
            Connect, contribute and grow with a network that continues
            beyond graduation.
          </p>
        </div>

        <button>
          Connect With Us
          <span>↗</span>
        </button>
      </section>

    </div>
  );
}

export default CoreCommittee;