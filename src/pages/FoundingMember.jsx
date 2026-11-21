
import React from "react";
import { Link } from "react-router-dom";
import "../css/FoundingMember.css";

// =========================================
// FOUNDING MEMBERS DATA
// =========================================

const foundingMembers = [
  {
    name: "Mr. Sankhasubha Roy",
    designation: "President (Ex-Officio)",
    department: "Alumni Association",
    image: "/images/committee/member-01.jpg",
    featured: true,
  },
  {
    name: "Dr. Santanu Maity",
    designation: "Secretary",
    department: "Alumni Association",
    image: "/images/committee/member-02.jpg",
  },
  {
    name: "Mr. Saurav Samanta",
    designation: "Founding Member",
    department: "Alumni Association",
    image: "/images/committee/member-03.jpg",
  },
  {
    name: "Mrs. Payel Panda Pandit",
    designation: "Founding Member",
    department: "Alumni Association",
    image: "/images/committee/member-04.jpg",
  },
  {
    name: "Mr. Sayantan Pandit",
    designation: "Founding Member",
    department: "Alumni Association",
    image: "/images/committee/member-05.jpg",
  },
];

// =========================================
// FOUNDING MEMBER PAGE
// =========================================

function FoundingMember() {
  return (
    <main className="founders-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="founders-hero">
        <div className="founders-hero-inner">

          <div className="founders-hero-copy">
            <span className="founders-eyebrow">
              ASSEMBLY OF GOD CHURCH SCHOOL
            </span>

            <h1>
              The People
              <br />
              Behind Our
              <br />
              <span>Legacy.</span>
            </h1>

            <p>
              Honouring the individuals whose vision,
              commitment and dedication laid the
              foundation of our Alumni Association.
            </p>

            <div className="founders-hero-bottom">
              <span className="founders-hero-line"></span>
              <span>OUR FOUNDING MEMBERS</span>
            </div>
          </div>

          <div className="founders-hero-art" aria-hidden="true">
            <div className="founders-art-circle founders-art-circle-one"></div>
            <div className="founders-art-circle founders-art-circle-two"></div>

            <div className="founders-art-letter">
              F
            </div>

            <div className="founders-art-caption">
              <span>ESTABLISHED ON</span>
              <strong>VISION & UNITY</strong>
            </div>
          </div>

          <div className="founders-hero-index">
            <span>01</span>
            <span className="founders-index-divider"></span>
            <span>FOUNDATION</span>
          </div>

        </div>
      </section>

      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="founders-intro">
        <div className="founders-intro-inner">

          <div className="founders-intro-label">
            <span className="founders-small-line"></span>
            A NOTE OF GRATITUDE
          </div>

          <div className="founders-intro-content">

            <h2>
              Every great community
              <br />
              begins with a <em>vision.</em>
            </h2>

            <div className="founders-intro-description">
              <p>
                The Alumni Association stands on the
                foundation of people who believed in
                bringing generations of students together.
              </p>

              <p>
                Through their initiative, leadership and
                continued commitment, they helped create
                a platform that celebrates shared memories,
                builds meaningful connections and encourages
                alumni to contribute to their institution.
              </p>
            </div>

          </div>

          <div className="founders-intro-bottom">
            <span>VISION</span>
            <span className="founders-intro-dot"></span>
            <span>DEDICATION</span>
            <span className="founders-intro-dot"></span>
            <span>TOGETHERNESS</span>
          </div>

        </div>
      </section>

      {/* =====================================
          MEMBERS SECTION
      ===================================== */}

      <section className="founders-members">

        <div className="founders-members-inner">

          <div className="founders-section-heading">

            <div>
              <span className="founders-section-kicker">
                THE PEOPLE WHO STARTED IT
              </span>

              <h2>
                Meet our
                <br />
                <em>Founders.</em>
              </h2>
            </div>

            <p>
              Recognising the individuals whose efforts
              helped shape the beginning of our alumni
              community.
            </p>

          </div>

          {/* MEMBERS GRID */}

          <div className="founders-grid">

            {foundingMembers.map((member, index) => (

              <article
                className={`founder-card ${
                  member.featured ? "founder-card-featured" : ""
                }`}
                key={member.name}
              >

                <div className="founder-card-image">

                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    loading="lazy"
                  />

                  <span className="founder-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {member.featured && (
                    <span className="founder-featured-label">
                      LEADERSHIP
                    </span>
                  )}

                </div>

                <div className="founder-card-details">

                  <span className="founder-designation">
                    {member.designation}
                  </span>

                  <h3>{member.name}</h3>

                  <p>{member.department}</p>

                  <div className="founder-card-footer">
                    <span>ALUMNI ASSOCIATION</span>
                    <span className="founder-card-arrow">↗</span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================
          LEGACY SECTION
      ===================================== */}

      <section className="founders-legacy">

        <div className="founders-legacy-inner">

          <div className="founders-legacy-copy">
            <span className="founders-section-kicker">
              MORE THAN A BEGINNING
            </span>

            <h2>
              A foundation
              <br />
              that lives on.
            </h2>

            <p>
              Their contribution is not limited to the
              establishment of an association. It lives
              on through every connection made, every
              opportunity shared and every generation
              that remains connected to the school.
            </p>
          </div>

          <div className="founders-legacy-values">

            <div className="founders-value">
              <span>01</span>
              <div>
                <h3>Vision</h3>
                <p>
                  A shared belief in a connected alumni
                  community.
                </p>
              </div>
            </div>

            <div className="founders-value">
              <span>02</span>
              <div>
                <h3>Foundation</h3>
                <p>
                  The initiative that brought our
                  association to life.
                </p>
              </div>
            </div>

            <div className="founders-value">
              <span>03</span>
              <div>
                <h3>Legacy</h3>
                <p>
                  An enduring connection across
                  generations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <section className="founders-cta">
        <div className="founders-cta-inner">

          <div>
            <span className="founders-section-kicker">
              THE STORY CONTINUES
            </span>

            <h2>
              Be a part of
              <br />
              what comes next.
            </h2>

            <p>
              Stay connected with your school, reconnect
              with fellow alumni and help strengthen the
              community for generations to come.
            </p>
          </div>

          <Link
            to="/membership"
            className="founders-cta-link"
          >
            Explore Membership
            <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default FoundingMember;
