
import React from "react";
import "../css/AlumniAchivment.css";

const achievements = [
  {
    year: "2026",
    category: "Leadership",
    title: "Outstanding Leadership",
    description:
      "Recognised for exceptional leadership, professional excellence and meaningful contribution to the community.",
  },
  {
    year: "2025",
    category: "Innovation",
    title: "Innovation Excellence",
    description:
      "Awarded for developing an innovative solution that created meaningful impact in the professional and social space.",
  },
  {
    year: "2025",
    category: "Entrepreneurship",
    title: "Entrepreneurial Achievement",
    description:
      "Recognised for building and growing an initiative with strong vision, creativity and sustainable impact.",
  },
  {
    year: "2024",
    category: "Professional",
    title: "Professional Excellence",
    description:
      "Celebrating outstanding professional growth, achievements and contribution to the industry.",
  },
  {
    year: "2024",
    category: "Community",
    title: "Community Impact Award",
    description:
      "Honouring an alumnus whose efforts have positively contributed to society and the wider community.",
  },
  {
    year: "2023",
    category: "Academic",
    title: "Academic Excellence",
    description:
      "Recognising exceptional academic achievement, research contribution and commitment to learning.",
  },
];

const stats = [
  { number: "50+", label: "Recognised Alumni" },
  { number: "20+", label: "Achievement Categories" },
  { number: "15+", label: "Years of Excellence" },
  { number: "10+", label: "Industry Leaders" },
];

function AlumniAchievements() {
  return (
    <main className="achievements-page">

      {/* HERO */}
      <section className="achievements-hero">
        <div className="achievements-hero-pattern" />

        <div className="achievements-hero-content">
          <span className="achievements-eyebrow">
            ALUMNI ASSOCIATION · AGCS HALDIA
          </span>

          <h1>
            Beyond the
            <br />
            <span>classroom.</span>
          </h1>

          <p>
            Celebrating the accomplishments, contributions and journeys
            of our alumni who continue to make a difference beyond the campus.
          </p>

          <a href="#achievement-list" className="achievements-hero-link">
            EXPLORE THE MILESTONES <span>↓</span>
          </a>
        </div>

        <div className="achievements-hero-art" aria-hidden="true">
          <div className="achievements-hero-ring achievements-ring-one" />
          <div className="achievements-hero-ring achievements-ring-two" />
          <span className="achievements-hero-number">01</span>
          <span className="achievements-hero-art-label">
            A LEGACY OF EXCELLENCE
          </span>
        </div>

        <div className="achievements-hero-bottom">
          <span>ASSEMBLY OF GOD CHURCH SCHOOL</span>
          <span>HALDIA · ALUMNI ASSOCIATION</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="achievements-intro">
        <div className="achievements-intro-label">
          <span>01 / OUR LEGACY</span>
          <div />
        </div>

        <div className="achievements-intro-content">
          <h2>
            Excellence that
            <br />
            <span>inspires generations.</span>
          </h2>

          <p>
            Our alumni community continues to grow across industries,
            professions and communities. Their achievements reflect the
            values, knowledge and experiences built during their time
            at the institution. Every milestone adds another chapter
            to the story of our school.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="achievement-stats">
        <div className="achievement-stats-container">
          {stats.map((stat, index) => (
            <div className="achievement-stat-item" key={stat.label}>
              <span className="achievement-stat-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{stat.number}</strong>
              <span className="achievement-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        className="achievements-list"
        id="achievement-list"
      >
        <div className="achievements-heading">
          <div>
            <span className="achievements-section-label">
              02 / MILESTONES
            </span>

            <h2>
              Recognising
              <br />
              <span>excellence.</span>
            </h2>
          </div>

          <p>
            A celebration of ambition, dedication and the remarkable
            contributions of our alumni across different fields.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <article className="achievement-card" key={`${achievement.year}-${achievement.title}`}>
              <div className="achievement-card-top">
                <span className="achievement-year">
                  {achievement.year}
                </span>

                <span className="achievement-category">
                  {achievement.category}
                </span>
              </div>

              <div className="achievement-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="achievement-card-content">
                <span className="achievement-card-line" />

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </div>

              <div className="achievement-card-bottom">
                <span>AGCS HALDIA · ALUMNI</span>
                <span className="achievement-card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="achievements-cta">
        <div className="achievements-cta-decoration" aria-hidden="true">
          AGCS
        </div>

        <div className="achievements-cta-content">
          <span className="achievements-cta-label">
            03 / BE PART OF THE STORY
          </span>

          <h2>
            Your achievement
            <br />
            <span>could be next.</span>
          </h2>

          <p>
            Have an achievement, milestone or professional accomplishment
            you'd like to share with the alumni community? We would love
            to hear your story.
          </p>

          <a
            className="achievements-cta-button"
            href="mailto:agalumni.hld@agschools.edu.in?subject=Sharing%20an%20Alumni%20Achievement"
          >
            SHARE YOUR ACHIEVEMENT <span>↗</span>
          </a>
        </div>

        <div className="achievements-cta-footer">
          <span>ALUMNI ASSOCIATION</span>
          <span>ASSEMBLY OF GOD CHURCH SCHOOL, HALDIA</span>
        </div>
      </section>
    </main>
  );
}

export default AlumniAchievements;
