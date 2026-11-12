
import React from "react";
import "../css/FoundingMember.css";

// FOUNDING MEMBERS DATA
const foundingMembers = [
  {
    name: "Mr. Sankhasubha Roy",
    designation: "President",
    department: "Alumni Association",
    image: "/images/committee/member-01.jpg",
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
  {
    name: "Dr. Priya Mukherjee",
    designation: "Executive Member",
    department: "Alumni Association",
    image: "/images/committee/member-06.jpg",
  },
];

function FoundingMember() {
  return (
    <div className="committee-page">

      {/* HERO SECTION */}
      <section className="committee-hero">
        <div className="committee-hero-content">

          <span className="committee-eyebrow">
            ALUMNI ASSOCIATION
          </span>

          <h1>Founding Members</h1>

          <p>
            Meet the distinguished individuals who laid the
            foundation of our Alumni Association and continue
            to inspire a strong and connected alumni community.
          </p>

        </div>

        <div className="committee-hero-shape shape-one"></div>
        <div className="committee-hero-shape shape-two"></div>
      </section>


      {/* INTRODUCTION */}
      <section className="committee-intro">

        <div className="committee-intro-label">
          <span></span>
          OUR FOUNDERS
        </div>

        <div className="committee-intro-grid">

          <h2>
            A legacy built on vision.
          </h2>

          <p>
            The Founding Members played an important role in
            establishing the Alumni Association. Their vision,
            dedication and commitment continue to strengthen
            the relationship between alumni and the institution.
          </p>

        </div>
      </section>


      {/* FOUNDING MEMBERS */}
      <section className="committee-section">

        <div className="committee-section-heading">

          <div>
            <span className="section-kicker">
              OUR FOUNDERS
            </span>

            <h2>Meet the Founding Members</h2>
          </div>

          <p>
            Recognising the people whose contributions helped
            establish and shape our alumni community.
          </p>

        </div>


        {/* MEMBERS GRID */}
        <div className="committee-grid">

          {foundingMembers.map((member, index) => (

            <article
              className={`committee-card ${
                index === 0 ? "committee-card-featured" : ""
              }`}
              key={member.name}
            >

              {/* MEMBER IMAGE */}
              <div className="committee-image-wrapper">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />

                <span className="member-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* MEMBER DETAILS */}
              <div className="committee-card-content">

                <span className="member-designation">
                  {member.designation}
                </span>

                <h3>{member.name}</h3>

                <p>{member.department}</p>

                <div className="member-line"></div>

                <span className="member-role">
                  Founding Member
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* RESPONSIBILITY SECTION */}
      <section className="committee-responsibility">

        <div className="responsibility-content">

          <span className="section-kicker">
            OUR LEGACY
          </span>

          <h2>
            A foundation for generations to come.
          </h2>

          <p>
            The Founding Members established a vision of
            connection, collaboration and lifelong relationships.
            Their contributions continue to inspire future
            generations of alumni to stay connected and contribute
            to the institution.
          </p>

        </div>


        {/* HIGHLIGHTS */}
        <div className="responsibility-stats">

          <div>
            <strong>01</strong>
            <span>Vision</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Foundation</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Legacy</span>
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="committee-cta">

        <div>

          <span className="section-kicker">
            STAY CONNECTED
          </span>

          <h2>
            Be part of our alumni community.
          </h2>

          <p>
            Connect, contribute and grow with a network
            that continues beyond graduation.
          </p>

        </div>

      </section>

    </div>
  );
}

export default FoundingMember;
