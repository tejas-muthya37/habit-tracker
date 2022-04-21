import "./navbar.css";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { useHabit } from "../../Context/habit-context";
import uuid from "react-uuid";

const Navbar = () => {
  const {
    habitsArray,
    setHabitsArray,
    displayDate,
    setDisplayDate,
    habitDetails,
    setHabitDetails,
  } = useHabit();

  useEffect(() => {
    localStorage.setItem("HABITS_ARRAY", JSON.stringify(habitsArray));
  }, [habitsArray]);

  const [navHeader, setNavHeader] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/") setNavHeader("Daily Habits");
    else if (window.location.pathname === "/habits/morning")
      setNavHeader("Morning");
    else setNavHeader("Archived");
  }, [window.location.pathname]);

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
    p: 3,
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.3rem",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Navbar">
      <div className="navbar-section">
        <span className="navbar-logo">{navHeader}</span>
        <ul>
          <li>
            <input
              value={displayDate}
              onChange={(event) => {
                setDisplayDate(event.target.value);
                let dateFound;
                habitsArray.map((habit, index) => {
                  dateFound = habit.status.find(
                    (element) => element.date === event.target.value
                  );
                  if (!dateFound) {
                    setHabitsArray([
                      ...habitsArray.splice(0, index),
                      {
                        ...habit,
                        status: [
                          ...habit.status,
                          {
                            date: event.target.value,
                            dailyStatus: "Incomplete",
                          },
                        ],
                      },
                      ...habitsArray.splice(index + 1),
                    ]);
                  }
                  return true;
                });
              }}
              type="date"
              id="date-input"
            />
          </li>
          <li>
            <button
              onClick={() => {
                setHabitDetails({
                  name: "",
                  status: "",
                  startDate: displayDate,
                  endDate: displayDate,
                  frequency: 1,
                  timesOrMins: "Times",
                  repeatCriteria: "Per Day",
                  timeOfDay: "Any Time",
                });
                handleOpen();
              }}
            >
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
            </div>
            <div className="input-groups-parent">
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
              <div className="input-groups">
                <span>End Date</span>
                <input
                  onChange={(event) =>
                    setHabitDetails({
                      ...habitDetails,
                      endDate: event.target.value,
                    })
                  }
                  type="date"
                  value={habitDetails.endDate}
                />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleClose}>Cancel</button>
              <button
                onClick={(event) => {
                  setHabitsArray([
                    ...habitsArray,
                    {
                      _id: uuid(),
                      name: habitDetails.name,
                      frequency: habitDetails.frequency,
                      timesOrMins: habitDetails.timesOrMins,
                      repeatCriteria: habitDetails.repeatCriteria,
                      timeOfDay: habitDetails.timeOfDay,
                      startDate: habitDetails.startDate,
                      endDate: habitDetails.endDate,
                      archived: false,
                      status: [
                        {
                          date: displayDate,
                          dailyStatus: "Incomplete",
                        },
                      ],
                      completedTimes: 0,
                    },
                  ]);
                  event.preventDefault();
                  handleClose();
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
