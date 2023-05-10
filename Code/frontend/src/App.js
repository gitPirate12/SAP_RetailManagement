import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Income from "./components/Income/Income";
import { useGlobalContext } from "./context/globalContext";
import Expense from "./components/Expense/Expense";
import HomePage from "./components/Dashboard/ArDashPage";
import ArSideNav from "./SideBars/ArSideNav";
import MainNavBar from "./SideBars/MainNavBar";
import styled from "styled-components";
import Admin from "./components/marketing/admin";
import MarketingAdd from "./components/marketing/Marketing.Add";
import MarketingDashboard from "./components/marketing/MarketingDashboard";
import MarketingEdit from "./components/marketing/Marketing.Edit";

//import CRM components
//dashboards
import CRMDashboard from "./components/CRMComponents/CRM-dashboard";
import CRMCustomerDashboard from "./components/CRMComponents/CRM-customer-dashboard";
//forms
import CustomerAccountEditForm from "./components/CRMComponents/CRM-customer-account-edit-form";
import CustomerInquiryForm from "./components/CRMComponents/CRM-customer-inquiry-form";
import CustomerFeedbackForm from "./components/CRMComponents/CRM-customer-feedback-form";
import CustomerRegistrationForm from "./components/CRMComponents/CRM-customer-registration-form";
import CRMEmailPortal from "./components/CRMComponents/CRM-email-portal";
import CRMCustomerSignInForm from "./components/CRMComponents/CRM-customer-sign-in-form";
//reports
import CustomerInformationReport from "./components/CRMComponents/CRM-customer-information-report";
import CustomerInquiryReport from "./components/CRMComponents/CRM-customer-inquiry-report";
import CustomerFeedbackReport from "./components/CRMComponents/CRM-customer-feedback-report";
//other
import CRMsingleInquiry from "./components/CRMComponents/CRM-single-inquiry";
import CRMsingleFeedback from "./components/CRMComponents/CRM-single-feedback";
import CustomerAccount from "./components/CRMComponents/CRM-customer-account";

function App() {
  const global = useGlobalContext();
  console.log(global);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <MainNavBar></MainNavBar>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" exact element={<Admin />} />
          <Route path="/addMarketing" exact element={<MarketingAdd />} />
          <Route path="/editMarketing" exact element={<MarketingEdit />} />
          <Route path="/DashMarketing" exact element={<MarketingDashboard />} />
          <Route path="/crm-dashboard-area" exact element={<CRMDashboard />} />
          <Route
            path="/crm-customers-area"
            exact
            element={<CRMCustomerDashboard />}
          />
          <Route
            path="/single_customer_inquiry/:inquiryId"
            element={<CRMsingleInquiry />}
          />
          <Route
            path="/single-customer-suggestion/:feedbackId"
            element={<CRMsingleFeedback />}
          />
          <Route path="/customer-account" element={<CustomerAccount />} />
          <Route
            path="/customer-account-edit-form"
            element={<CustomerAccountEditForm />}
          />
          <Route
            path="/customer-inquiry-form"
            element={<CustomerInquiryForm />}
          />
          <Route
            path="/customer-feedback-form"
            element={<CustomerFeedbackForm />}
          />
          <Route
            path="/customer-information-report"
            element={<CustomerInformationReport />}
          />
          <Route
            path="/customer-inquiry-report"
            element={<CustomerInquiryReport />}
          />
          <Route
            path="/customer-feedback-report"
            element={<CustomerFeedbackReport />}
          />

          <Route
            path="/customer-registration-form"
            element={<CustomerRegistrationForm />}
          />
          <Route path="/send-emails/:email?" element={<CRMEmailPortal />} />
          <Route
            path="/customer-sign-in-portal"
            element={<CRMCustomerSignInForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
