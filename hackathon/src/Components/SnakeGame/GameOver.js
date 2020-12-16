import React, {useEffect} from 'react'

function GameOver(props) {
  useEffect(() => {
    const fetching = async () => {
      const url = "https://backend-social-2021.herokuapp.com/highscore/";
      const user = localStorage.getItem("username");
      console.log(user);
      const data = new FormData();
      data.append("score", props.score);
      const submitScore = await fetch(url + user, {
        method: "POST",
        body: data,
      });
      const submitScore_json = await submitScore.json();
      console.log(submitScore_json);
    };
    fetching();
    console.log(props.score);
  }, [props.highScore]);
  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'>GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div>
          {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
          {props.highScore}
        </div>
        <div id='PressSpaceText'>Press Space to restart</div>
      </div>
    </div>
  )
}

export default GameOver
