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
  {
    number: "50+",
    label: "Recognised Alumni",
  },
  {
    number: "20+",
    label: "Achievement Categories",
  },
  {
    number: "15+",
    label: "Years of Excellence",
  },
  {
    number: "10+",
    label: "Industry Leaders",
  },
];

function AlumniAchievements() {
  return (
    <main className="achievements-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="achievements-hero">
        <div className="achievements-hero-content">
          <span className="achievements-eyebrow">ALUMNI ASSOCIATION</span>

          <h1>
            Alumni
            <span> Achievements</span>
          </h1>

          <p>
            Celebrating the accomplishments, contributions and journeys of our
            alumni who continue to make a difference beyond the campus.
          </p>
        </div>

        <div className="hero-number">01</div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="achievements-intro">
        <div className="intro-label">OUR LEGACY</div>

        <div className="intro-content">
          <h2>
            Excellence that
            <br />
            <span>inspires generations.</span>
          </h2>

          <p>
            Our alumni community continues to grow across industries,
            professions and communities. Their achievements reflect the values,
            knowledge and experiences built during their time at the
            institution.
          </p>
        </div>
      </section>

      {/* =========================================
          STATS
      ========================================= */}

      <section className="achievement-stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <strong>{stat.number}</strong>

              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          ACHIEVEMENTS
      ========================================= */}

      <section className="achievements-list">
        <div className="achievements-heading">
          <div>
            <span className="section-label">MILESTONES</span>

            <h2>Celebrating our alumni</h2>
          </div>

          <p>
            A collection of milestones and achievements that represent the
            spirit of our alumni network.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <article className="achievement-card" key={index}>
              <div className="achievement-top">
                <span className="achievement-year">{achievement.year}</span>

                <span className="achievement-category">
                  {achievement.category}
                </span>
              </div>

              <div className="achievement-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="achievement-content">
                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </div>

              <div className="achievement-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="achievements-cta">
        <div className="cta-content">
          <span>BE PART OF THE STORY</span>

          <h2>
            Your achievement
            <br />
            could be next.
          </h2>

          <p>
            Have an achievement, milestone or professional accomplishment you'd
            like to share with the alumni community?
          </p>

          <button type="button">
            Share Your Achievement
            <span>↗</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default AlumniAchievements;
