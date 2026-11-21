
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../css/CoreCommitteeMembers.css";

// =========================================
// CORE COMMITTEE MEMBERS DATA
// =========================================

const committeeData = [
  {
    id: 1,
    name: "Samual Das",
    role: "President (Ex-Officio)",
    category: "Office Bearers",
    image: "/images/committee/member-01.jpg",
  },
  {
    id: 2,
    name: "Mr. Sankha Subho Roy",
    role: "Founder President (Ex-Principal, AGCS Haldia)",
    category: "Office Bearers",
    image: "/images/committee/member-02.jpg",
  },
  {
    id: 3,
    name: "Dr. Santanu Maity",
    role: "Secretary",
    category: "Office Bearers",
    image: "/images/committee/member-03.jpg",
  },
  {
    id: 4,
    name: "Ria Nandi",
    role: "Joint Secretary",
    category: "Office Bearers",
    image: "/images/committee/member-04.jpg",
  },
  {
    id: 5,
    name: "Pranaydeep Das",
    role: "Joint Secretary",
    category: "Office Bearers",
    image: "/images/committee/member-05.jpg",
  },
  {
    id: 6,
    name: "Mrs. Payel Panda Pandit",
    role: "Convener",
    category: "Office Bearers",
    image: "/images/committee/member-06.jpg",
  },
  {
    id: 7,
    name: "Mrs. Smaranika Bhattacharyya",
    role: "Joint Convener",
    category: "Office Bearers",
    image: "/images/committee/member-07.jpg",
  },
  {
    id: 8,
    name: "Mr. Tanay Saha",
    role: "Treasurer",
    category: "Office Bearers",
    image: "/images/committee/member-08.jpg",
  },
  {
    id: 9,
    name: "Mr. Sayantan Pandit",
    role: "Member",
    category: "Members",
    image: "/images/committee/member-09.jpg",
  },
  {
    id: 10,
    name: "Mrs. Jaya Das",
    role: "Member",
    category: "Members",
    image: "/images/committee/member-10.jpg",
  },
  {
    id: 11,
    name: "Mr. Sudipto Panigrahi",
    role: "Member",
    category: "Members",
    image: "/images/committee/member-11.jpg",
  },
  {
    id: 12,
    name: "Ms. Sanskriti Pattanaik",
    role: "Member",
    category: "Members",
    image: "/images/committee/member-12.jpg",
  },
];

// =========================================
// FILTER OPTIONS
// =========================================

const categories = [
  "All Members",
  "Office Bearers",
  "Members",
];

// =========================================
// CORE COMMITTEE PAGE
// =========================================

function CoreCommitteeMembers() {
  const [activeCategory, setActiveCategory] =
    useState("All Members");

  const [search, setSearch] = useState("");

  // =========================================
  // FILTER AND SEARCH
  // =========================================

  const filteredMembers = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return committeeData.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchValue) ||
        member.role.toLowerCase().includes(searchValue) ||
        member.category.toLowerCase().includes(searchValue);

      const matchesCategory =
        activeCategory === "All Members" ||
        member.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // =========================================
  // RESET FILTERS
  // =========================================

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All Members");
  };

  // =========================================
  // RENDER
  // =========================================

  return (
    <main className="core-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="core-hero">
        <div className="core-hero-inner">

          <div className="core-hero-copy">
            <span className="core-eyebrow">
              ASSEMBLY OF GOD CHURCH SCHOOL
            </span>

            <h1>
              Leadership
              <br />
              With A
              <br />
              <span>Purpose.</span>
            </h1>

            <p>
              Meet the dedicated individuals who guide
              the Alumni Association of Assembly of God
              Church School, Haldia, and work towards
              building a stronger alumni community.
            </p>

            <div className="core-hero-bottom">
              <span className="core-hero-line"></span>
              <span>OUR CORE COMMITTEE</span>
            </div>
          </div>

          <div className="core-hero-art" aria-hidden="true">
            <div className="core-art-circle core-art-circle-one"></div>
            <div className="core-art-circle core-art-circle-two"></div>

            <div className="core-art-letter">
              C
            </div>

            <div className="core-art-caption">
              <span>ONE COMMUNITY</span>
              <strong>SHARED PURPOSE</strong>
            </div>
          </div>

          <div className="core-hero-index">
            <span>02</span>
            <span className="core-index-divider"></span>
            <span>LEADERSHIP</span>
          </div>

        </div>
      </section>

      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="core-intro">
        <div className="core-intro-inner">

          <div className="core-intro-label">
            <span className="core-small-line"></span>
            OUR LEADERSHIP
          </div>

          <div className="core-intro-content">

            <h2>
              Together, we lead.
              <br />
              Together, we <em>grow.</em>
            </h2>

            <div className="core-intro-description">
              <p>
                A strong alumni community is built through
                shared responsibility, collaboration and
                a common vision.
              </p>

              <p>
                The Core Committee brings together
                individuals who contribute their time,
                experience and commitment to guide the
                association, strengthen alumni connections
                and create meaningful opportunities for
                the school community.
              </p>
            </div>

          </div>

          <div className="core-intro-bottom">
            <span>LEADERSHIP</span>
            <span className="core-intro-dot"></span>
            <span>COLLABORATION</span>
            <span className="core-intro-dot"></span>
            <span>COMMUNITY</span>
          </div>

        </div>
      </section>

      {/* =====================================
          COMMITTEE STATISTICS
      ===================================== */}

      <section className="core-stats">
        <div className="core-stats-inner">

          <div className="core-stat">
            <strong>12</strong>
            <span>Committee Members</span>
          </div>

          <div className="core-stat">
            <strong>08</strong>
            <span>Office Bearers</span>
          </div>

          <div className="core-stat">
            <strong>04</strong>
            <span>General Members</span>
          </div>

          <div className="core-stat">
            <strong>01</strong>
            <span>Alumni Association</span>
          </div>

        </div>
      </section>

      {/* =====================================
          COMMITTEE MEMBERS
      ===================================== */}

      <section className="core-members">
        <div className="core-members-inner">

          {/* SECTION HEADING */}

          <div className="core-section-heading">

            <div>
              <span className="core-section-kicker">
                THE PEOPLE BEHIND THE ASSOCIATION
              </span>

              <h2>
                Meet the
                <br />
                <em>Committee.</em>
              </h2>
            </div>

            <p>
              Get to know the people responsible for
              guiding, coordinating and strengthening
              our alumni association.
            </p>

          </div>

          {/* SEARCH AND FILTER */}

          <div className="core-controls">

            <div className="core-search">
              <span className="core-search-icon" aria-hidden="true">
                ⌕
              </span>

              <input
                type="search"
                placeholder="Search by name or designation..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search committee members"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div
              className="core-filters"
              aria-label="Filter committee members"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          {/* RESULTS INFORMATION */}

          <div className="core-results">
            <span>
              Showing {filteredMembers.length} of {committeeData.length} members
            </span>

            <span className="core-results-line"></span>

            <span>{activeCategory}</span>
          </div>

          {/* MEMBER CARDS */}

          {filteredMembers.length > 0 ? (
            <div className="core-grid">

              {filteredMembers.map((member) => (
                <article
                  className={`core-card ${
                    member.id === 1 ? "core-card-president" : ""
                  }`}
                  key={member.id}
                >

                  <div className="core-card-image">

                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />

                    <span className="core-card-number">
                      {String(member.id).padStart(2, "0")}
                    </span>

                    {member.id === 1 && (
                      <span className="core-card-featured">
                        LEADERSHIP
                      </span>
                    )}

                  </div>

                  <div className="core-card-content">

                    <div className="core-card-top">
                      <span className="core-card-category">
                        {member.category}
                      </span>

                      <span className="core-card-id">
                        {String(member.id).padStart(2, "0")} / 12
                      </span>
                    </div>

                    <h3>{member.name}</h3>

                    <p className="core-card-role">
                      {member.role}
                    </p>

                    <div className="core-card-footer">
                      <span>ALUMNI ASSOCIATION</span>
                      <span className="core-card-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (

            /* EMPTY SEARCH RESULT */

            <div className="core-empty">
              <div className="core-empty-mark">?</div>

              <h3>No committee members found.</h3>

              <p>
                Try another name or choose a different category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>

          )}

        </div>
      </section>

      {/* =====================================
          LEGACY / RESPONSIBILITY SECTION
      ===================================== */}

      <section className="core-legacy">
        <div className="core-legacy-inner">

          <div className="core-legacy-copy">
            <span className="core-section-kicker">
              OUR RESPONSIBILITY
            </span>

            <h2>
              More than
              <br />
              a position.
              <br />
              <em>A commitment.</em>
            </h2>

            <p>
              Being part of the Core Committee means
              working together to nurture relationships,
              encourage participation and create a lasting
              connection between alumni and their school.
            </p>
          </div>

          <div className="core-legacy-values">

            <div className="core-value">
              <span>01</span>
              <div>
                <h3>Leadership</h3>
                <p>
                  Guiding the association with responsibility
                  and vision.
                </p>
              </div>
            </div>

            <div className="core-value">
              <span>02</span>
              <div>
                <h3>Collaboration</h3>
                <p>
                  Bringing alumni together through shared
                  ideas and efforts.
                </p>
              </div>
            </div>

            <div className="core-value">
              <span>03</span>
              <div>
                <h3>Commitment</h3>
                <p>
                  Building meaningful connections that
                  continue across generations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <section className="core-cta">
        <div className="core-cta-inner">

          <div>
            <span className="core-section-kicker">
              THE COMMUNITY BELONGS TO ALL OF US
            </span>

            <h2>
              Stay connected.
              <br />
              Make a difference.
            </h2>

            <p>
              Your journey with the school does not end
              at graduation. Stay involved and help
              strengthen our alumni community.
            </p>
          </div>

          <Link
            to="/membership"
            className="core-cta-link"
          >
            Explore Membership
            <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default CoreCommitteeMembers;
