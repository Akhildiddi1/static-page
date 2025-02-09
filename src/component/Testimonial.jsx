import React from "react";
import '../assets/css/Testimonial.css';

const Testimonial = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0 p-4 bg-light">
        {/* Title */}
        <div className="d-flex align-items-center mb-3">
          <div className="text-white rounded-circle p-2 me-3">
            <img src={require('../assets/images/quote.png')} alt="Quote Icon" className="quote-icon" style={{width:"60px",height:"60px"}}/>
          </div>
          <h2 className="mb-0 fw-bold">Testimonials</h2>
        </div>

        {/* Testimonial Text */}
        <p className="text-muted">
          In a fast-growing and ever-changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like-minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community.
        </p>

        {/* Audio Player and Profile Section */}
        <div className="d-flex align-items-center mt-4 flex-responsive">
          <div className="bg-primary bg-opacity-10 rounded p-3 d-flex align-items-center w-60 me-3 audio-container">
            <audio controls className="audioCon">
              <source src="path/to/your/audio/file.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img
              src={require('../assets/images/Ellipse 12.png')}
              className="audio-logo"
              alt="Logo"
            />
          </div>
          <div className="d-flex align-items-center w-40">
            <img
              src={require('../assets/images/Ellipse 12.png')}
              className="rounded-circle me-3"
              alt="Profile"
            />
            <div>
              <h5 className="mb-0 text-primary fw-bold">Shubha Nagarajan</h5>
              <p className="text-info small mb-0">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;