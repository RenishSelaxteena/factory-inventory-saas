
import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  ChevronDown,
  Wifi,
  WifiOff,
  Menu,
} from "lucide-react";

import { getHealth } from "../services/api";
import "./Topbar.css";

interface TopbarProps {
  pageTitle: string;
  onMenuClick: () => void;
}

function Topbar({ pageTitle, onMenuClick }: TopbarProps) {
  const [backendStatus, setBackendStatus] = useState<
    "checking" | "connected" | "disconnected"
  >("checking");

  useEffect(() => {
    let isMounted = true;

    getHealth()
      .then(() => {
        if (isMounted) setBackendStatus("connected");
      })
      .catch(() => {
        if (isMounted) setBackendStatus("disconnected");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header className="topbar">
  <div className="topbar-title-group">
    <button
      type="button"
      className="mobile-menu-button"
      onClick={onMenuClick}
      aria-label="Open navigation menu"
    >
      <Menu size={22} />
    </button>

    <div className="topbar-heading">
      <span className="topbar-breadcrumb">
        Workspace / {pageTitle}
      </span>
      <h1>{pageTitle}</h1>
    </div>
  </div>

      <div className="topbar-actions">
        <label className="topbar-search">
          <Search size={17} />
          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search anything"
          />
          <span className="search-shortcut">⌘ K</span>
        </label>

        <div
          className={`backend-indicator ${backendStatus}`}
          role="status"
          aria-live="polite"
        >
          {backendStatus === "connected" ? (
            <Wifi size={15} />
          ) : (
            <WifiOff size={15} />
          )}

          <span>
            {backendStatus === "checking"
              ? "Checking"
              : backendStatus === "connected"
                ? "API Connected"
                : "API Offline"}
          </span>
        </div>

        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <button
          type="button"
          className="profile-button"
          aria-label="User profile"
        >
          <span className="profile-avatar">AD</span>
          <span className="profile-details">
            <strong>Admin User</strong>
            <small>Administrator</small>
          </span>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
