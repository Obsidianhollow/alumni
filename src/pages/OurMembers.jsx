import React, { useMemo, useState } from "react";
import "../css/OurMembers.css";

const membersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "President",
    domain: "Leadership",
    batch: "2026",
    location: "Haldia",
    image: "/images/members/member-01.jpg",
  },
  {
    id: 2,
    name: "Riya Sen",
    role: "Vice President",
    domain: "Management",
    batch: "2027",
    location: "Kolkata",
    image: "/images/members/member-02.jpg",
  },
  {
    id: 3,
    name: "Aditya Roy",
    role: "Technical Lead",
    domain: "Technology",
    batch: "2026",
    location: "Haldia",
    image: "/images/members/member-03.jpg",
  },
  {
    id: 4,
    name: "Sneha Das",
    role: "Creative Lead",
    domain: "Design",
    batch: "2027",
    location: "Kolkata",
    image: "/images/members/member-04.jpg",
  },
  {
    id: 5,
    name: "Karan Gupta",
    role: "Events Coordinator",
    domain: "Events",
    batch: "2026",
    location: "Haldia",
    image: "/images/members/member-05.jpg",
  },
  {
    id: 6,
    name: "Ananya Bose",
    role: "Content Lead",
    domain: "Content",
    batch: "2027",
    location: "Kolkata",
    image: "/images/members/member-06.jpg",
  },
  {
    id: 7,
    name: "Rahul Das",
    role: "Media Coordinator",
    domain: "Media",
    batch: "2026",
    location: "Haldia",
    image: "/images/members/member-07.jpg",
  },
  {
    id: 8,
    name: "Meera Roy",
    role: "Community Lead",
    domain: "Community",
    batch: "2027",
    location: "Kolkata",
    image: "/images/members/member-08.jpg",
  },
];

const domains = [
  "All Members",
  "Leadership",
  "Management",
  "Technology",
  "Design",
  "Events",
  "Content",
  "Media",
  "Community",
];

function OurMembers() {
  const [activeDomain, setActiveDomain] = useState("All Members");
  const [search, setSearch] = useState("");

  const filteredMembers = useMemo(() => {
    return membersData.filter((member) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(searchValue) ||
        member.role.toLowerCase().includes(searchValue) ||
        member.domain.toLowerCase().includes(searchValue);

      const matchesDomain =
        activeDomain === "All Members" ||
        member.domain === activeDomain;

      return matchesSearch && matchesDomain;
    });
  }, [search, activeDomain]);

  return (
    <main className="members-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="members-hero">

        <div className="members-hero-content">

          <span className="members-eyebrow">
            OUR COMMUNITY
          </span>

          <h1>
            The people
            <br />
            <span>behind the community.</span>
          </h1>

          <p>
            Meet the members who bring ideas to life,
            create meaningful connections and keep our
            alumni community moving forward.
          </p>

        </div>

        <div className="members-hero-side">
          <span>OM</span>
          <small>01 / 08</small>
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="members-intro">

        <div className="members-intro-label">
          OUR MEMBERS
        </div>

        <div className="members-intro-content">

          <h2>
            More than a
            <br />
            <span>membership.</span>
          </h2>

          <p>
            Our members form the heart of the alumni
            association. From leadership and technology
            to events, media and community initiatives,
            every member contributes a unique perspective
            and energy.
          </p>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="members-stats">

        <div className="members-stats-inner">

          <div className="member-stat">
            <strong>120+</strong>
            <span>Active Members</span>
          </div>

          <div className="member-stat">
            <strong>08</strong>
            <span>Core Domains</span>
          </div>

          <div className="member-stat">
            <strong>15+</strong>
            <span>Annual Initiatives</span>
          </div>

          <div className="member-stat">
            <strong>100%</strong>
            <span>Community Driven</span>
          </div>

        </div>

      </section>


      {/* =========================================
          MEMBERS SECTION
      ========================================= */}

      <section className="members-section">

        <div className="members-heading">

          <div>

            <span className="members-section-label">
              MEMBER NETWORK
            </span>

            <h2>
              Meet the team
            </h2>

          </div>

          <p>
            Explore our members by their role,
            domain and contribution to the community.
          </p>

        </div>


        {/* =========================================
            SEARCH
        ========================================= */}

        <div className="members-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        {/* =========================================
            DOMAIN FILTER
        ========================================= */}

        <div className="domain-filter">

          {domains.map((domain) => (
            <button
              type="button"
              key={domain}
              className={
                activeDomain === domain
                  ? "active"
                  : ""
              }
              onClick={() => setActiveDomain(domain)}
            >
              {domain}
            </button>
          ))}

        </div>


        {/* =========================================
            RESULT
        ========================================= */}

        <div className="members-result">

          <span>
            {filteredMembers.length} members
          </span>

          <span className="members-result-line" />

          <span>
            {activeDomain}
          </span>

        </div>


        {/* =========================================
            MEMBER GRID
        ========================================= */}

        {filteredMembers.length > 0 ? (

          <div className="members-grid">

            {filteredMembers.map((member, index) => (

              <article
                className="member-card"
                key={member.id}
              >

                <div className="member-image">

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />

                  <span className="member-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <div className="member-card-content">

                  <div className="member-card-top">

                    <span className="member-domain">
                      {member.domain}
                    </span>

                    <span>
                      {member.batch}
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
                      {member.location}
                    </span>

                    <button
                      type="button"
                      aria-label={`View ${member.name}`}
                    >
                      ↗
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="members-empty">

            <div>?</div>

            <h3>
              No members found
            </h3>

            <p>
              Try another name or choose a different domain.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveDomain("All Members");
              }}
            >
              Reset
            </button>

          </div>

        )}

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="members-cta">

        <div className="members-cta-content">

          <span>
            BE PART OF THE COMMUNITY
          </span>

          <h2>
            Your contribution
            <br />
            matters.
          </h2>

          <p>
            Connect, participate and help shape the
            future of our alumni community.
          </p>

          <button type="button">
            Get Involved
            <span>↗</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default OurMembers;