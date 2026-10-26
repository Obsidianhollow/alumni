import React, { useMemo, useState } from "react";
import "../css/AlumniDirectory.css";

const alumniData = [
  {
    id: 1,
    name: "Arjun Mehta",
    batch: "2014",
    department: "Electrical",
    profession: "Power Systems Engineer",
    company: "Energy Solutions",
    location: "Kolkata",
    image: "/images/alumni/alumni-01.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    batch: "2016",
    department: "CSE",
    profession: "Software Engineer",
    company: "Technology Labs",
    location: "Bengaluru",
    image: "/images/alumni/alumni-02.jpg",
  },
  {
    id: 3,
    name: "Rohan Das",
    batch: "2015",
    department: "Mechanical",
    profession: "Design Engineer",
    company: "Engineering Works",
    location: "Pune",
    image: "/images/alumni/alumni-03.jpg",
  },
  {
    id: 4,
    name: "Sneha Roy",
    batch: "2018",
    department: "ECE",
    profession: "Product Designer",
    company: "Digital Studio",
    location: "Mumbai",
    image: "/images/alumni/alumni-04.jpg",
  },
  {
    id: 5,
    name: "Aditya Sen",
    batch: "2013",
    department: "Civil",
    profession: "Project Manager",
    company: "Infrastructure Group",
    location: "Delhi",
    image: "/images/alumni/alumni-05.jpg",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    batch: "2019",
    department: "IT",
    profession: "Data Analyst",
    company: "Analytics Hub",
    location: "Hyderabad",
    image: "/images/alumni/alumni-06.jpg",
  },
  {
    id: 7,
    name: "Rahul Verma",
    batch: "2012",
    department: "Electrical",
    profession: "Operations Lead",
    company: "Industrial Systems",
    location: "Chennai",
    image: "/images/alumni/alumni-07.jpg",
  },
  {
    id: 8,
    name: "Ananya Bose",
    batch: "2020",
    department: "CSE",
    profession: "Frontend Developer",
    company: "Creative Technologies",
    location: "Bengaluru",
    image: "/images/alumni/alumni-08.jpg",
  },
  {
    id: 9,
    name: "Vikram Singh",
    batch: "2017",
    department: "Chemical",
    profession: "Process Engineer",
    company: "Manufacturing Corp",
    location: "Ahmedabad",
    image: "/images/alumni/alumni-09.jpg",
  },
  {
    id: 10,
    name: "Ishita Gupta",
    batch: "2021",
    department: "ECE",
    profession: "Electronics Engineer",
    company: "Tech Industries",
    location: "Kolkata",
    image: "/images/alumni/alumni-10.jpg",
  },
  {
    id: 11,
    name: "Karan Malhotra",
    batch: "2011",
    department: "Mechanical",
    profession: "Business Consultant",
    company: "Consulting Group",
    location: "Gurugram",
    image: "/images/alumni/alumni-11.jpg",
  },
  {
    id: 12,
    name: "Riya Chatterjee",
    batch: "2022",
    department: "IT",
    profession: "UX Designer",
    company: "Design Collective",
    location: "Mumbai",
    image: "/images/alumni/alumni-12.jpg",
  },
];

const departments = [
  "All Departments",
  "CSE",
  "Electrical",
  "Mechanical",
  "ECE",
  "IT",
  "Civil",
  "Chemical",
];

function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        alumni.name.toLowerCase().includes(searchText) ||
        alumni.batch.includes(searchText) ||
        alumni.profession.toLowerCase().includes(searchText) ||
        alumni.location.toLowerCase().includes(searchText) ||
        alumni.company.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "All Departments" ||
        alumni.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  return (
    <main className="directory-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="directory-hero">

        <div className="directory-hero-content">

          <span className="directory-eyebrow">
            ALUMNI ASSOCIATION
          </span>

          <h1>
            Find your
            <span> Alumni.</span>
          </h1>

          <p>
            Explore our growing alumni network and discover
            the people, professions and journeys that connect
            our community.
          </p>

        </div>

        <div className="directory-hero-mark">
          <span>AD</span>
        </div>

      </section>


      {/* =========================================
          DIRECTORY INTRO
      ========================================= */}

      <section className="directory-intro">

        <div className="directory-intro-label">
          THE NETWORK
        </div>

        <div className="directory-intro-content">

          <h2>
            One campus.
            <br />
            <span>Thousands of journeys.</span>
          </h2>

          <p>
            Our alumni directory brings together graduates
            across batches, departments, industries and
            locations — making it easier to reconnect,
            collaborate and stay part of the community.
          </p>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="directory-stats">

        <div className="directory-stats-inner">

          <div className="directory-stat">
            <strong>2,500+</strong>
            <span>Alumni</span>
          </div>

          <div className="directory-stat">
            <strong>15+</strong>
            <span>Departments</span>
          </div>

          <div className="directory-stat">
            <strong>25+</strong>
            <span>Cities</span>
          </div>

          <div className="directory-stat">
            <strong>40+</strong>
            <span>Graduating Batches</span>
          </div>

        </div>

      </section>


      {/* =========================================
          DIRECTORY
      ========================================= */}

      <section className="directory-section">

        <div className="directory-heading">

          <div>
            <span className="directory-section-label">
              ALUMNI DIRECTORY
            </span>

            <h2>
              Meet the community
            </h2>
          </div>

          <p>
            Search by name, profession, company,
            location or graduating batch.
          </p>

        </div>


        {/* =========================================
            SEARCH & FILTER
        ========================================= */}

        <div className="directory-controls">

          <div className="directory-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search alumni..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>


          <div className="directory-filter">

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >
              {departments.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>


        {/* =========================================
            RESULT COUNT
        ========================================= */}

        <div className="directory-result-bar">

          <span>
            Showing{" "}
            <strong>
              {filteredAlumni.length}
            </strong>{" "}
            alumni
          </span>

          <span className="directory-line" />

          <span>
            {department === "All Departments"
              ? "All departments"
              : department}
          </span>

        </div>


        {/* =========================================
            ALUMNI GRID
        ========================================= */}

        {filteredAlumni.length > 0 ? (

          <div className="directory-grid">

            {filteredAlumni.map((alumni) => (

              <article
                className="directory-card"
                key={alumni.id}
              >

                <div className="directory-card-image">

                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    loading="lazy"
                  />

                  <span className="directory-batch">
                    '{alumni.batch.slice(-2)}
                  </span>

                </div>


                <div className="directory-card-content">

                  <div className="directory-card-top">

                    <span>
                      {alumni.department}
                    </span>

                    <span>
                      {alumni.batch}
                    </span>

                  </div>


                  <h3>
                    {alumni.name}
                  </h3>


                  <p className="directory-profession">
                    {alumni.profession}
                  </p>


                  <p className="directory-company">
                    {alumni.company}
                  </p>


                  <div className="directory-card-footer">

                    <span>
                      ◉ {alumni.location}
                    </span>

                    <button
                      type="button"
                      aria-label={`View ${alumni.name}`}
                    >
                      ↗
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="directory-empty">

            <div className="empty-icon">
              ?
            </div>

            <h3>
              No alumni found
            </h3>

            <p>
              Try searching with a different name,
              profession or department.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setDepartment("All Departments");
              }}
            >
              Reset Search
            </button>

          </div>

        )}

      </section>


      {/* =========================================
          CONNECT CTA
      ========================================= */}

      <section className="directory-cta">

        <div className="directory-cta-content">

          <span>
            STAY CONNECTED
          </span>

          <h2>
            Your next connection
            <br />
            could be an old one.
          </h2>

          <p>
            Keep your alumni profile updated and stay
            connected with the community.
          </p>

          <button type="button">
            Update My Profile
            <span>↗</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default AlumniDirectory;