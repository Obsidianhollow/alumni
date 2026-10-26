
import React from "react";
import "../css/About.css";

function About() {
  return (
    <main className="about-page">
      <div className="about-container">

        {/* Page Heading */}
        <header className="about-page-header">
          <span className="about-label">AAACGS • HALDIA</span>
          <h1>About Our Association</h1>
          <p>
            Preserving our legacy, strengthening our bonds, and
            building a lasting connection with our alma mater.
          </p>
        </header>

        {/* 01. About Us */}
        <section className="about-content-section" id="about-us">
          <h2>About Us</h2>

          <p>
            The Alumni Association of Assembly of God Church School
            (AAACGS), Haldia, is a society registered under the West
            Bengal Societies Registration Act, 1961. Established in
            2021 through the initiative of former students, the
            Association aims to unite alumni under one banner and
            encourage them to contribute their talents and experience
            to the school and the wider community.
          </p>

          <p>
            The initiative was led by Mr. Santanu Maity, an alumnus
            and professor, alongside Mr. Saurav Samanta, an alumnus
            and entrepreneur, and Mrs. Payel Panda Pandit, an alumna
            and teacher. They approached the then Principal,
            Mr. Sankhasubha Roy, who welcomed the idea of bringing
            former students together and creating opportunities
            for meaningful contributions.
          </p>

          <p>
            Since its inception, the Association has grown steadily
            and now has more than 200 members. Its activities include
            the Annual Alumni Dinner, initiatives involving the school
            and former students, and opportunities to reconnect with
            the institution and fellow alumni.
          </p>

          <p>
            During the first Annual Dinner, the classrooms were opened
            and illuminated at the initiative of Mr. Sankhasubha Roy,
            creating a nostalgic experience for alumni returning to
            their school. The Association has also co-sponsored
            various functions and initiatives involving the school
            and its former students.
          </p>

          <p>
            The Association officially launched its website during
            the second Alumni Dinner on 17 December 2022. Members
            are encouraged to attend the Founder's Day Service held
            annually on 27 January. Class 12 students are also
            encouraged to join the Association with the support
            of school authorities, teachers, and prefects.
          </p>
        </section>

        {/* 02. Our Vision */}
        <section className="about-content-section" id="our-vision">
          <h2>Our Vision</h2>

          <p>
            To build a vibrant and united alumni community that
            preserves the legacy of Assembly of God Church School,
            Haldia, and maintains a lasting connection between
            the school and its former students.
          </p>

          <p>
            We aspire to inspire future generations, celebrate
            alumni achievements, and encourage collective efforts
            that contribute to the school's continued growth and
            the betterment of society.
          </p>
        </section>

        {/* 03. Our Mission */}
        <section className="about-content-section" id="our-mission">
          <h2>Our Mission</h2>

          <p>
            To bring alumni together through meaningful interactions,
            annual gatherings, and collaborative initiatives while
            nurturing relationships across generations.
          </p>

          <p>
            We aim to encourage former students to share their
            knowledge, professional experience, and talents for
            the benefit of the school and its students. Through
            participation, mutual support, and a shared sense
            of responsibility, we strive to keep the spirit of
            our alma mater alive.
          </p>
        </section>

        {/* Closing */}
        <div className="about-closing">
          <p>
            Once a part of our school, always a part of our community.
          </p>
          <span>AAACGS Haldia Alumni Association</span>
        </div>

      </div>
    </main>
  );
}

export default About;
