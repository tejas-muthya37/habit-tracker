import "./navbar.css";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar-section">
        <span className="navbar-logo">All Habits</span>
        <ul>
          <li>Today</li>
          <li>
            <AddIcon fontSize="small" />
            <span>Add New</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
