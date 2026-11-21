
import React, { useMemo, useState } from "react";
import "../css/AlumniDirectory.css";

const alumniData = [
  { id: 1, name: "Arjun Mehta", batch: "2014", department: "Electrical", profession: "Power Systems Engineer", company: "Energy Solutions", location: "Kolkata", image: "/images/alumni/alumni-01.jpg" },
  { id: 2, name: "Priya Sharma", batch: "2016", department: "CSE", profession: "Software Engineer", company: "Technology Labs", location: "Bengaluru", image: "/images/alumni/alumni-02.jpg" },
  { id: 3, name: "Rohan Das", batch: "2015", department: "Mechanical", profession: "Design Engineer", company: "Engineering Works", location: "Pune", image: "/images/alumni/alumni-03.jpg" },
  { id: 4, name: "Sneha Roy", batch: "2018", department: "ECE", profession: "Product Designer", company: "Digital Studio", location: "Mumbai", image: "/images/alumni/alumni-04.jpg" },
  { id: 5, name: "Aditya Sen", batch: "2013", department: "Civil", profession: "Project Manager", company: "Infrastructure Group", location: "Delhi", image: "/images/alumni/alumni-05.jpg" },
  { id: 6, name: "Neha Kapoor", batch: "2019", department: "IT", profession: "Data Analyst", company: "Analytics Hub", location: "Hyderabad", image: "/images/alumni/alumni-06.jpg" },
  { id: 7, name: "Rahul Verma", batch: "2012", department: "Electrical", profession: "Operations Lead", company: "Industrial Systems", location: "Chennai", image: "/images/alumni/alumni-07.jpg" },
  { id: 8, name: "Ananya Bose", batch: "2020", department: "CSE", profession: "Frontend Developer", company: "Creative Technologies", location: "Bengaluru", image: "/images/alumni/alumni-08.jpg" },
  { id: 9, name: "Vikram Singh", batch: "2017", department: "Chemical", profession: "Process Engineer", company: "Manufacturing Corp", location: "Ahmedabad", image: "/images/alumni/alumni-09.jpg" },
  { id: 10, name: "Ishita Gupta", batch: "2021", department: "ECE", profession: "Electronics Engineer", company: "Tech Industries", location: "Kolkata", image: "/images/alumni/alumni-10.jpg" },
  { id: 11, name: "Karan Malhotra", batch: "2011", department: "Mechanical", profession: "Business Consultant", company: "Consulting Group", location: "Gurugram", image: "/images/alumni/alumni-11.jpg" },
  { id: 12, name: "Riya Chatterjee", batch: "2022", department: "IT", profession: "UX Designer", company: "Design Collective", location: "Mumbai", image: "/images/alumni/alumni-12.jpg" },
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
    const searchText = search.trim().toLowerCase();

    return alumniData.filter((alumni) => {
      const searchableFields = [
        alumni.name,
        alumni.batch,
        alumni.department,
        alumni.profession,
        alumni.company,
        alumni.location,
      ];

      const matchesSearch = searchableFields.some((field) =>
        field.toLowerCase().includes(searchText)
      );

      const matchesDepartment =
        department === "All Departments" ||
        alumni.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  const resetFilters = () => {
    setSearch("");
    setDepartment("All Departments");
  };

  return (
    <main className="directory-page">

      {/* HERO */}
      <section className="directory-hero">
        <div className="directory-hero-pattern" />

        <div className="directory-hero-content">
          <span className="directory-eyebrow">
            ALUMNI ASSOCIATION · AGCS HALDIA
          </span>

          <h1>
            The people.
            <br />
            <span>The journeys.</span>
          </h1>

          <p>
            Every graduate carries a part of our story.
            Explore the network of people connected by one
            school, countless experiences and a shared legacy.
          </p>

          <a href="#alumni-list" className="directory-hero-link">
            EXPLORE THE DIRECTORY <span>↓</span>
          </a>
        </div>

        <div className="directory-hero-art" aria-hidden="true">
          <span className="directory-art-ring directory-art-ring-one" />
          <span className="directory-art-ring directory-art-ring-two" />
          <span className="directory-art-initials">AG</span>
          <span className="directory-art-caption">CONNECTED BY LEGACY</span>
        </div>

        <div className="directory-hero-bottom">
          <span>ASSEMBLY OF GOD CHURCH SCHOOL</span>
          <span>HALDIA · EST. 1970</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="directory-intro">
        <div className="directory-intro-label">
          <span>01 / THE NETWORK</span>
          <div />
        </div>

        <div className="directory-intro-content">
          <h2>
            One school.
            <br />
            <span>A lifetime of connections.</span>
          </h2>

          <p>
            From classrooms to careers, our alumni continue to
            make their mark across professions and places.
            This directory is a space to reconnect with familiar
            faces, discover new connections and celebrate the
            journeys that began at AGCS Haldia.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="directory-stats">
        <div className="directory-stats-inner">
          <div className="directory-stat">
            <span className="directory-stat-number">01</span>
            <strong>2,500+</strong>
            <span>Alumni</span>
          </div>

          <div className="directory-stat">
            <span className="directory-stat-number">02</span>
            <strong>15+</strong>
            <span>Departments</span>
          </div>

          <div className="directory-stat">
            <span className="directory-stat-number">03</span>
            <strong>25+</strong>
            <span>Cities</span>
          </div>

          <div className="directory-stat">
            <span className="directory-stat-number">04</span>
            <strong>40+</strong>
            <span>Graduating Batches</span>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="directory-section" id="alumni-list">
        <div className="directory-heading">
          <div>
            <span className="directory-section-label">
              02 / FIND YOUR PEOPLE
            </span>

            <h2>
              The alumni
              <br />
              <span>directory.</span>
            </h2>
          </div>

          <p>
            A familiar name, a shared batch or a similar
            career path — your next connection might be
            closer than you think.
          </p>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="directory-controls">
          <div className="directory-search">
            <span className="directory-search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search name, profession, company, city or batch..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search alumni"
            />

            {search && (
              <button
                type="button"
                className="directory-clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="directory-filter">
            <label htmlFor="department-filter">DEPARTMENT</label>
            <select
              id="department-filter"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* RESULT BAR */}
        <div className="directory-result-bar">
          <div>
            <span className="directory-result-dot" />
            <span>
              DISPLAYING <strong>{filteredAlumni.length}</strong> OF{" "}
              <strong>{alumniData.length}</strong> PROFILES
            </span>
          </div>

          <button
            type="button"
            className="directory-reset"
            onClick={resetFilters}
          >
            RESET FILTERS <span>↺</span>
          </button>
        </div>

        {/* ALUMNI CARDS */}
        {filteredAlumni.length > 0 ? (
          <div className="directory-grid">
            {filteredAlumni.map((alumni, index) => (
              <article className="directory-card" key={alumni.id}>
                <div className="directory-card-image">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="directory-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="directory-batch">
                    BATCH '{alumni.batch.slice(-2)}
                  </span>

                  <div className="directory-image-overlay" />
                </div>

                <div className="directory-card-content">
                  <div className="directory-card-meta">
                    <span>{alumni.department}</span>
                    <span>{alumni.batch}</span>
                  </div>

                  <h3>{alumni.name}</h3>

                  <p className="directory-profession">
                    {alumni.profession}
                  </p>

                  <p className="directory-company">
                    {alumni.company}
                  </p>

                  <div className="directory-card-footer">
                    <span className="directory-location">
                      <span>↗</span> {alumni.location}
                    </span>

                    <span className="directory-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="directory-empty">
            <span className="directory-empty-number">404</span>
            <h3>No alumni found.</h3>
            <p>
              We couldn't find a profile matching your search.
              Try another name, batch or department.
            </p>

            <button type="button" onClick={resetFilters}>
              CLEAR ALL FILTERS <span>↗</span>
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="directory-cta">
        <div className="directory-cta-decoration">AGCS</div>

        <div className="directory-cta-content">
          <span className="directory-cta-label">
            03 / YOUR STORY BELONGS HERE
          </span>

          <h2>
            Still part
            <br />
            <span>of the story?</span>
          </h2>

          <p>
            Help us keep the alumni network connected.
            Reach out to the association to update your
            professional details or share your journey.
          </p>

          <a
            href="mailto:agalumni.hld@agschools.edu.in?subject=Alumni%20Profile%20Update"
            className="directory-cta-button"
          >
            UPDATE YOUR PROFILE <span>↗</span>
          </a>
        </div>

        <div className="directory-cta-footer">
          <span>ALUMNI ASSOCIATION</span>
          <span>ASSEMBLY OF GOD CHURCH SCHOOL, HALDIA</span>
        </div>
      </section>
    </main>
  );
}

export default AlumniDirectory;
