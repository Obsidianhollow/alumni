
import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <main className="about-page">

      {/* =====================================
          01 - HERO SECTION
      ===================================== */}

      <section className="about-hero">
        <div className="about-hero-inner">

          <div className="about-hero-copy">
            <span className="about-eyebrow">
              ASSEMBLY OF GOD CHURCH SCHOOL
            </span>

            <h1>
              Connected
              <br />
              By Roots.
              <br />
              <span>United By Legacy.</span>
            </h1>

            <p>
              More than an association, we are a community
              of former students brought together by shared
              memories, enduring values and a lifelong
              connection to our alma mater.
            </p>

            <div className="about-hero-bottom">
              <span className="about-hero-line"></span>
              <span>AAACGS HALDIA</span>
            </div>
          </div>

          <div className="about-hero-art" aria-hidden="true">
            <div className="about-art-circle about-art-circle-one"></div>
            <div className="about-art-circle about-art-circle-two"></div>

            <div className="about-art-letter">A</div>

            <div className="about-art-caption">
              <span>OUR SHARED</span>
              <strong>IDENTITY & LEGACY</strong>
            </div>
          </div>

          <div className="about-hero-index">
            <span>01</span>
            <span className="about-index-divider"></span>
            <span>OUR ASSOCIATION</span>
          </div>

        </div>
      </section>

      {/* =====================================
          02 - ABOUT US
      ===================================== */}

      <section className="about-intro" id="about-us">
        <div className="about-section-inner">

          <div className="about-intro-label">
            <span className="about-small-line"></span>
            WHO WE ARE
          </div>

          <div className="about-intro-content">

            <h2>
              One school.
              <br />
              Many journeys.
              <br />
              <em>One community.</em>
            </h2>

            <div className="about-intro-description">

              <p>
                The Alumni Association of Assembly of God
                Church School (AAACGS), Haldia, is a society
                registered under the West Bengal Societies
                Registration Act, 1961.
              </p>

              <p>
                Established in 2021 through the initiative
                of former students, the Association aims to
                unite alumni under one banner and encourage
                them to contribute their talents and
                experience to the school and the wider
                community.
              </p>

            </div>

          </div>

          <div className="about-intro-bottom">
            <span>SHARED ROOTS</span>
            <span className="about-intro-dot"></span>
            <span>LASTING BONDS</span>
            <span className="about-intro-dot"></span>
            <span>COLLECTIVE GROWTH</span>
          </div>

        </div>
      </section>

      {/* =====================================
          03 - OUR JOURNEY
      ===================================== */}

      <section className="about-journey">
        <div className="about-section-inner">

          <div className="about-section-heading">

            <div>
              <span className="about-section-kicker">
                THE BEGINNING OF A CONNECTION
              </span>

              <h2>
                Our
                <br />
                <em>Journey.</em>
              </h2>
            </div>

            <p>
              Built on the belief that the bond between
              a student and their school should continue
              long after graduation.
            </p>

          </div>

          <div className="about-journey-content">

            <div className="about-journey-year">
              <span>ESTABLISHED</span>
              <strong>2021</strong>
              <small>THE BEGINNING</small>
            </div>

            <div className="about-journey-description">

              <p>
                The initiative was led by Mr. Santanu Maity,
                an alumnus and professor, alongside
                Mr. Saurav Samanta, an alumnus and
                entrepreneur, and Mrs. Payel Panda Pandit,
                an alumna and teacher.
              </p>

              <p>
                They approached the then Principal,
                Mr. Sankhasubha Roy, who welcomed the idea
                of bringing former students together and
                creating opportunities for meaningful
                contributions.
              </p>

              <p>
                Since its inception, the Association has
                grown steadily and now has more than
                200 members.
              </p>

            </div>

          </div>

          <div className="about-journey-divider"></div>

          <div className="about-journey-highlights">

            <div className="about-highlight">
              <span>01</span>
              <h3>Annual Alumni Dinner</h3>
              <p>
                An opportunity for former students to
                reconnect and celebrate their shared
                experiences.
              </p>
            </div>

            <div className="about-highlight">
              <span>02</span>
              <h3>Website Launch</h3>
              <p>
                The Association officially launched its
                website during the second Alumni Dinner
                on 17 December 2022.
              </p>
            </div>

            <div className="about-highlight">
              <span>03</span>
              <h3>Founder's Day</h3>
              <p>
                Members are encouraged to attend the
                Founder's Day Service held annually
                on 27 January.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          04 - OUR VISION
      ===================================== */}

      <section className="about-vision" id="our-vision">
        <div className="about-section-inner">

          <div className="about-vision-heading">

            <span className="about-section-kicker">
              LOOKING BEYOND THE PRESENT
            </span>

            <h2>
              Our
              <em> Vision.</em>
            </h2>

            <p>
              A shared dream of building a community
              that stands as a guiding light for
              generations to come.
            </p>

          </div>

          {/* VISION CONTENT */}

          <div className="about-vision-content">

            <div className="about-vision-main">
              <span>OUR SHARED DREAM</span>

              <h3>
                To become a
                <br />
                <em>lighthouse</em>
                <br />
                for our community.
              </h3>
            </div>

            <div className="about-vision-description">

              <p>
                Our vision is to build a strong and united
                body of former students that becomes a
                guiding light in Haldia and beyond.
              </p>

              <p>
                Inspired by the ideals laid down by our
                founders, we aspire to uphold the values
                of our institution, maintain high standards
                and encourage excellence in every
                endeavour.
              </p>

              <p>
                We envision an alumni community that
                inspires future generations, shares
                knowledge and experience, and creates
                meaningful opportunities for the school
                and society.
              </p>

            </div>

          </div>

          {/* VISION VALUES */}

          <div className="about-vision-values">

            <div className="about-vision-value">
              <span>01</span>
              <h3>Unity</h3>
              <p>
                Bringing former students together
                under one shared identity.
              </p>
            </div>

            <div className="about-vision-value">
              <span>02</span>
              <h3>Values</h3>
              <p>
                Following the ideals and principles
                laid down by our founders.
              </p>
            </div>

            <div className="about-vision-value">
              <span>03</span>
              <h3>Excellence</h3>
              <p>
                Maintaining high standards in
                everything we endeavour to do.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          05 - OUR MISSION
      ===================================== */}

      <section className="about-mission" id="our-mission">
        <div className="about-mission-inner">

          {/* MISSION INTRODUCTION */}

          <div className="about-mission-copy">

            <span className="about-section-kicker">
              TURNING OUR VISION INTO ACTION
            </span>

            <h2>
              Our
              <br />
              <em>Mission.</em>
            </h2>

            <p>
              To bring alumni together through meaningful
              interactions, annual gatherings and
              collaborative initiatives while nurturing
              relationships across generations.
            </p>

            <p>
              We encourage former students to share
              their knowledge, professional experience
              and talents for the benefit of the school
              and its students.
            </p>

          </div>

          {/* MISSION POINTS */}

          <div className="about-mission-points">

            <div className="about-mission-point">
              <span>01</span>

              <div>
                <h3>Connect Generations</h3>
                <p>
                  Create opportunities for alumni to
                  reconnect and build lasting relationships.
                </p>
              </div>
            </div>

            <div className="about-mission-point">
              <span>02</span>

              <div>
                <h3>Share Knowledge</h3>
                <p>
                  Encourage alumni to contribute their
                  professional experience and expertise.
                </p>
              </div>
            </div>

            <div className="about-mission-point">
              <span>03</span>

              <div>
                <h3>Support Our School</h3>
                <p>
                  Work together towards initiatives
                  that benefit the institution and students.
                </p>
              </div>
            </div>

            <div className="about-mission-point">
              <span>04</span>

              <div>
                <h3>Preserve Our Legacy</h3>
                <p>
                  Keep the spirit and values of our
                  alma mater alive for future generations.
                </p>
              </div>
            </div>

          </div>

          {/* MISSION STATEMENT IMAGE */}

          <div className="about-mission-image-wrapper">

            <div className="about-mission-image-frame">

              <img
                src="/images/mission-statement.jpg"
                alt="AAACGS Alumni Association Mission Statement"
                className="about-mission-image"
                loading="lazy"
                onError={(event) => {
                  console.error(
                    "Mission Statement image failed to load:",
                    event.currentTarget.src
                  );
                }}
              />

            </div>

            <span className="about-mission-image-caption">
              OUR MISSION — THE IDEALS THAT GUIDE US
            </span>

          </div>

        </div>
      </section>

      {/* =====================================
          06 - OUR COMMUNITY
      ===================================== */}

      <section className="about-community">
        <div className="about-section-inner">

          <span className="about-section-kicker">
            A BOND THAT GOES BEYOND SCHOOL
          </span>

          <h2>
            Once a student.
            <br />
            <em>Always family.</em>
          </h2>

          <p>
            From annual alumni gatherings to school
            initiatives and the Founder's Day Service,
            every opportunity to come together makes
            our community stronger.
          </p>

          <div className="about-community-note">
            <span>27 JANUARY</span>
            <span className="about-community-line"></span>
            <span>FOUNDER'S DAY SERVICE</span>
          </div>

        </div>
      </section>

      {/* =====================================
          07 - CALL TO ACTION
      ===================================== */}

      <section className="about-cta">
        <div className="about-cta-inner">

          <div>

            <span className="about-section-kicker">
              THE STORY CONTINUES WITH YOU
            </span>

            <h2>
              Stay connected.
              <br />
              <em>Make a difference.</em>
            </h2>

            <p>
              Reconnect with your school, meet fellow
              alumni and become an active part of
              our growing community.
            </p>

          </div>

          <Link
            to="/membership"
            className="about-cta-link"
          >
            Become a Member
            <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;
