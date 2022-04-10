import { useContext, createContext, useState } from "react";

const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  let habitsArrayLocalStorage = localStorage.getItem("HABITS_ARRAY");
  if (habitsArrayLocalStorage === null) habitsArrayLocalStorage = [];
  const [habitsArray, setHabitsArray] = useState(habitsArrayLocalStorage);
  return (
    <HabitContext.Provider value={{ habitsArray, setHabitsArray }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { useHabit, HabitProvider };
