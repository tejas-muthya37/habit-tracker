import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar-section">
        <span className="navbar-logo">All Habits</span>
        <ul>
          <li>Today</li>
          <li>
            <button>
              <span>+</span> Add Habit
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
