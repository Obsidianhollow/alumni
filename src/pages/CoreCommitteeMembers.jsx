
import React, { useMemo, useState } from "react";
import "../css/CoreCommitteeMembers.css";

// =========================================
// CORE COMMITTEE MEMBERS DATA
// =========================================

const committeeData = [
  {
    id: 1,
    name: "Principal AGCS Haldia",
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
// CORE COMMITTEE COMPONENT
// =========================================

function CoreCommitteeMembers() {
  const [activeCategory, setActiveCategory] =
    useState("All Members");

  const [search, setSearch] = useState("");

  // FILTER AND SEARCH
  const filteredMembers = useMemo(() => {
    return committeeData.filter((member) => {
      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(searchValue) ||
        member.role.toLowerCase().includes(searchValue);

      const matchesCategory =
        activeCategory === "All Members" ||
        member.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="members-page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="members-hero">

        <div className="members-hero-content">

          <span className="members-eyebrow">
            ALUMNI ASSOCIATION
          </span>

          <h1>
            Core Committee
            <br />
            <span>Members.</span>
          </h1>

          <p>
            Meet the dedicated individuals leading the Alumni
            Association of Assembly of God Church School,
            Haldia. Their leadership, commitment and
            contributions help strengthen our alumni
            community.
          </p>

        </div>

        <div className="members-hero-side">
          <span>CC</span>
          <small>12 / 12</small>
        </div>

      </section>


      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="members-intro">

        <div className="members-intro-label">
          OUR LEADERSHIP
        </div>

        <div className="members-intro-content">

          <h2>
            Leadership with
            <br />
            <span>purpose.</span>
          </h2>

          <p>
            The Core Committee plays an important role in
            guiding the Alumni Association. From leadership
            and coordination to community engagement,
            each member contributes towards building
            meaningful relationships between alumni,
            students and the institution.
          </p>

        </div>

      </section>


      {/* =========================================
          COMMITTEE STATISTICS
      ========================================= */}

      <section className="members-stats">

        <div className="members-stats-inner">

          <div className="member-stat">
            <strong>12</strong>
            <span>Committee Members</span>
          </div>

          <div className="member-stat">
            <strong>08</strong>
            <span>Office Bearers</span>
          </div>

          <div className="member-stat">
            <strong>04</strong>
            <span>General Members</span>
          </div>

          <div className="member-stat">
            <strong>01</strong>
            <span>Alumni Association</span>
          </div>

        </div>

      </section>


      {/* =========================================
          CORE COMMITTEE SECTION
      ========================================= */}

      <section className="members-section">

        {/* SECTION HEADING */}

        <div className="members-heading">

          <div>

            <span className="members-section-label">
              OUR LEADERSHIP
            </span>

            <h2>
              Meet the Committee
            </h2>

          </div>

          <p>
            Get to know the people responsible for
            guiding and strengthening our alumni
            association.
          </p>

        </div>


        {/* =========================================
            SEARCH
        ========================================= */}

        <div className="members-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search committee members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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


        {/* =========================================
            CATEGORY FILTER
        ========================================= */}

        <div className="domain-filter">

          {categories.map((category) => (

            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =========================================
            SEARCH RESULTS
        ========================================= */}

        <div className="members-result">

          <span>
            {filteredMembers.length} Members
          </span>

          <span className="members-result-line" />

          <span>
            {activeCategory}
          </span>

        </div>


        {/* =========================================
            COMMITTEE MEMBER CARDS
        ========================================= */}

        {filteredMembers.length > 0 ? (

          <div className="members-grid">

            {filteredMembers.map((member, index) => (

              <article
                className={`member-card ${
                  member.id === 1
                    ? "committee-president-card"
                    : ""
                }`}
                key={member.id}
              >

                {/* MEMBER IMAGE */}

                <div className="member-image">

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="member-index">
                    {String(member.id).padStart(2, "0")}
                  </span>

                </div>


                {/* MEMBER DETAILS */}

                <div className="member-card-content">

                  <div className="member-card-top">

                    <span className="member-domain">
                      {member.category}
                    </span>

                    <span>
                      {String(index + 1).padStart(2, "0")} / 12
                    </span>

                  </div>

                  <h3>
                    {member.name}
                  </h3>

                  <p className="member-role">
                    {member.role}
                  </p>

                  <div className="member-card-bottom">

                    <span>
                      Alumni Association
                    </span>

                    <span
                      className="committee-member-mark"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* EMPTY SEARCH RESULT */

          <div className="members-empty">

            <div>?</div>

            <h3>
              No committee members found
            </h3>

            <p>
              Try searching with another name or
              select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Members");
              }}
            >
              Reset
            </button>

          </div>

        )}

      </section>


      {/* =========================================
          CLOSING SECTION
      ========================================= */}

      <section className="members-cta">

        <div className="members-cta-content">

          <span>
            ALUMNI ASSOCIATION
          </span>

          <h2>
            Together, we build
            <br />
            a stronger community.
          </h2>

          <p>
            Connect, contribute and stay involved
            with the Alumni Association of Assembly
            of God Church School, Haldia.
          </p>

          <a
            href="/#contact"
            className="committee-contact-link"
          >
            Get In Touch
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default CoreCommitteeMembers;
