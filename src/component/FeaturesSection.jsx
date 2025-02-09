import React from "react";

const FeaturesSection = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* People Card */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-4 text-primary me-2">👥</span>
              <h5 className="fw-bold mb-0">People</h5>
            </div>
            <p className="text-muted">
              Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn btn-outline-primary">Connect</button>
          </div>
        </div>

        {/* Place Card */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-4 text-success me-2">📍</span>
              <h5 className="fw-bold mb-0">Place</h5>
            </div>
            <p className="text-muted">
              Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
            </p>
            <button className="btn btn-outline-success">Meet up</button>
          </div>
        </div>

        {/* Product Card */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-4 text-danger me-2">🛍️</span>
              <h5 className="fw-bold mb-0">Product</h5>
            </div>
            <p className="text-muted">
              Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
            </p>
            <button className="btn btn-outline-danger">Get it</button>
          </div>
        </div>

        {/* Program Card */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-4 text-info me-2">📅</span>
              <h5 className="fw-bold mb-0">Program</h5>
            </div>
            <p className="text-muted">
              Find events, meetups and workshops related to your hobby. Register or buy tickets online.
            </p>
            <button className="btn btn-outline-info">Attend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
