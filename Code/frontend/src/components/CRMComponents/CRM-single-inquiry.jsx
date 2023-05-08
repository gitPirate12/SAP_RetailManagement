import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "../../styles/CRMstyles/customer-registration-form.css";

function CRMsingleInquiry() {
  const { inquiryId } = useParams();
  const [singleCustomerInquiry, setSingleCustomerInquiry] = useState([]);

  const getSingleCustomerInquiry = async (inquiryId) => {
    const response = await Axios.get(
      `http://localhost:5000/single-customer-inquiry/${inquiryId}`
    );
    setSingleCustomerInquiry(response.data);
  };

  useEffect(() => {
    if (inquiryId) {
      getSingleCustomerInquiry(inquiryId);
    } //end if
  }, [inquiryId]);
  return (
    <div>
      <div class="container mt-4">
        <h2>Customer Inquiry</h2>
        <form action="" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              value={singleCustomerInquiry.customer_name}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              value={singleCustomerInquiry.customer_email}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="contact">Contact:</label>
            <input
              type="tel"
              class="form-control"
              value={singleCustomerInquiry.customer_contact}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="contact">Inquiry Type:</label>
            <input
              type="tel"
              class="form-control"
              value={singleCustomerInquiry.inquiry_type}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="inquiry">Inquiry:</label>
            <textarea
              class="form-control"
              id="inquiry"
              rows="5"
              value={singleCustomerInquiry.inquiry_description}
              disabled
            />
          </div>
          <Link to={`/send-emails/${singleCustomerInquiry.customer_email}`}>
            <button type="submit" class="btn btn-primary">
              Reply
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CRMsingleInquiry;
