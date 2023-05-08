import React, { Component } from "react";
import "../../styles/CRMstyles/customer-profile.css";

class CustomerAccount extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="profile-pic">
            <img />
          </div>

          <h2>SAP Customer Account</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="customer_name" disabled />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="customer_email" disabled />

          <label htmlFor="contact">Contact Number:</label>
          <input type="tel" id="contact" name="customer_contact" disabled />

          <label htmlFor="address">Home Address:</label>
          <input
            type="text"
            id="address"
            name="customer_home_address"
            disabled
          />

          <form
            action="/upload-profile-picture"
            method="post"
            encType="multipart/form-data"
          >
            <label htmlFor="customer-profile-picture">
              Upload Profile Picture:
            </label>
            <input
              type="file"
              id="profile-picture"
              name="customer_profile_picture"
            />
            <button className="btn" id="upload-profile-picture-btn">
              Upload Profile Picture
            </button>
          </form>

          <div className="button-group">
            <button className="btn" id="edit-profile-btn">
              Edit Profile
            </button>
            <button className="btn" id="your-inquiries-btn">
              Your Inquiries
            </button>

            <button className="btn" id="your-suggestions-btn">
              Your Suggestions
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerAccount;
