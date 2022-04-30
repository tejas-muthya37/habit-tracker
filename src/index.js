import React from "react";
import ReactDOM from "react-dom";
import { HabitProvider } from "./Context/habit-context";
import { PomodoroProvider } from "./Context/pomodoro-context";
import { makeServer } from "./server";
import App from "./App";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <HabitProvider>
      <PomodoroProvider>
        <App />
      </PomodoroProvider>
    </HabitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
