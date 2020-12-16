<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'


function Home(props) {
    return (
        // Using React-Bootstrap Grid layout
        <Container fluid id="container" className="">
            <Row>
                <Col id="banner">
                    {/* Welcome Header */}
                    <h1 id="welcome-header"> Welcome to Whyteboard</h1>

                    {/* SVG Picture */}
                    <svg id="f26437e7-89a7-4b5d-86a1-b6b68813c70b" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="769.41145" height="524.37473" viewBox="0 0 769.41145 524.37473"><circle cx="174.75708" cy="6.81334" r="6.81335" fill="#e6e6e6" /><circle cx="209.24609" cy="6.81334" r="6.81335" fill="#e6e6e6" /><circle cx="243.73517" cy="6.81334" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="6.81334" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="6.81334" r="6.81335" fill="#e6e6e6" /><circle cx="174.75708" cy="41.73529" r="6.81335" fill="#e6e6e6" /><circle cx="209.24609" cy="41.73529" r="6.81335" fill="#e6e6e6" /><circle cx="243.73517" cy="41.73529" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="41.73529" r="6.81335" fill="#ffa663" /><circle cx="312.71326" cy="41.73529" r="6.81335" fill="#e6e6e6" /><circle cx="381.69135" cy="41.73529" r="6.81335" fill="#e6e6e6" /><circle cx="174.75708" cy="76.65724" r="6.81335" fill="#e6e6e6" /><circle cx="209.24609" cy="76.65724" r="6.81335" fill="#e6e6e6" /><circle cx="243.73517" cy="76.65724" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="76.65724" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="76.65724" r="6.81335" fill="#e6e6e6" /><circle cx="174.75708" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="209.24609" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="243.73517" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="347.20227" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="381.69135" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="416.18036" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="450.66943" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="485.15845" cy="111.57918" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="146.50113" r="6.81335" fill="#e6e6e6" /><circle cx="347.20227" cy="146.50113" r="6.81335" fill="#ffa663" /><circle cx="381.69135" cy="146.50113" r="6.81335" fill="#e6e6e6" /><circle cx="416.18036" cy="146.50113" r="6.81335" fill="#e6e6e6" /><circle cx="450.66943" cy="146.50113" r="6.81335" fill="#e6e6e6" /><circle cx="485.15845" cy="146.50113" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="181.42308" r="6.81335" fill="#e6e6e6" /><circle cx="347.20227" cy="181.42308" r="6.81335" fill="#e6e6e6" /><circle cx="381.69135" cy="181.42308" r="6.81335" fill="#e6e6e6" /><circle cx="416.18036" cy="181.42308" r="6.81335" fill="#e6e6e6" /><circle cx="450.66943" cy="181.42308" r="6.81335" fill="#ffa663" /><circle cx="485.15845" cy="181.42308" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="347.20227" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="381.69135" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="416.18036" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="450.66943" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="485.15845" cy="216.34503" r="6.81335" fill="#e6e6e6" /><circle cx="174.75708" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="209.24609" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="243.73517" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="312.71326" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="347.20227" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="381.69135" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="416.18036" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="450.66943" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="485.15845" cy="251.26698" r="6.81335" fill="#e6e6e6" /><circle cx="174.75314" cy="286.18785" r="6.81334" fill="#e6e6e6" /><circle cx="209.24609" cy="286.18893" r="6.81335" fill="#e6e6e6" /><circle cx="174.75308" cy="321.1096" r="6.81334" fill="#e6e6e6" /><circle cx="209.24609" cy="321.11087" r="6.81335" fill="#e6e6e6" /><circle cx="278.22418" cy="321.11087" r="6.81335" fill="#e6e6e6" /><path d="M837.29482,268.19654H567.29428a5.00586,5.00586,0,0,1-5-5V196.221a5.00587,5.00587,0,0,1,5-5H837.29482a5.00587,5.00587,0,0,1,5,5v66.97557A5.00586,5.00586,0,0,1,837.29482,268.19654ZM567.29428,193.221a3.00328,3.00328,0,0,0-3,3v66.97557a3.00328,3.00328,0,0,0,3,3H837.29482a3.00328,3.00328,0,0,0,3-3V196.221a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><circle cx="387" cy="41.89587" r="21" fill="#ffa663" /><path d="M650.79428,215.70849a3.5,3.5,0,1,0,0,7h93a3.5,3.5,0,1,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M650.79428,236.70849a3.5,3.5,0,1,0,0,7H815.79434a3.5,3.5,0,1,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M490.29476,404.19654H220.29428a5.00587,5.00587,0,0,1-5-5V332.221a5.00587,5.00587,0,0,1,5-5H490.29476a5.00588,5.00588,0,0,1,5,5v66.97558A5.00587,5.00587,0,0,1,490.29476,404.19654ZM220.29428,329.221a3.00328,3.00328,0,0,0-3,3v66.97558a3.00328,3.00328,0,0,0,3,3H490.29476a3.00328,3.00328,0,0,0,3-3V332.221a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><circle cx="40" cy="177.89587" r="21" fill="#ffa663" /><path d="M303.79428,351.70851a3.5,3.5,0,0,0,0,7h97a3.5,3.5,0,0,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M303.79428,372.70851a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,0,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M734.29476,551.19654H464.29428a5.00587,5.00587,0,0,1-5-5V479.221a5.00587,5.00587,0,0,1,5-5H734.29476a5.00588,5.00588,0,0,1,5,5v66.97558A5.00587,5.00587,0,0,1,734.29476,551.19654ZM464.29428,476.221a3.00328,3.00328,0,0,0-3,3v66.97558a3.00328,3.00328,0,0,0,3,3H734.29476a3.00328,3.00328,0,0,0,3-3V479.221a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-215.29428 -187.81263)" fill="#3f3d56" /><circle cx="284" cy="324.89587" r="21" fill="#ffa663" /><path d="M547.79428,498.70851a3.5,3.5,0,0,0,0,7h89a3.5,3.5,0,0,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M547.79428,519.70851a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,0,0,0-7Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><path d="M879.54366,534.21071c-11.72577,35.17727-59.69483-2.132-59.69483-2.132l12.79175-133.24728c19.18762-14.92374,39.44122-2.132,39.44122-2.132Z" transform="translate(-215.29428 -187.81263)" fill="#e6e6e6" /><polygon points="661.731 464.458 678.076 464.63 673.993 511.745 661.733 511.746 661.731 464.458" fill="#ffb8b8" /><path d="M873.89973,695.555h24.1438a15.40412,15.40412,0,0,1,15.38684,15.38672v.5H873.89973Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><polygon points="617.421 464.458 599.327 464.457 605.159 511.745 617.419 511.746 617.421 464.458" fill="#ffb8b8" /><path d="M796.30891,711.44127v-.5A15.38689,15.38689,0,0,1,811.69636,695.555l24.144.001-.00073,15.88721Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M875.92182,691.39635l-21.413-124.82275-19.8396,123.21386-20.10059,1.1167-5.35986-165.08593.404-.09034c3.32324-.74414,81.53675-17.92285,94.35852,6.65235l.06507.12451L893.33491,691.95787Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><circle cx="637.93377" cy="170.84252" r="24.56103" fill="#ffb8b8" /><path d="M873.86189,544.73717c-2.879-.79736-4.95374-4.10351-6.52906-10.40527-.2716-1.08643-25.772-109.71143-4.20691-129.3916l4.97083-13.80811,6.80261,4.53516c2.40711.02246,27.02075.64551,29.12439,16.42285,2.05933,15.44336,7.66553,118.91308,2.0304,125.34912a1.21859,1.21859,0,0,1-.927.46924c-5.71069,0-7.44421-6.33643-7.85144-8.356-1.35791.5625-5.4021,2.62891-12.04858,9.27539-4.11706,4.11719-7.34521,6.09033-10.01221,6.09033A5.03681,5.03681,0,0,1,873.86189,544.73717Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M820.56135,538.828c-6.64844-6.64844-10.69312-8.71435-12.04858-9.27539-.40723,2.01953-2.14087,8.356-7.85157,8.356a1.21859,1.21859,0,0,1-.927-.46924c-5.63452-6.43555-.02881-109.90527,2.03027-125.34912,2.10376-15.77734,26.71753-16.40039,29.12452-16.42285l6.80273-4.53516,4.9707,13.80811c21.5636,19.67871-3.9353,128.30517-4.20678,129.3916-1.57544,6.30176-3.65015,9.60791-6.52906,10.40527a5.03687,5.03687,0,0,1-1.353.18115C827.90656,544.91832,824.67805,542.94469,820.56135,538.828Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M873.50569,372.6848a25.2045,25.2045,0,0,0-12.20761-45.54c-2.261-.22632-4.6962-.19263-6.57089-1.47671-1.66538-1.14075-2.56235-3.11927-4.09274-4.43557a8.92882,8.92882,0,0,0-6.92633-1.746,25.06232,25.06232,0,0,0-6.96241,2.28755c-5.4461,2.4281-11.23532,5.41651-13.71368,10.83994-2.14673,4.69778-1.19916,10.49066,1.83963,14.66717a20.40969,20.40969,0,0,0,13.01642,7.6857,32.53463,32.53463,0,0,0,15.28491-1.3764c3.24149-1.02,6.44168-2.40994,9.83795-2.52344a13.36948,13.36948,0,0,1,10.14533,22.56406" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M739.63564,518.79392a10.80089,10.80089,0,0,0,10.54768-11.04832l14.32324-24.16626L753.43994,473.4335,738.35223,497.244a10.80119,10.80119,0,0,0,1.28341,21.54995Z" transform="translate(-215.29428 -187.81263)" fill="#ffb8b8" /><path d="M905.80824,545.26863A10.80089,10.80089,0,0,0,908.9576,530.322l-.54831-28.0867-14.75055-2.7981L893.3698,527.624a10.80119,10.80119,0,0,0,12.43844,17.64462Z" transform="translate(-215.29428 -187.81263)" fill="#ffb8b8" /><path d="M743.993,479.93617l-.167-.26541.16543-.2657c21.48348-34.49883,66.57905-77.59335,67.03216-78.0249l.14261-.13567,5.56988-.05712,6.02086,15c-1.87458,3.60607-52.39573,74.10985-59.067,78.78606a4.60271,4.60271,0,0,1-3.68455.69416,9.69861,9.69861,0,0,1-3.12459-1.33052C750.7247,490.52412,744.30819,480.43524,743.993,479.93617Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M890.85188,519.30309a4.57042,4.57042,0,0,1-2.707-2.48438c-3.21644-7.50488,10.56933-102.30224,11.15771-106.334l.11133-.7627,4.6604,2.95313.04565.20117c.13758.60547,13.71253,60.99707,10.033,101.126l-.02637.28711-.26135.12109c-.56067.25977-11.868,5.45264-19.40417,5.45264A10.19225,10.19225,0,0,1,890.85188,519.30309Z" transform="translate(-215.29428 -187.81263)" fill="#2f2e41" /><path d="M983.70572,712.18737h-266a1,1,0,0,1,0-2h266a1,1,0,0,1,0,2Z" transform="translate(-215.29428 -187.81263)" fill="#3f3d56" /></svg>
                </Col>
            </Row>
            <Row>
                <Col className="center mt-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat orci vel sem tempor suscipit. In lectus turpis, feugiat ut auctor et, ornare a dui. Phasellus luctus eget enim nec venenatis. Praesent non accumsan eros. Proin vulputate at elit vel posuere. Curabitur ut sapien a lorem placerat tincidunt nec nec leo. Vivamus ornare suscipit finibus. Donec laoreet tempor placerat. Duis posuere, tellus in suscipit tincidunt, mauris tellus pretium massa, ornare euismod tortor orci non lorem. Etiam consectetur lacus eu diam ullamcorper tempus in congue purus. Nunc pellentesque faucibus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus mollis ut leo id luctus. Vestibulum non sollicitudin neque. Fusce ac tempus est, id aliquet turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                </Col>
            </Row>
        </Container>


    );
>>>>>>> 978c64e019669147135a7be517d85099c3cb6aa1
}

export default Home;
