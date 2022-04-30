import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";
import Mockman from "mockman-js";
import Authenticate from "./Screens/Authenticate/Authenticate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route
          path="/"
          element={<Homepage morningHabits={false} archivedHabits={false} />}
        />
        <Route
          path="/login"
          element={
            <Authenticate
              cardTitle="SIGN IN"
              alternate="Create A New Account"
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Authenticate
              cardTitle="SIGN UP"
              alternate="Login With Existing Account"
            />
          }
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
