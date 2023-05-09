const Customer = require("../models/CRMCustomerModel");

exports.CustomerRegistrationController = (request, response, next) => {
  const name = request.body.customerName;
  const email = request.body.customerEmail;
  const contact_number = request.body.customerContactNumber;
  const home_address = request.body.customerAddress;
  const password = request.body.customerConfirmedPassword;
  const date = new Date();

  //create Customer object
  const customer = new Customer({
    customerName: name,
    customerEmail: email,
    customerContact: contact_number,
    customerAddress: home_address,
    customerPassword: password,
    membershipStartedDate: date,
  });

  //store registration data inside database collection
  customer
    .save()
    .then((result) => {
      console.log("Customer Registered in DB by controller");
      console.log(result);
      response.send("Customer Registration successful!!!");
    })
    .catch((error) => {
      console.log("Customer Registration in DB unsuccessful by controller!!!");
      console.log(error);
    });
};

exports.generateCustomerInformationReportController = (
  request,
  response,
  next
) => {
  const allCustomerData = Customer.find()
    .then((allCustomerData) => {
      console.log("Fetch all customers Data by controller successfully!!!");
      response.send(allCustomerData);
    })
    .catch((error) => {
      console.log(
        "Fetching all customers Data by controller is unsuccessfull!!!"
      );
      console.log(error);
    });
};

exports.customerDeletionController = (request, response, next) => {
  const customer_email = request.params.customer_email;
  console.log("Recived Customer Email as Parameter: " + customer_email);

  Customer.findOneAndDelete({ customerEmail: customer_email })
    .then((result) => {
      console.log("Customer Deleted Successfully by controller");
      response.send("User Deleted Successfully!!!");
    })
    .catch((error) => {
      console.log("Error occured when deleting customer by controller");
      console.log(error);
    });
};
