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
    width: 400,
    bgcolor: "var(--primary-bg)",
    border: "none",
    outline: "none",
    color: "var(--primary-color)",
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.3rem",
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
          <li>
            <input type="date" id="date-input" />
          </li>
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
          <form className="navbar-modal">
            <div className="input-groups">
              <span>Name</span>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="input-groups">
              <span>Goal</span>
              <div className="goal-details">
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
            <div className="input-groups-parent">
              <div className="input-groups">
                <span>Time of Day</span>
                <select>
                  <option>Any Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="input-groups">
                <span>Start Date</span>
                <input type="date" />
              </div>
            </div>
            <div className="button-group">
              <button>Cancel</button>
              <button onClick={handleClose}>Save</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
