import "./navbar.css";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "var(--primary-bg)",
    border: "none",
    outline: "none",
    color: "var(--primary-color)",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [habitFrequency, setHabitFrequency] = useState(1);

  return (
    <div className="Navbar">
      <div className="navbar-section">
        <span className="navbar-logo">All Habits</span>
        <ul>
          <li>Today</li>
          <li>
            <button onClick={handleOpen}>
              <span>+</span> Add Habit
            </button>
          </li>
        </ul>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div>
              <span>NAME</span>
              <input type="text" />
            </div>
            <div>
              <span>GOAL</span>
              <div>
                <input
                  onChange={(event) =>
                    setHabitFrequency(
                      (habitFrequency) => (habitFrequency = event.target.value)
                    )
                  }
                  value={habitFrequency}
                  type="number"
                />
                <select>
                  <option>Times</option>
                  <option>Mins</option>
                </select>
                <select>
                  <option>Per Day</option>
                  <option>Per Week</option>
                  <option>Per Month</option>
                </select>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
