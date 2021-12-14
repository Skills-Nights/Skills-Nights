import React, {useState} from "react";
import ReactPlayer from "react-player/youtube";
import "./IntroVideo.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useNavigate } from "react-router-dom";

const IntroVideo = (props) => {

  // const handle = useFullScreenHandle();
  const navigate = useNavigate()
  
  const {playerHandle} = props

  const goBack = ()=>{
    navigate("/")
  }

  return (
    <div class="video-player-container">
      {/* <FullScreen handle={playerHandle}> */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=z4VfLxW1ifI"
        controls={true}
        color="blue"
        width="80%"
        height="80%"
        onEnded={goBack}
        config={{
          youtube: {
            playerVars: { color: "white", modestbranding: 1 },
          },
        }}
      />
      {/* </FullScreen> */}

      {/* <button onClick={handle.enter}>Enter fullscreen</button> */}
    </div>
  );
};

export default IntroVideo;
