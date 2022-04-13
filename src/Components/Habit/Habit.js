import "./habit.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UndoIcon from "@mui/icons-material/Undo";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import { useHabit } from "./../../Context/habit-context.js";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import { useState } from "react";

const Habit = ({ name, status, id }) => {
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

  const {
    habitsArray,
    setHabitsArray,
    displayDate,
    habitDetails,
    setHabitDetails,
  } = useHabit();

  const habitFound = habitsArray.find((element) => element._id === id);

  console.log(habitFound);

  return (
    <div className="Habit">
      <div className="habit-section">
        <div className="habit-section-left">
          <h3>{name}</h3>
          <span>{status}</span>
        </div>
        <div className="habit-icons-group">
          {status !== "Failed" &&
            status !== "Completed" &&
            habitFound.frequency < 2 && (
              <DoneIcon
                onClick={() => {
                  habitsArray.map((habit, index) => {
                    if (habit._id === id) {
                      habit.status.map((singleStatus) => {
                        if (singleStatus.date === displayDate) {
                          singleStatus.dailyStatus = "Completed";
                        }
                        return true;
                      });
                      setHabitsArray([
                        ...habitsArray.slice(0, index),
                        {
                          ...habit,
                          status: habit.status,
                          completedTimes: habit.completedTimes + 1,
                        },
                        ...habitsArray.slice(index + 1),
                      ]);
                    }
                    return true;
                  });
                }}
              />
            )}
          {status !== "Failed" &&
            status !== "Completed" &&
            habitFound.timesOrMins === "Times" &&
            habitFound.frequency > 1 &&
            habitFound.completedTimes < habitFound.frequency && (
              <PlusOneIcon
                onClick={() => {
                  habitsArray.map((habit, index) => {
                    if (habit._id === id) {
                      habit.status.map((singleStatus) => {
                        if (singleStatus.date === displayDate) {
                          if (habit.completedTimes < habit.frequency - 1) {
                            singleStatus.dailyStatus = "In Progress";
                          } else singleStatus.dailyStatus = "Completed";
                        }
                        return true;
                      });
                      setHabitsArray([
                        ...habitsArray.slice(0, index),
                        {
                          ...habit,
                          status: habit.status,
                          completedTimes: habit.completedTimes + 1,
                        },
                        ...habitsArray.slice(index + 1),
                      ]);
                    }
                    return true;
                  });
                }}
              />
            )}
          {status !== "Failed" && status !== "Completed" && (
            <CloseIcon
              onClick={() => {
                habitsArray.map((habit, index) => {
                  if (habit._id === id) {
                    habit.status.map((singleStatus) => {
                      if (singleStatus.date === displayDate) {
                        singleStatus.dailyStatus = "Failed";
                      }
                      return true;
                    });
                    setHabitsArray([
                      ...habitsArray.slice(0, index),
                      {
                        ...habit,
                        status: habit.status,
                      },
                      ...habitsArray.slice(index + 1),
                    ]);
                  }
                  return true;
                });
              }}
            />
          )}
          {(status === "Completed" || status === "Failed") && (
            <UndoIcon
              onClick={() => {
                habitsArray.map((habit, index) => {
                  if (habit._id === id) {
                    habit.status.map((singleStatus) => {
                      if (singleStatus.date === displayDate) {
                        singleStatus.dailyStatus = "Incomplete";
                      }
                      return true;
                    });
                    setHabitsArray([
                      ...habitsArray.slice(0, index),
                      {
                        ...habit,
                        status: habit.status,
                        completedTimes: 0,
                      },
                      ...habitsArray.slice(index + 1),
                    ]);
                  }
                  return true;
                });
              }}
            />
          )}
          <ModeEditIcon
            onClick={() => {
              habitsArray.map((habit) => {
                if (habit._id === id) {
                  setHabitDetails({
                    name: habit.name,
                    status: habit.status,
                    startDate: habit.startDate,
                    frequency: habit.frequency,
                    timesOrMins: habit.timesOrMins,
                    repeatCriteria: habit.repeatCriteria,
                    timeOfDay: habit.timeOfDay,
                  });
                }
                return true;
              });
              handleOpen();
            }}
          />
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
                  <button
                    onClick={() => {
                      setHabitsArray(
                        habitsArray.filter((habit) => habit._id !== id)
                      );
                      handleClose();
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={(event) => {
                      habitsArray.map((habit, index) => {
                        if (habit._id === id) {
                          setHabitsArray([
                            ...habitsArray.slice(0, index),
                            {
                              ...habit,
                              name: habitDetails.name,
                              frequency: habitDetails.frequency,
                              timesOrMins: habitDetails.timesOrMins,
                              repeatCriteria: habitDetails.repeatCriteria,
                              timeOfDay: habitDetails.timeOfDay,
                              startDate: habitDetails.startDate,
                            },
                            ...habitsArray.slice(index + 1),
                          ]);
                        }
                        return true;
                      });
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
      </div>
    </div>
  );
};

export default Habit;
