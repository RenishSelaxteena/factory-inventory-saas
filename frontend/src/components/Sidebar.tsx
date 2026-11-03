
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  ArrowLeftRight,
  FileInput,
  ShieldCheck,
  Factory,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

const navigationItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Inventory", icon: Package },
  { label: "Material Receipts", icon: ClipboardList },
  { label: "Stock Transfers", icon: ArrowLeftRight },
  { label: "Outward Requests", icon: FileInput },
  { label: "Gate Passes", icon: ShieldCheck },
  { label: "Manufacturing", icon: Factory },
  { label: "Reports", icon: ChartNoAxesCombined },
  { label: "Settings", icon: Settings },
];

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({
  activePage,
  onNavigate,
  isOpen,
  onClose,
}: SidebarProps) {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-brand">
        <div className="brand-mark">
          <Package size={23} />
        </div>

        <div className="brand-text">
          <h2>Factory Inventory</h2>
          <span>MANAGEMENT SYSTEM</span>
        </div>
      </div>

      <div className="sidebar-section-label">
        WORKSPACE
      </div>

      <nav className="sidebar-navigation" aria-label="Main navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.label;

          return (
            <button
              key={item.label}
              type="button"
              className={`sidebar-nav-item ${isActive ? "active" : ""}`}
              onClick={() => handleNavigation(item.label)}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-indicator" />
        <span>Workspace Edition</span>
      </div>
    </aside>
  );
}

export default Sidebar;
