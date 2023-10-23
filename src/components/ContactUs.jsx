import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import CreateInquiryForm from "./CreateInquiryForm"; // Adjust the import path

const ContactUs = () => {
  return (
    <div>
      {/* Other content for the Contact Us page */}
      <h1>Contact Us</h1>

      {/* Render the CreateInquiryForm component here */}
      <CreateInquiryForm />
    </div>
  );
};

export default ContactUs;
