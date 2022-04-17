import Habit from "../Habit/Habit";
import "./habits.css";
import { useHabit } from "./../../Context/habit-context";
import { useEffect, useState } from "react";

const Habits = ({ morningHabits, archivedHabits }) => {
  const [quoteOfDay, setQuoteOfDay] = useState("");
  const { habitsArray, displayDate, compareDates } = useHabit();
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let randomIndex = Math.floor(Math.random(1, data.length - 1) * 1000);
        console.log(randomIndex);
        setQuoteOfDay(data[randomIndex].text);
      });
  }, []);
  return (
    <div className="Habits">
      <h3 className="quote-text">{quoteOfDay}</h3>
      {habitsArray.map((habit) => {
        let statusFound = habit.status.find(
          (element) => element.date === displayDate
        );
        return (
          <div>
            {morningHabits === false &&
              archivedHabits === false &&
              compareDates(habit.startDate) && (
                <Habit
                  key={habit._id}
                  id={habit._id}
                  name={habit.name}
                  status={statusFound ? statusFound.dailyStatus : "Incomplete"}
                />
              )}

            {morningHabits &&
              compareDates(habit.startDate) &&
              habit.timeOfDay === "Morning" && (
                <Habit
                  key={habit._id}
                  id={habit._id}
                  name={habit.name}
                  status={statusFound ? statusFound.dailyStatus : "Incomplete"}
                />
              )}
          </div>
        );
      })}
    </div>
  );
};

export default Habits;
