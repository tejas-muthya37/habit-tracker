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
    completedTimes: 0,
    archived: false,
  });

  const compareDates = (habitStartDate) => {
    const displayDateArray = displayDate.split("-");
    const startDateArray = habitStartDate.split("-");

    displayDateArray.map((displayDate) => parseInt(displayDate));

    startDateArray.map((startDate) => parseInt(startDate));

    if (displayDateArray[0] > startDateArray[0]) return true;
    else if (displayDateArray[0] === startDateArray[0]) {
      if (displayDateArray[1] > startDateArray[1]) return true;
      else if (displayDateArray[1] === startDateArray[1]) {
        if (displayDateArray[2] >= startDateArray[2]) return true;
        else return false;
      }
      return false;
    }
    return false;
  };

  return (
    <HabitContext.Provider
      value={{
        habitsArray,
        setHabitsArray,
        displayDate,
        setDisplayDate,
        habitDetails,
        setHabitDetails,
        compareDates,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { useHabit, HabitProvider };
