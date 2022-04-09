import "./homepage.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Habits from "../../Components/Habits/Habits";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Sidebar />
      <div className="homepage-body">
        <Navbar />
        <Habits />
      </div>
    </div>
  );
};

export default Homepage;
