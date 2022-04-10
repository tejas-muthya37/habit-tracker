import Habit from "../Habit/Habit";
import "./habits.css";
import { useHabit } from "./../../Context/habit-context";

const Habits = () => {
  const { habitsArray } = useHabit();
  return (
    <div className="Habits">
      {habitsArray.map((habit) => {
        return (
          <Habit key={habit._id} name={habit.name} status={habit.status} />
        );
      })}
    </div>
  );
};

export default Habits;
