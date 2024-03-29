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
          <Link to={"/sign-in"}>Sign In</Link>
        </button>
        <button>
          <Link to={"/sign-up"}>Sign Up</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
