
import React, { useState, useRef, useEffect } from "react";
import "../css/Notice.css";

const Notice = ({ isAdmin = false }) => {
  const [notices, setNotices] = useState([]);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);
  const imageUrls = useRef([]);

  useEffect(() => {
    return () => {
      imageUrls.current.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      setImage(null);
      e.target.value = "";
      alert("Please select a valid image file.");
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!isAdmin) return;

    if (!image || !caption.trim()) {
      alert("Please add both an image and a caption.");
      return;
    }

    const imageUrl = URL.createObjectURL(image);
    imageUrls.current.push(imageUrl);

    const newNotice = {
      id: Date.now(),
      caption: caption.trim(),
      image: imageUrl,
      fileName: image.name,
    };

    setNotices((prev) => [newNotice, ...prev]);

    setCaption("");
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = (id) => {
    if (!isAdmin) return;

    const noticeToDelete = notices.find((item) => item.id === id);

    if (noticeToDelete) {
      URL.revokeObjectURL(noticeToDelete.image);

      imageUrls.current = imageUrls.current.filter(
        (url) => url !== noticeToDelete.image
      );
    }

    setNotices((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="notice-section" id="notices">
      <div className="notice-container">

        {/* Section Heading */}
        <header className="notice-header">
          <span className="notice-subtitle">STAY UPDATED</span>

          <h2 className="notice-title">
            Notice <span>Board.</span>
          </h2>

          <p className="notice-intro">
            Stay informed with the latest announcements,
            updates and important notices.
          </p>
        </header>

        {/* Admin-only Upload Section */}
        {isAdmin && (
          <div className="notice-upload-box">
            <div className="upload-heading">
              <h3>Publish a Notice</h3>
              <p>Upload an image and add a short description.</p>
            </div>

            <form onSubmit={handleUpload}>
              <div className="notice-form-grid">

                <div className="notice-file-wrapper">
                  <label htmlFor="notice-image">
                    Upload Notice Image
                  </label>

                  <input
                    ref={fileInputRef}
                    id="notice-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  {image && (
                    <span className="selected-file">
                      Selected: {image.name}
                    </span>
                  )}
                </div>

                <div className="notice-caption-wrapper">
                  <label htmlFor="notice-caption">
                    Notice Caption
                  </label>

                  <input
                    id="notice-caption"
                    type="text"
                    placeholder="Enter notice title or caption..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>

              </div>

              <button type="submit" className="notice-upload-btn">
                + Publish Notice
              </button>
            </form>
          </div>
        )}

        {/* Published Notices */}
        <div className="notice-grid">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <article className="notice-card" key={notice.id}>

                <div className="notice-image-wrapper">
                  <img
                    src={notice.image}
                    alt={notice.caption}
                  />
                </div>

                <div className="notice-card-content">
                  <h3>{notice.caption}</h3>

                  <div className="notice-card-actions">
                    <a
                      href={notice.image}
                      download={notice.fileName}
                      className="notice-download-btn"
                    >
                      <span>↓</span> Download Notice
                    </a>

                    {isAdmin && (
                      <button
                        type="button"
                        className="notice-delete-btn"
                        onClick={() => handleDelete(notice.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>

              </article>
            ))
          ) : (
            <div className="notice-empty">
              <div className="notice-empty-icon">📋</div>
              <h3>No Notices Available</h3>
              <p>New announcements will appear here.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Notice;
