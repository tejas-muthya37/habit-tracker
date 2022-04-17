import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArchiveIcon from "@mui/icons-material/Archive";
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
          <span>Daily Habits</span>
        </li>
        <li>
          <span>
            <LightModeIcon />
          </span>
          <span>Morning</span>
        </li>
        <li>
          <span>
            <ArchiveIcon />
          </span>
          <span>Archived</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
