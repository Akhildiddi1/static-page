import React from "react";
import '../assets/css/Login.css'; // Import the CSS file

const LoginScreen = () => {
  return (
    <div className="w-100" style={{ backgroundColor: "#F7F5F9", minHeight: "80vh" }}>
      <div className="container mt-1">
        <div className="row align-items-center">
          {/* Left Side - Hero Section */}
          <div className="col-md-6 text-start mt-5">
            <h2>
              <em>Explore your</em> <span className="text-primary fw-bold">hobby</span> <em>or</em> <span className="text-muted fw-bold">passion</span>
            </h2>
            <br />
            <p className="text-muted text-start">
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              <br />
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
            <img
              src={require('../assets/images/5793404 1.png')}
              alt="Hobby Illustration"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="col-md-6">
            <div className="p-4">
              <div className="d-flex">
                <h4 className="text-secondary text-primary position-relative">
                  Sign In
                  <span className="underline"></span>
                </h4>
                <h4 className="text-center text-secondary ms-5">Join</h4>
              </div>

              {/* OAuth Buttons */}
              <button className="btn btn-light w-100 my-2 border">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> Continue with Google
              </button>
              <button className="btn btn-light w-100 mb-3 border">
                <img src="https://img.icons8.com/ios-filled/16/3b5998/facebook-new.png" alt="Facebook" /> Continue with Facebook
              </button>

              {/* Divider */}
              <div className="d-flex align-items-center my-3 w-100">
                <hr className="flex-grow-1 border-secondary" />
                <span className="mx-2 fw-bold text-dark">Or connect with</span>
                <hr className="flex-grow-1 border-secondary" />
              </div>

              {/* Login Form */}
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control border border-primary" placeholder="Email" />
                </div>
                <div className="mb-3 position-relative">
                  <input type="password" className="form-control border border-primary" placeholder="Password" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="ms-1">Remember me</label>
                  </div>
                  <a href="/" className="text-decoration-none">Forgot password?</a>
                </div>

                {/* Submit Button */}
                <button type="submit" style={{border:"2px solid black"}} className="btn btn-white w-100">Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;