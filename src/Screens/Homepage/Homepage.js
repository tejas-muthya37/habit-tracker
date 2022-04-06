import "./homepage.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Sidebar />
      <div className="homepage-body">
        <Navbar />
      </div>
    </div>
  );
};

export default Homepage;
