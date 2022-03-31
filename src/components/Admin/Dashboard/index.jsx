import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const [sidebarHeight, setSidebarHeight] = useState();
  return (
    <>
      <Sidebar setSidebarHeight={setSidebarHeight} />
    </>
  );
};

export default AdminDashboard;
