import "./habit.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Habit = () => {
  return (
    <div className="Habit">
      <div className="habit-section">
        <div className="habit-section-left">
          <h3>Code everyday</h3>
          <span>Incomplete</span>
        </div>
        <div className="habit-icons-group">
          <DoneIcon />
          <CloseIcon />
          <ModeEditIcon />
        </div>
      </div>
    </div>
  );
};

export default Habit;
