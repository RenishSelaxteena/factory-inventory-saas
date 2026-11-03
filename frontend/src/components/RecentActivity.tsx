
import { ArrowUpRight } from "lucide-react";
import "./RecentActivity.css";

const activities = [
  {
    id: "ACT-001",
    description: "Material received",
    material: "Steel Sheets",
    date: "03 Nov 2026",
    status: "Completed",
  },
  {
    id: "ACT-002",
    description: "Stock transfer",
    material: "Copper Wire",
    date: "03 Nov 2026",
    status: "Pending",
  },
  {
    id: "ACT-003",
    description: "Material received",
    material: "Aluminium Rods",
    date: "02 Nov 2026",
    status: "Completed",
  },
  {
    id: "ACT-004",
    description: "Outward request",
    material: "Industrial Bolts",
    date: "02 Nov 2026",
    status: "Processing",
  },
];

function RecentActivity() {
  return (
    <section className="activity-card">
      <div className="activity-header">
        <div>
          <h3>Recent Inventory Activity</h3>
          <p>Illustrative activity records</p>
        </div>

        <button
          type="button"
          className="activity-view-button"
          disabled
          title="Activity history is not available yet"
        >
          View all <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="activity-table-wrapper">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Activity</th>
              <th>Material</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="activity-reference">
                  {activity.id}
                </td>
                <td>{activity.description}</td>
                <td>{activity.material}</td>
                <td>{activity.date}</td>
                <td>
                  <span
                    className={`activity-status ${activity.status.toLowerCase()}`}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="activity-demo-note">
        Demo records only — not actual inventory transactions.
      </p>
    </section>
  );
}

export default RecentActivity;
