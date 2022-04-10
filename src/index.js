import React from "react";
import ReactDOM from "react-dom";
import { HabitProvider } from "./Context/habit-context";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HabitProvider>
      <App />
    </HabitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
