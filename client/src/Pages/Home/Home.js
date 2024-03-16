import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Home page.</h1>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
        <button>
          <Link to={"/register"}>Sign Up</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
