
import {
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

import "./PendingApprovals.css";

const approvals = [
  {
    id: "APR-001",
    title: "Material Outward Request",
    requestedBy: "Production Team",
    date: "03 Nov 2026",
    status: "Pending",
  },
  {
    id: "APR-002",
    title: "Stock Transfer Request",
    requestedBy: "Warehouse Team",
    date: "02 Nov 2026",
    status: "Pending",
  },
  {
    id: "APR-003",
    title: "Material Issue Request",
    requestedBy: "Assembly Team",
    date: "02 Nov 2026",
    status: "Under Review",
  },
];

function PendingApprovals() {
  return (
    <section className="approvals-card">
      <div className="approvals-header">
        <div className="approvals-heading">
          <div className="approvals-icon">
            <ClipboardCheck size={19} />
          </div>

          <div>
            <h3>Pending Approvals</h3>
            <p>Illustrative requests awaiting review</p>
          </div>
        </div>

        <span className="approvals-count">
          {approvals.length}
        </span>
      </div>

      <div className="approvals-list">
        {approvals.map((approval) => (
          <div className="approval-item" key={approval.id}>
            <div className="approval-item-details">
              <span className="approval-reference">
                {approval.id}
              </span>

              <h4>{approval.title}</h4>

              <p>
                {approval.requestedBy} · {approval.date}
              </p>
            </div>

            <span
              className={`approval-status ${
                approval.status === "Pending"
                  ? "pending"
                  : "review"
              }`}
            >
              {approval.status}
            </span>
          </div>
        ))}
      </div>

      <div className="approvals-footer">
        <span>Demo records only</span>
        <ArrowUpRight size={15} />
      </div>
    </section>
  );
}

export default PendingApprovals;
