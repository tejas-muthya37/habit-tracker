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

  const today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;

  if (todayDate < 10) todayDate = "0" + todayDate;
  if (todayMonth < 10) todayMonth = "0" + todayMonth;

  var date = today.getFullYear() + "-" + todayMonth + "-" + todayDate;

  const [habitDetails, setHabitDetails] = useState({
    name: "",
    status: "",
    startDate: date,
    frequency: 1,
    timesOrMins: "Times",
    repeatCriteria: "Per Day",
    timeOfDay: "Any Time",
  });

  const [displayDate, setDisplayDate] = useState(date);

  return (
    <div className="Navbar">
      <div className="navbar-section">
        <span className="navbar-logo">All Habits</span>
        <ul>
          <li>
            <input
              value={displayDate}
              onChange={(event) => setDisplayDate(event.target.value)}
              type="date"
              id="date-input"
            />
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
                <input
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      name: event.target.value,
                    })
                  }
                  type="text"
                  value={habitDetails.name}
                />
              </div>
            </div>
            <div className="input-groups">
              <span>Goal</span>
              <div className="goal-details">
                <input
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      frequency: parseInt(event.target.value),
                    })
                  }
                  value={habitDetails.frequency}
                  type="number"
                  min="1"
                />
                <select
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      timesOrMins: event.target.value,
                    })
                  }
                >
                  <option>Times</option>
                  <option>Mins</option>
                </select>
                <select
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      repeatCriteria: event.target.value,
                    })
                  }
                >
                  <option>Per Day</option>
                  <option>Per Week</option>
                  <option>Per Month</option>
                </select>
              </div>
            </div>
            <div className="input-groups-parent">
              <div className="input-groups">
                <span>Time of Day</span>
                <select
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      timeOfDay: event.target.value,
                    })
                  }
                >
                  <option>Any Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="input-groups">
                <span>Start Date</span>
                <input
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      startDate: event.target.value,
                    })
                  }
                  type="date"
                  value={habitDetails.startDate}
                />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleClose}>Cancel</button>
              <button
                onClick={(event) => {
                  console.log(
                    `${habitDetails.name} ${habitDetails.frequency} ${habitDetails.timesOrMins} ${habitDetails.repeatCriteria} ${habitDetails.timeOfDay} ${habitDetails.startDate}`
                  );
                  event.preventDefault();
                }}
              >
                Save
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
