import React from "react";
import '../assets/css/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={require('../assets/images/HobbyCue Logo.png')} alt="logo" className="me-2 logo" />
        </a>

        {/* Mobile Search and Bell Icons */}
        <div className="d-lg-none ms-auto mobile-icons mobile" >
          <button type="button" className="btn">
            <img src={require('../assets/images/icons8_search 1.png')} alt="search" className="icon" />
          </button>
          <button type="button" className="btn ms-3">
            <img src={require('../assets/images/notifications_black_24dp 1.png')} alt="bell" className="icon" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler navbartong" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item d-flex align-items-center d-none d-lg-flex">
              <div className="input-group">
                <input type="search" id="form1" className="form-control custom-input-width" placeholder="Search here..." />
                <button type="button" className="btn btn-primary">
                  <img src={require('../assets/images/icons8_search 1.png')} alt="search" className="icon" />
                </button>
              </div>
            </li>

            {/* Explore Dropdown */}
            <li className="nav-item dropdown ms-3">
              <button className="btn btn-light dropdown-toggle" type="button" id="exploreDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={require('../assets/images/Layer_2.png')} alt="explore" className="icon" /> Explore
              </button>
              <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                <li><a className="dropdown-item" href="/">People - Community</a></li>
                <li><a className="dropdown-item" href="/">Places - Venues</a></li>
                <li><a className="dropdown-item" href="/">Programs - Events</a></li>
                <li><a className="dropdown-item" href="/">Products - Store</a></li>
                <li><a className="dropdown-item" href="/">Blogs</a></li>
              </ul>
            </li>

            {/* Hobbies Dropdown */}
            <li className="nav-item dropdown ms-3">
              <button className="btn btn-light dropdown-toggle" type="button" id="hobbiesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={require('../assets/images/Hobbies.png')} alt="hobbies" className="icon" /> Hobbies
              </button>
              <ul className="dropdown-menu" aria-labelledby="hobbiesDropdown">
                <li><a className="dropdown-item" href="/">Music</a></li>
                <li><a className="dropdown-item" href="/">Sports</a></li>
                <li><a className="dropdown-item" href="/">Art</a></li>
              </ul>
            </li>

            {/* Icons */}
            <li className="nav-item ms-3">
              <button className="btn">
                <img src={require('../assets/images/bookmark_black_24dp 1.png')} alt="bookmark" className="icon" />
              </button>
            </li>
            <li className="nav-item ms-3 d-none d-lg-flex">
              <button className="btn">
                <img src={require('../assets/images/notifications_black_24dp 1.png')} alt="bell" className="icon" />
              </button>
            </li>
            <li className="nav-item ms-3">
              <button className="btn">
                <img src={require('../assets/images/Product 3 (1).png')} alt="cart" className="icon" />
              </button>
            </li>

            {/* Sign In Button */}
            <li className="nav-item ms-3">
              <button className="btn btn-outline-primary">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;