import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <section className="fixed flex items-center justify-center flex-col h-screen left-64 display-size bg-gray-200 bg-gray-800"></section>
    </>
  );
}

export default Dashboard;
