import "./habit.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useHabit } from "./../../Context/habit-context.js";

const Habit = ({ name, status, id }) => {
  const { habitsArray, setHabitsArray, date } = useHabit();
  return (
    <div className="Habit">
      <div className="habit-section">
        <div className="habit-section-left">
          <h3>{name}</h3>
          <span>{status}</span>
        </div>
        <div className="habit-icons-group">
          <DoneIcon
            onClick={() => {
              habitsArray.map((habit, index) => {
                if (habit._id === id) {
                  habit.status.map((singleStatus) => {
                    if (singleStatus.date === date) {
                      singleStatus.dailyStatus = "Completed";
                    }
                    return true;
                  });
                  setHabitsArray([
                    ...habitsArray.splice(0, index),
                    {
                      ...habit,
                      status: habit.status,
                    },
                    ...habitsArray.splice(index + 1),
                  ]);
                }
                return true;
              });
            }}
          />
          <CloseIcon
            onClick={() => {
              habitsArray.map((habit, index) => {
                if (habit._id === id) {
                  habit.status.map((singleStatus) => {
                    if (singleStatus.date === date) {
                      singleStatus.dailyStatus = "Failed";
                    }
                    return true;
                  });
                  setHabitsArray([
                    ...habitsArray.splice(0, index),
                    {
                      ...habit,
                      status: habit.status,
                    },
                    ...habitsArray.splice(index + 1),
                  ]);
                }
                return true;
              });
            }}
          />
          <ModeEditIcon />
        </div>
      </div>
    </div>
  );
};

export default Habit;
