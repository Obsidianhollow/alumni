const events = [
  {
    month: "OCT",
    day: "18",
    year: "2026",
    category: "ALUMNI MEET",
    title: "Annual Alumni Gathering",
    description:
      "Reconnect with old friends, meet fellow alumni, and celebrate the community that continues to bring us together.",
    location: "Main Campus",
    time: "06:00 PM",
  },
  {
    month: "NOV",
    day: "07",
    year: "2026",
    category: "NETWORKING",
    title: "Alumni Networking Evening",
    description:
      "An evening of conversations, professional connections, and opportunities to build meaningful relationships.",
    location: "City Convention Centre",
    time: "05:30 PM",
  },
  {
    month: "DEC",
    day: "12",
    year: "2026",
    category: "COMMUNITY",
    title: "Giving Back Together",
    description:
      "Join fellow alumni for an evening focused on community, collaboration, and giving back to future generations.",
    location: "Alumni House",
    time: "04:00 PM",
  },
];

const CalendarIcon = () => (
  <svg
    className="event-meta-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="event-meta-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ArrowIcon = () => (
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

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="container-custom">

        {/* Section Header */}
        <div className="events-header">

          <div className="events-number">
            03
          </div>

          <div className="events-heading-content">

            <div className="eyebrow">
              What's happening
            </div>

            <h2 className="events-title">
              Meet.
              <br />
              Connect.
              <br />
              Belong.
            </h2>

            <p className="events-intro">
              From alumni gatherings to networking evenings,
              discover the events that keep our community connected.
            </p>

          </div>

        </div>


        {/* Events List */}
        <div className="events-list">

          {events.map((event, index) => (
            <article
              className="event-card"
              key={`${event.title}-${event.day}`}
            >

              {/* Date */}
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


              {/* Main Content */}
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


                {/* Meta */}
                <div className="event-meta">

                  <span className="event-meta-item">
                    <CalendarIcon />
                    {event.time}
                  </span>

                  <span className="event-meta-item">
                    <LocationIcon />
                    {event.location}
                  </span>

                </div>

              </div>


              {/* Action */}
              <a
                href="/events"
                className="event-link"
                aria-label={`View details for ${event.title}`}
              >
                <span>View event</span>
                <ArrowIcon />
              </a>

            </article>
          ))}

        </div>


        {/* All Events */}
        <div className="events-footer">

          <a
            href="/events"
            className="events-all-link"
          >
            <span>View all events</span>
            <ArrowIcon />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Events;