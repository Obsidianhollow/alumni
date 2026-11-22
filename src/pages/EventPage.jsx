
import { Link } from "react-router-dom";
import "../css/EventsPage.css";

// =========================================
// EVENT HISTORY DATA
// =========================================

const eventHistory = [
  {
    number: "01",
    yearLabel: "2023",
    month: "DECEMBER",
    day: "16",
    title: "Alumni Meet Retrace 2023",
    imageHeading: "A Journey Begins",
    category: "THE BEGINNING",
    image: "/images/events/retrace-2023.jpg",
    description:
      "A gathering that brought our alumni community together and celebrated the memories, friendships and connections that make our school special.",
    time: "Details to be updated",
    venue: "Details to be updated",
    status: "PAST EVENT",
  },
  {
    number: "02",
    yearLabel: "2024",
    month: "DECEMBER",
    day: "21",
    title: "Alumni Meet Retrace 2024",
    imageHeading: "Stronger Together",
    category: "ANOTHER CHAPTER",
    image: "/images/events/retrace-2024.jpg",
    description:
      "Another memorable chapter in our alumni journey. A time to reconnect with old friends, revisit familiar memories and strengthen lifelong bonds.",
    time: "Details to be updated",
    venue: "Details to be updated",
    status: "PAST EVENT",
  },
  {
    number: "03",
    yearLabel: "2026",
    month: "JANUARY",
    day: "24",
    title: "Alumni Meet Retrace 2026",
    imageHeading: "Campus Moments",
    category: "MEMORIES THAT STAY",
    image: "/images/events/retrace-2026.jpg",
    description:
      "A celebration of shared memories, familiar faces and the special connection that continues to unite generations of our school community.",
    time: "Details to be updated",
    venue: "Details to be updated",
    status: "PAST EVENT",
  },
  {
    number: "04",
    yearLabel: "2027",
    month: "JANUARY",
    day: "09",
    title: "Alumni Meet Retrace 2027",
    imageHeading: "The Story Continues",
    category: "UPCOMING GATHERING",
    image: "/images/events/retrace-2027.jpg",
    description:
      "The next chapter of our alumni journey is waiting to unfold. Another opportunity to reconnect, celebrate our roots and create new memories together.",
    time: "To be announced",
    venue: "To be announced",
    status: "UPCOMING EVENT",
  },
];

// =========================================
// ARROW ICON
// =========================================

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// =========================================
// EVENTS PAGE COMPONENT
// =========================================

function EventsPage() {
  return (
    <div className="events-page">

      {/* PAGE INTRO */}
      <section className="events-page-hero">
        <div className="events-page-hero-inner">

          <span className="events-page-eyebrow">
            <span className="events-page-dot"></span>
            OUR JOURNEY • OUR MEMORIES
          </span>

          <h1>
            Moments That <span>Bring Us Together.</span>
          </h1>

          <p>
            Every reunion tells a story. Explore the gatherings,
            memories and connections that continue to bring our
            alumni community together.
          </p>

          <div className="events-page-hero-bottom">
            <span>ALUMNI ASSOCIATION</span>
            <span className="events-page-hero-line"></span>
            <span>EVENT ARCHIVE</span>
          </div>

        </div>
      </section>

      {/* EVENT HISTORY */}
      <section className="events-history">

        {eventHistory.map((event, index) => (
          <article
            className={`events-history-row ${
              index % 2 !== 0 ? "image-right" : "image-left"
            }`}
            key={event.number}
          >

            {/* EVENT IMAGE */}
            <div className="events-history-image-column">
              <div className="events-history-image">

                <img
                  src={event.image}
                  alt={event.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "image-unavailable"
                    );
                  }}
                />

                <div className="events-image-overlay"></div>

                <div className="events-image-top">
                  <span>RETRACE</span>
                  <span>{event.yearLabel}</span>
                </div>

                <div className="events-image-heading">
                  <span>{event.category}</span>
                  <h2>{event.imageHeading}</h2>
                </div>

                <span className="events-image-number">
                  {event.number}
                </span>

              </div>
            </div>

            {/* EVENT DETAILS */}
            <div className="events-history-content">

              <div className="events-history-topline">

                <span className="events-history-index">
                  EVENT {event.number}
                </span>

                <span
                  className={`events-history-status ${
                    event.status === "UPCOMING EVENT"
                      ? "upcoming"
                      : ""
                  }`}
                >
                  {event.status}
                </span>

              </div>

              {/* DATE */}
              <div className="events-history-date">
                <span>{event.month}</span>
                <strong>{event.day}</strong>
                <span>{event.yearLabel}</span>
              </div>

              {/* TITLE */}
              <h2>{event.title}</h2>

              {/* DESCRIPTION */}
              <p className="events-history-description">
                {event.description}
              </p>

              <div className="events-history-divider"></div>

              {/* TIME AND VENUE */}
              <div className="events-history-meta">

                <div className="events-history-meta-item">
                  <span className="events-meta-label">
                    TIME
                  </span>

                  <span className="events-meta-value">
                    {event.time}
                  </span>
                </div>

                <div className="events-history-meta-item">
                  <span className="events-meta-label">
                    VENUE
                  </span>

                  <span className="events-meta-value">
                    {event.venue}
                  </span>
                </div>

              </div>

              <div className="events-history-bottom">
                <span>ASSEMBLY OF GOD CHURCH SCHOOL</span>
                <span>HALDIA</span>
              </div>

            </div>
          </article>
        ))}

      </section>

      {/* CLOSING SECTION */}
      <section className="events-page-closing">

        <span>THE STORY DOESN'T END HERE</span>

        <h2>
          Here's to the memories <span>yet to be made.</span>
        </h2>

        <p>
          Stay connected with your alumni community and be a part
          of the next chapter.
        </p>

        <Link to="/" className="events-back-home">
          <span>Back to Home</span>
          <ArrowIcon />
        </Link>

      </section>

    </div>
  );
}

// =========================================
// DEFAULT EXPORT
// =========================================

export default EventsPage;
