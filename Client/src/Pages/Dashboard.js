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
      <section className="fixed h-screen left-64 display-size bg-gray-200 dark:bg-gray-800 p-9">
        <main>
          <div className="row py-3 d-flex flex-row justify-between items-center">
            <h2 className="font-raleway font-bold text-2xl">Dashboard</h2>
            <i className="fas fa-search fa-lg fa-fw"></i>
            <i className="fas fa-search fa-lg fa-fw"></i>
          </div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
