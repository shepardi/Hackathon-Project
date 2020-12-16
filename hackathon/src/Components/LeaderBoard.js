import React, { useEffect, useState } from "react";
import "./css/LeaderBoard.css";

function LeaderBoard(props) {
  const [highscores, setHighscores] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const url = "https://backend-social-2021.herokuapp.com/highscore";
      const scores = await fetch(url);
      const scores_json = await scores.json();
      setHighscores(scores_json);
    };
    fetching();
  }, [highscores]);

  const listItems = highscores.map((number) => (
    <li>
      {number.name} : {number.score}
    </li>
  ));

  return highscores != [] ? (
    <div className="aside">
      <h3> Top 6 </h3>
      <ol>{listItems}</ol>
    </div>
  ) : null;
}
export default LeaderBoard;
