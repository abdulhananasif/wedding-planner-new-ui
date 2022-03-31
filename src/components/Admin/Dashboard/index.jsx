import React from "react";
import Add from "./Client/Add";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Sidebar />
        <Add />
      </div>
    </>
  );
};

export default AdminDashboard;
