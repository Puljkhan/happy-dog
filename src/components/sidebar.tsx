import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type LinkType = {
  path: string;
  label: string;
};

const linkList = [
  {
    path: "/progress-bar",
    label: "Progress bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
      <NavLink className="sidebar-link" to="/progress-bar">
        Progress bar
      </NavLink>
    </div>
  );
};

export default Sidebar;
