
import { Link } from "react-router-dom";
import "../css/Events.css";

// =========================================
// HOMEPAGE EVENTS DATA
// =========================================

const events = [
  {
    month: "DEC",
    day: "16",
    year: "2023",
    category: "PAST ALUMNI MEET",
    title: "Alumni Meet Retrace 2023",
    description:
      "A milestone in the journey of our alumni community.",
    status: "PAST EVENT",
  },
  {
    month: "DEC",
    day: "21",
    year: "2024",
    category: "PAST ALUMNI MEET",
    title: "Alumni Meet Retrace 2024",
    description:
      "Another chapter in the story of our alumni community.",
    status: "PAST EVENT",
  },
  {
    month: "JAN",
    day: "24",
    year: "2026",
    category: "ALUMNI MEET",
    title: "Alumni Meet Retrace 2026",
    description:
      "A celebration of shared memories, familiar faces and the connections that bring our alumni community together.",
    status: "PAST EVENT",
  },
  {
    month: "JAN",
    day: "09",
    year: "2027",
    category: "UPCOMING ALUMNI MEET",
    title: "Alumni Meet Retrace 2027",
    description:
      "The next chapter of our alumni journey. Another opportunity to reconnect and create new memories.",
    status: "UPCOMING EVENT",
  },
];

// =========================================
// ARROW ICON
// =========================================

function ArrowIcon() {
  return (
    <svg
      className="event-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

// =========================================
// HOMEPAGE EVENTS COMPONENT
// =========================================

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="container-custom">

        {/* SECTION HEADER */}
        <div className="events-header">

          <div className="events-number">
            <span>03</span>
            <span className="events-number-line"></span>
          </div>

          <div className="events-heading-content">

            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Our alumni journey
            </div>

            <h2 className="events-title">
              Meet. Connect. <span>Belong.</span>
            </h2>

            <p className="events-intro">
              Every reunion adds a new chapter to our story.
              Explore the journey of Alumni Meet Retrace and
              the gatherings that keep our community connected.
            </p>

          </div>
        </div>

        {/* EVENTS LIST */}
        <div className="events-list">

          {events.map((event) => (
            <article
              className="event-card"
              key={`${event.title}-${event.year}`}
            >

              {/* EVENT DATE */}
              <div className="event-date">

                <span className="event-month">
                  {event.month}
                </span>

                <span className="event-day">
                  {event.day}
                </span>

                <span className="event-year">
                  {event.year}
                </span>

              </div>

              {/* EVENT INFORMATION */}
              <div className="event-content">

                <div className="event-category">
                  {event.category}
                </div>

                <h3 className="event-title">
                  {event.title}
                </h3>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-meta">
                  <span className="event-meta-item">
                    {event.status}
                  </span>
                </div>

              </div>

              {/* VIEW EVENT */}
              <Link
                to="/events"
                className="event-link"
                aria-label={`Explore ${event.title}`}
              >
                <span>View event</span>
                <ArrowIcon />
              </Link>

            </article>
          ))}

        </div>

        {/* EXPLORE ALL EVENTS */}
        <div className="events-footer">

          <Link
            to="/events"
            className="events-all-link"
          >
            <span>Explore all events</span>
            <ArrowIcon />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Events;
