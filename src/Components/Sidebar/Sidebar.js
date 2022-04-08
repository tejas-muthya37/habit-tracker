import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import LightModeIcon from "@mui/icons-material/LightMode";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar-logo">HABITIFY</div>
      <ul>
        <li>
          <span>
            <DashboardIcon />
          </span>
          <span>All Habits</span>
        </li>
        <li>
          <span>
            <LightModeIcon />
          </span>
          <span>Morning</span>
        </li>
        <li>
          <span>
            <ListIcon />
          </span>
          <span>Manage Habits</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
