import Navbar from "@/components/core/Navbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
