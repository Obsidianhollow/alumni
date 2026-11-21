
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./membership.css";

const initialApplications = [
  {
    id: "AGCS-2026-0001",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    mobile: "9876543210",
    passingYear: "2023",
    profession: "Software Engineer",
    city: "Kolkata",
    submitted: "21 Nov 2026",
    status: "Pending",
    payment: "Not Paid",
  },
  {
    id: "AGCS-2026-0002",
    name: "Riya Das",
    email: "riya@example.com",
    mobile: "9876543211",
    passingYear: "2022",
    profession: "Teacher",
    city: "Haldia",
    submitted: "20 Nov 2026",
    status: "Approved",
    payment: "Not Paid",
  },
  {
    id: "AGCS-2026-0003",
    name: "Rahul Roy",
    email: "rahul@example.com",
    mobile: "9876543212",
    passingYear: "2021",
    profession: "Business Owner",
    city: "Kolkata",
    submitted: "19 Nov 2026",
    status: "Rejected",
    payment: "Not Paid",
  },
  {
    id: "AGCS-2026-0004",
    name: "Meera Singh",
    email: "meera@example.com",
    mobile: "9876543213",
    passingYear: "2020",
    profession: "Designer",
    city: "Delhi",
    submitted: "18 Nov 2026",
    status: "Approved",
    payment: "Paid",
  },
];

function Admin() {
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const stats = useMemo(() => ({
    total: applications.length,
    pending: applications.filter((app) => app.status === "Pending").length,
    approved: applications.filter((app) => app.status === "Approved").length,
    rejected: applications.filter((app) => app.status === "Rejected").length,
    paid: applications.filter((app) => app.payment === "Paid").length,
  }), [applications]);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch = [
        app.name,
        app.email,
        app.id,
        app.mobile,
      ].some((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      );

      const matchesFilter =
        filter === "All" || app.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [applications, search, filter]);

  const updateStatus = (id, newStatus) => {
    setApplications((previous) =>
      previous.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );

    setSelectedApplication((previous) =>
      previous?.id === id
        ? { ...previous, status: newStatus }
        : previous
    );
  };

  const verifyPayment = (id) => {
    setApplications((previous) =>
      previous.map((app) =>
        app.id === id ? { ...app, payment: "Paid" } : app
      )
    );

    setSelectedApplication((previous) =>
      previous?.id === id
        ? { ...previous, payment: "Paid" }
        : previous
    );
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="membership-admin-page">

      {/* ADMIN HEADER */}
      <header className="membership-admin-header">
        <div>
          <span className="membership-admin-eyebrow">
            AGCS HALDIA ALUMNI ASSOCIATION
          </span>
          <h1>Admin Dashboard</h1>
          <p>Membership application management portal</p>
        </div>

        <div className="membership-admin-header-right">
          <span className="membership-admin-demo-badge">
            DEMO MODE
          </span>
          <Link to="/" className="membership-admin-home-link">
            ← Back to Website
          </Link>
        </div>
      </header>

      <main className="membership-admin-container">

        {/* WELCOME */}
        <section className="membership-admin-welcome">
          <div>
            <span>ADMINISTRATION / MEMBERSHIPS</span>
            <h2>Membership Overview</h2>
            <p>
              Review applications, manage approvals and verify
              membership payments.
            </p>
          </div>

          <div className="membership-admin-fee">
            <small>REGISTRATION FEE</small>
            <strong>₹500</strong>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="membership-admin-stats">

          <div className="membership-admin-stat">
            <span className="membership-admin-stat-icon">▤</span>
            <div>
              <small>TOTAL APPLICATIONS</small>
              <strong>{stats.total}</strong>
            </div>
          </div>

          <div className="membership-admin-stat">
            <span className="membership-admin-stat-icon pending">◷</span>
            <div>
              <small>PENDING REVIEW</small>
              <strong>{stats.pending}</strong>
            </div>
          </div>

          <div className="membership-admin-stat">
            <span className="membership-admin-stat-icon approved">✓</span>
            <div>
              <small>APPROVED</small>
              <strong>{stats.approved}</strong>
            </div>
          </div>

          <div className="membership-admin-stat">
            <span className="membership-admin-stat-icon rejected">×</span>
            <div>
              <small>REJECTED</small>
              <strong>{stats.rejected}</strong>
            </div>
          </div>

          <div className="membership-admin-stat">
            <span className="membership-admin-stat-icon paid">₹</span>
            <div>
              <small>PAYMENTS VERIFIED</small>
              <strong>{stats.paid}</strong>
            </div>
          </div>

        </section>

        {/* APPLICATION MANAGEMENT */}
        <section className="membership-admin-applications">

          <div className="membership-admin-section-heading">
            <div>
              <span>APPLICATION MANAGEMENT</span>
              <h2>Membership Applications</h2>
            </div>

            <small>
              {filteredApplications.length} Records
            </small>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="membership-admin-toolbar">

            <div className="membership-admin-search">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search name, email or application ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter applications by status"
            >
              <option value="All">All Applications</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

          </div>

          {/* APPLICATION TABLE */}
          <div className="membership-admin-table-wrapper">
            <table className="membership-admin-table">
              <thead>
                <tr>
                  <th>APPLICANT</th>
                  <th>REFERENCE ID</th>
                  <th>BATCH</th>
                  <th>APPLICATION STATUS</th>
                  <th>PAYMENT</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredApplications.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="membership-admin-applicant">
                        <strong>{app.name}</strong>
                        <small>{app.email}</small>
                      </div>
                    </td>

                    <td>{app.id}</td>

                    <td>{app.passingYear}</td>

                    <td>
                      <span
                        className={`membership-admin-status ${getStatusClass(app.status)}`}
                      >
                        {app.status}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`membership-admin-status ${
                          app.payment === "Paid" ? "paid" : "unpaid"
                        }`}
                      >
                        {app.payment}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="membership-admin-view-button"
                        onClick={() => setSelectedApplication(app)}
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredApplications.length === 0 && (
                  <tr>
                    <td colSpan="6">
                      <div className="membership-admin-empty">
                        No applications found.
                        Try changing your search or filter.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </section>

        {/* DETAILS PANEL */}
        {selectedApplication && (
          <section className="membership-admin-details">

            <div className="membership-admin-details-heading">
              <div>
                <span>APPLICATION DETAILS</span>
                <h2>{selectedApplication.name}</h2>
                <small>{selectedApplication.id}</small>
              </div>

              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                aria-label="Close application details"
              >
                ×
              </button>
            </div>

            <div className="membership-admin-detail-grid">
              <div>
                <small>EMAIL ADDRESS</small>
                <strong>{selectedApplication.email}</strong>
              </div>

              <div>
                <small>MOBILE NUMBER</small>
                <strong>{selectedApplication.mobile}</strong>
              </div>

              <div>
                <small>PASSING YEAR</small>
                <strong>{selectedApplication.passingYear}</strong>
              </div>

              <div>
                <small>PROFESSION</small>
                <strong>{selectedApplication.profession}</strong>
              </div>

              <div>
                <small>CURRENT CITY</small>
                <strong>{selectedApplication.city}</strong>
              </div>

              <div>
                <small>SUBMISSION DATE</small>
                <strong>{selectedApplication.submitted}</strong>
              </div>
            </div>

            <div className="membership-admin-detail-status">
              <div>
                <small>APPLICATION STATUS</small>
                <strong>{selectedApplication.status}</strong>
              </div>

              <div>
                <small>PAYMENT STATUS</small>
                <strong>{selectedApplication.payment}</strong>
              </div>
            </div>

            <div className="membership-admin-actions">
              <button
                type="button"
                className="membership-admin-approve"
                disabled={
                  selectedApplication.status === "Approved" ||
                  selectedApplication.status === "Rejected"
                }
                onClick={() =>
                  updateStatus(selectedApplication.id, "Approved")
                }
              >
                ✓ Approve Application
              </button>

              <button
                type="button"
                className="membership-admin-reject"
                disabled={
                  selectedApplication.status === "Rejected" ||
                  selectedApplication.payment === "Paid"
                }
                onClick={() =>
                  updateStatus(selectedApplication.id, "Rejected")
                }
              >
                × Reject Application
              </button>

              <button
                type="button"
                className="membership-admin-verify"
                disabled={
                  selectedApplication.status !== "Approved" ||
                  selectedApplication.payment === "Paid"
                }
                onClick={() =>
                  verifyPayment(selectedApplication.id)
                }
              >
                ₹ Verify Payment
              </button>
            </div>

            <p className="membership-admin-action-note">
              Demo only: changes are stored temporarily in this page's
              React state and will reset when the page reloads.
            </p>

          </section>
        )}

        {/* ADMIN FOOTER */}
        <footer className="membership-admin-footer">
          <p>
            AGCS Haldia Alumni Association
          </p>
          <span>Membership Administration Portal · Frontend Demo</span>
        </footer>

      </main>
    </div>
  );
}

export default Admin;
