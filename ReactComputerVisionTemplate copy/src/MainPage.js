import "./Home.css";
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ className, ...props }) => {
  return (
    <div className={"home " + className}>
      <div className="answer">
        <span>
          <span className="answer-span">Learning ASL is </span>
          <span className="answer-span2">imperative</span>
          <span className="answer-span3">
            {" "}
            in a world where hearing impairment conditions are prevalent
          </span>
        </span>{" "}
      </div>
      <div className="song-asl">SongASL</div>
      <img
        className="logonote"
        src="logonote.png"
      />
      <div className="description">
        <span>
          <span className="description-span">A way to learn </span>
          <span className="description-span2">American Sign Language</span>
          <span className="description-span3"> (ASL) through music</span>
        </span>{" "}
      </div>
      <div className="question">Why learn ASL? </div>
      <div className="begin-button">
      <Link to="/second-page">
          <div className="begin">begin!</div>
        </Link>
      </div>
      <img className="homepageasl" src="homepageasl.png" />
    </div>
  );
};

function MainPage() {
  return (
    <div>
      <Home className="home-container" /> {/* use the Home component */}
      {/* ...rest of the MainPage component */}

    </div>
  );
}

export default MainPage;