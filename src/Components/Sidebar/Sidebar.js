import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArchiveIcon from "@mui/icons-material/Archive";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar-logo">HABITIFY</div>
      <ul>
        <li>
          <Link to="/">
            <span>
              <DashboardIcon />
            </span>
            <span>Daily Habits</span>
          </Link>
        </li>
        <li>
          <Link to="/morning-habits">
            <span>
              <LightModeIcon />
            </span>
            <span>Morning</span>
          </Link>
        </li>
        <li>
          <Link to="/archived-habits">
            <span>
              <ArchiveIcon />
            </span>
            <span>Archived</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
