
import type { LucideIcon } from "lucide-react";
import "./StatCard.css";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  accent,
}: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-title">{title}</span>

        <div
          className="stat-card-icon"
          style={{ backgroundColor: accent }}
        >
          <Icon size={20} />
        </div>
      </div>

      <strong className="stat-card-value">{value}</strong>

      <p className="stat-card-description">{description}</p>
    </article>
  );
}

export default StatCard;
