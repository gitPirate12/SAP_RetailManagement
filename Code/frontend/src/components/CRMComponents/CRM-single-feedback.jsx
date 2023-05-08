import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "../../styles/CRMstyles/customer-registration-form.css";

function CRMsingleFeedback() {
  const { feedbackId } = useParams();
  const [singleCustomerFeedback, setSingleCustomerFeedaback] = useState([]);

  const getSingleCustomerFeedback = async (feedbackId) => {
    const response = await Axios.get(
      `http://localhost:5000/single-customer-suggestion/${feedbackId}`
    );
    setSingleCustomerFeedaback(response.data);
  };

  useEffect(() => {
    if (feedbackId) {
      getSingleCustomerFeedback(feedbackId);
    } //end if
  }, [feedbackId]);
  return (
    <div>
      <div class="container mt-4">
        <h2>Customer Feedback</h2>
        <form action="" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              value={singleCustomerFeedback.customer_name}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              value={singleCustomerFeedback.customer_email}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="contact">Contact:</label>
            <input
              type="tel"
              class="form-control"
              value={singleCustomerFeedback.customer_contact}
              disabled
            />
          </div>

          <div class="form-group">
            <label for="inquiry">Feedback:</label>
            <textarea
              class="form-control"
              id="inquiry"
              rows="5"
              value={singleCustomerFeedback.suggestion_description}
              disabled
            />
          </div>
          <Link to={`/send-emails/${singleCustomerFeedback.customer_email}`}>
            <button type="submit" class="btn btn-primary">
              Reply
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CRMsingleFeedback;
