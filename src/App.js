import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage morningHabits={false} archivedHabits={false} />}
        />
        <Route
          path="/habits/morning"
          element={<Homepage morningHabits={true} />}
        />
        <Route
          path="/habits/archived"
          element={<Homepage archivedHabits={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
