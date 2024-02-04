import React from 'react';
import { Link } from 'react-router-dom';
import "./SecondPage.css";

const SecondPage = () => {
  const goToHome = () => {
    // define your goToHome function here
  };

  const goToDetectionPage = () => {
    // define your goToDetectionPage function here
  };

  return (
    <div className="secondpag">
      <div className="content-wrapper">
        <img className="logo" src="songASLlogo.png" alt="Logo" style={{cursor:'pointer'}}></img>
        <div className="yt">
          First, learn the song in ASL by watching the video below!
        </div>
        <div className="videoiframe">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/0FcwzMq4iWg?si=oPwXytOCNqfHXao3&amp;start=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
          <div className="dp"> Now, are you ready for a challenge?</div>
        <div className="buttoncont">
        <Link to="/detection">
          <button className="todetect" onClick={goToDetectionPage}>Click to start signing!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;