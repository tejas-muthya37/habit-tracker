import Habit from "../Habit/Habit";
import "./habits.css";
import { useHabit } from "./../../Context/habit-context";

const Habits = () => {
  const { habitsArray, displayDate } = useHabit();
  return (
    <div className="Habits">
      {habitsArray.map((habit) => {
        let statusFound = habit.status.find(
          (element) => element.date === displayDate
        );
        return (
          <Habit
            key={habit._id}
            id={habit._id}
            name={habit.name}
            status={statusFound ? statusFound.dailyStatus : "Incomplete"}
          />
        );
      })}
    </div>
  );
};

export default Habits;
