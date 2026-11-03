
import { AlertTriangle, Package } from "lucide-react";

import "./LowStockItems.css";

const lowStockItems = [
  {
    id: "MAT-001",
    name: "Steel Sheets",
    category: "Raw Material",
    currentStock: 12,
    reorderLevel: 50,
    unit: "pcs",
  },
  {
    id: "MAT-002",
    name: "Copper Wire",
    category: "Electrical Material",
    currentStock: 18,
    reorderLevel: 40,
    unit: "kg",
  },
  {
    id: "MAT-003",
    name: "Industrial Bolts",
    category: "Hardware",
    currentStock: 25,
    reorderLevel: 100,
    unit: "pcs",
  },
];

function LowStockItems() {
  return (
    <section className="low-stock-card">
      <div className="low-stock-header">
        <div className="low-stock-heading">
          <div className="low-stock-icon">
            <AlertTriangle size={19} />
          </div>

          <div>
            <h3>Low Stock Items</h3>
            <p>Materials below reorder level</p>
          </div>
        </div>

        <span className="low-stock-count">
          {lowStockItems.length} Items
        </span>
      </div>

      <div className="low-stock-list">
        {lowStockItems.map((item) => {
          const stockPercentage = Math.min(
            (item.currentStock / item.reorderLevel) * 100,
            100
          );

          return (
            <div className="low-stock-item" key={item.id}>
              <div className="low-stock-item-top">
                <div className="low-stock-item-name">
                  <Package size={17} />

                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.id} · {item.category}</p>
                  </div>
                </div>

                <span className="low-stock-quantity">
                  {item.currentStock} {item.unit}
                </span>
              </div>

              <div className="stock-progress-track">
                <div
                  className="stock-progress-fill"
                  style={{ width: `${stockPercentage}%` }}
                />
              </div>

              <div className="stock-level-details">
                <span>Current stock</span>
                <span>
                  Reorder level: {item.reorderLevel} {item.unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="low-stock-demo-note">
        Illustrative stock figures — not actual inventory data.
      </p>
    </section>
  );
}

export default LowStockItems;
