import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const [sidebarHeight, setSidebarHeight] = useState();
  const [dashboardHeight, setDashboardHeight] = useState();
  const [remainingHeight, setRemainingHeight] = useState();
  const ref = useRef(null);
  useEffect(() => {
    setDashboardHeight(ref.current.clientHeight);
  }, []);
  useEffect(() => {
    if (sidebarHeight && dashboardHeight)
      setRemainingHeight(dashboardHeight - sidebarHeight);
  }, [dashboardHeight, sidebarHeight]);
  return (
    <>
      <div ref={ref} style={{ height: "100vh" }}>
        <Sidebar setSidebarHeight={setSidebarHeight} />
      </div>
    </>
  );
};

export default AdminDashboard;
