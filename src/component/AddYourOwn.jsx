import React from "react";
import '../assets/css/addYour.css'

const AddYourOwn = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex align-items-center">
              {/* Icon */}
              <div className="me-3 fs-3 text-primary">
                <i className="bi bi-plus-circle-fill"></i>
              </div>

              {/* Text Content */}
              <div className="flex-grow-1">
                <h5 className="fw-bold"> <img src={require('../assets/images/Add (Landing Page).png')} alt="Logo" className="logo-icon" /> Add your own</h5>
                <p className="text-muted mb-3">
                  Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue? Go ahead and Add your Own page.
                </p>

                {/* Button */}
                <button className="btn btn-outline-primary">Add new</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwn;