import React, { useState } from "react";

export default function EventInvitation() {
  const [interestedCount, setInterestedCount] = useState(0);
  const [goingCount, setGoingCount] = useState(0);
  const [interestedHovered, setInterestedHovered] = useState(false);
  const [goingHovered, setGoingHovered] = useState(false);

  // Define handleInterestedClick() here 💖
  function handleInterestedClick(){
    setInterestedCount(interestedCount => interestedCount + 1);
  }

  // Define handleGoingClick() here 💖
  function handleGoingClick(){
    setGoingCount(goingCount => goingCount + 1)
  }

  // Define handleInterestedKeyDown() here 💖
  function handleInterestedKeyDown(e){
    if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.backgroundColor = "#000112";
    e.target.style.color = "white";
    }
  }

  // Define handleInterestedKeyUp() here 💖
  function handleInterestedKeyUp(e){
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
  }

  // Define handleGoingKeyDown() here 💖
  function handleGoingKeyDown(e){
    if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.backgroundColor = "#000112";
    e.target.style.color = "white";
    }
  }

  // Define handleGoingKeyUp() here 💖
  function handleGoingKeyUp(e){
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
  }

  // Define handleInterestedMouseEnter() here 💖
  function handleInterestedMouseEnter(){
    setInterestedHovered(true);
  }

  // Define handleInterestedMouseLeave() here 💖
  function handleInterestedMouseLeave(){
    setInterestedHovered(false);
  }

  // Define handleGoingMouseEnter() here 💖
  function handleGoingMouseEnter(){
    setGoingHovered(true);
  }

  // Define handleGoingMouseLeave() here 💖
  function handleGoingMouseLeave(){
    setGoingHovered(false);
  }
    
  // Define handleInterestedFocus() here 💖\
  function handleInterestedFocus(){
    setInterestedHovered(true);
  }

  // Define handleInterestedBlur() here 💖
  function handleInterestedBlur(){
    setInterestedHovered(false);
  }
    
  // Define handleGoingFocus() here 💖
  function handleGoingFocus(){
    setGoingHovered(true);
  }

  // Define handleGoingBlur() here 💖
  function handleGoingBlur(){
    setGoingHovered(false);
  }
  
  return (
    <div className="container">
      <div className="hero-image">
        <img
          src="https://i.imgur.com/LAi9iHS.jpeg"
          alt="Event"
          style={{ height: "200px" }}
        />
      </div>
      <div className="description">
        <h2>You're invited to WaterFest! 🏝️</h2>
        <p>
          The hardest part is showing up. After you're here, you've already won.
          Join other winners like you for a weekend of fun and relaxation!
        </p>
      </div>
      <div className="buttons-container">
        <button
          tabIndex="0"
          className={`interested-button ${interestedHovered ? "hovered" : ""}`}
          onClick={handleInterestedClick}
          onMouseEnter={handleInterestedMouseEnter}
          onMouseLeave={handleInterestedMouseLeave}
          onFocus={handleInterestedFocus}
          onBlur = {handleInterestedBlur}
          onKeyDown={handleInterestedKeyDown}
          onKeyUp={handleInterestedKeyUp}
        >
          Interested ({interestedCount})
        </button>
        <button
          tabIndex="0"
          className={`going-button ${goingHovered ? "hovered" : ""}`}
          onClick={handleGoingClick}
          onMouseEnter={handleGoingMouseEnter}
          onMouseLeave={handleGoingMouseLeave}
          onFocus={handleGoingFocus}
          onBlur={handleGoingBlur}
          onKeyDown={handleGoingKeyDown}
          onKeyUp={handleGoingKeyUp}
        >
          Going ({goingCount})
        </button>
      </div>
    </div>
  );
}
