import Habit from "../Habit/Habit";
import "./habits.css";
import { useHabit } from "./../../Context/habit-context";
import { useEffect, useState } from "react";
import { useToken } from "../../Context/token-context";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

const Habits = ({ morningHabits, archivedHabits }) => {
  const [quoteOfDay, setQuoteOfDay] = useState("");
  const { habitsArray, displayDate, compareDates } = useHabit();
  const { encodedToken } = useToken();

  // useEffect(() => {
  //   fetch("https://type.fit/api/quotes")
  //     .then((res) => res.json())
  //     .then(function (data) {
  //       let randomIndex = Math.floor(Math.random(1, data.length - 1) * 1000);
  //       setQuoteOfDay(data[randomIndex].text);
  //     });
  // }, []);

  useEffect(() => {
    fetch("/api/habits", {
      method: "GET",
      headers: {
        authorization: encodedToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch("/api/archives", {
      method: "GET",
      headers: {
        authorization: encodedToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="Habits">
      <h3 className="quote-text">{quoteOfDay}</h3>
      {habitsArray.map((habit) => {
        let statusFound = habit.status.find(
          (element) => element.date === displayDate
        );
        return (
          <div key={habit._id}>
            {morningHabits === false &&
              archivedHabits === false &&
              habit.archived === false &&
              (compareDates(habit.startDate) === 2 ||
                compareDates(habit.startDate) === 1) &&
              (compareDates(habit.endDate) === 0 ||
                compareDates(habit.endDate) === 1) && (
                <Habit
                  archivedPage={false}
                  id={habit._id}
                  name={habit.name}
                  status={statusFound ? statusFound.dailyStatus : "Incomplete"}
                />
              )}

            {morningHabits &&
              habit.archived === false &&
              (compareDates(habit.startDate) === 2 ||
                compareDates(habit.startDate) === 1) &&
              (compareDates(habit.endDate) === 0 ||
                compareDates(habit.endDate) === 1) &&
              habit.timeOfDay === "Morning" && (
                <Habit
                  archivedPage={false}
                  id={habit._id}
                  name={habit.name}
                  status={statusFound ? statusFound.dailyStatus : "Incomplete"}
                />
              )}

            {archivedHabits &&
              habit.archived === true &&
              (compareDates(habit.startDate) === 2 ||
                compareDates(habit.startDate) === 1) &&
              (compareDates(habit.endDate) === 0 ||
                compareDates(habit.endDate) === 1) && (
                <Habit
                  archivedPage={true}
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
