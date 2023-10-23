// Layout.jsx
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      {children}
    </div>
  );
};

export default Layout;
