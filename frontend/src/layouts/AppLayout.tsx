
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../pages/Dashboard";

import "./AppLayout.css";

function AppLayout() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {isSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Close navigation menu"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="app-main">
        <Topbar
          pageTitle={activePage}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="page-content">
          {activePage === "Dashboard" ? (
            <Dashboard />
          ) : (
            <div className="page-placeholder">
              <span className="page-eyebrow">
                FACTORY INVENTORY
              </span>

              <h2>{activePage}</h2>

              <p>
                This workspace is under development.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
