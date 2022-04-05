import "./sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="user-profile">
        <AccountCircleIcon fontSize="large" /> Tejas Muthya
      </div>
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
            <AddIcon />
          </span>
          <span>New Habit</span>
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
