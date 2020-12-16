import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SnakeGame from "./SnakeGame/SnakeGame";
import LeaderBoard from "./LeaderBoard";
import "./css/Home.css";

function Home(props) {
  const [logedin, setLogedin] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("username");
    setLogedin(user);
  });
  return (
    <div>
      <div className="main">
        <div className="intro">
          <div className="leaderboard">
            <aside>
              <LeaderBoard />
            </aside>
          </div>
          <h1>WELCOME {logedin ? logedin : "TO D.J.A.I.M.M.I."} !!! </h1>
          <p>Do you have what it takes to join the Leaderboard ? </p>
          <p>Do you want to be the verry best ? </p>
          <p>Find out by joining in !</p>
          <Link to="/signup">
            <p>Join in the Fun</p>
          </Link>
        </div>

        <SnakeGame />
      </div>
    </div>
  );
}

export default Home;
