import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import mtaf from "./mtaf.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./Player.css";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(mtaf);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="component">
      <h2>Now Playing</h2>
      <img
        className="music-cover"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/062/131/original/reinhart-julian-79-UsUCtTYA-unsplash.jpg?1673325802"
        alt="song cover"
      />
      <div>
        <h3 className="title">Moth To A Flame</h3>
        <p className="artist-name">The Weeknd</p>
      </div>

      <div>
        <button className="play-button">
          <IconContext.Provider value={{ size: "3em", color: "#37406b" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="play-button" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#37406b" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="play-button" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#37406b" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}

        <button className="play-button">
          <IconContext.Provider value={{ size: "3em", color: "#37406b" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
