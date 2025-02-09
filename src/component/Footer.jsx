import React from "react";
import '../assets/css/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          {/* Hobbycue Section */}
          <div className="col-md-3">
            <h6 className="fw-bold">Hobbycue</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="/" className="footer-link">About Us</a></li>
              <li><a href="/" className="footer-link">Our Services</a></li>
              <li><a href="/" className="footer-link">Work with Us</a></li>
              <li><a href="/" className="footer-link">FAQ</a></li>
              <li><a href="/" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* How Do I Section */}
          <div className="col-md-3">
            <h6 className="fw-bold">How Do I</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="/" className="footer-link">Sign Up</a></li>
              <li><a href="/" className="footer-link">Add a Listing</a></li>
              <li><a href="/" className="footer-link">Claim Listing</a></li>
              <li><a href="/" className="footer-link">Post a Query</a></li>
              <li><a href="/" className="footer-link">Add a Blog Post</a></li>
              <li><a href="/" className="footer-link">Other Queries</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="/" className="footer-link">Listings</a></li>
              <li><a href="/" className="footer-link">Blog Posts</a></li>
              <li><a href="/" className="footer-link">Shop / Store</a></li>
              <li><a href="/" className="footer-link">Community</a></li>
            </ul>
          </div>

          {/* Social Media & Invite Section */}
          <div className="col-md-3">
            <h6 className="fw-bold">Social Media</h6>
            <div className="d-flex gap-2 mb-3">
              <img src={require('../assets/images/Group 60.png')} alt="Facebook" className="social-icon" />
              <img src={require('../assets/images/Group 61.png')} alt="Twitter" className="social-icon" />
              <img src={require('../assets/images/Group 62.png')} alt="Instagram" className="social-icon" />
              <img src={require('../assets/images/Group 63.png')} alt="Pinterest" className="social-icon" />
              <img src={require('../assets/images/Group 58.png')} alt="YouTube" className="social-icon" />
              <img src={require('../assets/images/Group 56.png')} alt="Email" className="social-icon" />
            </div>

            <h6 className="fw-bold">Invite Friends</h6>
            <div className="input-group">
              <input type="email" className="form-control border rounded" placeholder="Email ID" />
              <button className="btn btn-primary">Invite</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-muted">
          © Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;