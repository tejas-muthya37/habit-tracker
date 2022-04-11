import { useContext, createContext, useState } from "react";

const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;

  if (todayDate < 10) todayDate = "0" + todayDate;
  if (todayMonth < 10) todayMonth = "0" + todayMonth;

  var date = today.getFullYear() + "-" + todayMonth + "-" + todayDate;
  const [displayDate, setDisplayDate] = useState(date);

  let habitsArrayLocalStorage = JSON.parse(
    localStorage.getItem("HABITS_ARRAY")
  );
  if (habitsArrayLocalStorage === null) habitsArrayLocalStorage = [];
  const [habitsArray, setHabitsArray] = useState(habitsArrayLocalStorage);

  const [habitDetails, setHabitDetails] = useState({
    name: "",
    status: "",
    startDate: displayDate,
    frequency: 1,
    timesOrMins: "Times",
    repeatCriteria: "Per Day",
    timeOfDay: "Any Time",
  });

  return (
    <HabitContext.Provider
      value={{
        habitsArray,
        setHabitsArray,
        displayDate,
        setDisplayDate,
        habitDetails,
        setHabitDetails,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { useHabit, HabitProvider };
