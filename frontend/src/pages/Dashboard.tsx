
import {
  Package,
  Boxes,
  ClipboardList,
  ArrowLeftRight,
} from "lucide-react";

import StatCard from "../components/StatCard";
import "./Dashboard.css";
import RecentActivity from "../components/RecentActivity";
import PendingApprovals from "../components/PendingApprovals";
import LowStockItems from "../components/LowStockItems";

const demoStats = [
  {
    title: "Total Items",
    value: "1,248",
    description: "Illustrative demo figure",
    icon: Package,
    accent: "#347A65",
  },
  {
    title: "Available Stock",
    value: "8,420",
    description: "Illustrative demo figure",
    icon: Boxes,
    accent: "#D28A66",
  },
  {
    title: "Pending Receipts",
    value: "12",
    description: "Illustrative demo figure",
    icon: ClipboardList,
    accent: "#A94F39",
  },
  {
    title: "Pending Transfers",
    value: "5",
    description: "Illustrative demo figure",
    icon: ArrowLeftRight,
    accent: "#514052",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-intro">
        <div>
          <span className="dashboard-eyebrow">
            OVERVIEW
          </span>

          <h2>Factory Overview</h2>

          <p>
            Monitor your inventory operations from one place.
          </p>
        </div>

        <span className="demo-data-label">
          DEMO DATA
        </span>
      </div>

      <section
        className="stats-grid"
        aria-label="Inventory summary"
      >
        {demoStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section><RecentActivity />
      <div className="dashboard-panels">
  <PendingApprovals />
  <LowStockItems />
</div>

      <p className="dashboard-demo-note">
        These figures are sample data for interface development.
        They do not represent actual factory inventory records.
      </p>
    </div>
  );
}

export default Dashboard;
