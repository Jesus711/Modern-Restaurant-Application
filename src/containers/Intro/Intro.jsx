import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef(); 

  // Changes the state playVideo by inverting the prev state to new state, if true then false if false then true
  const handleVideo = () => {
    
    // On Initial click to play, playVideo gets updated to True, so the component will re-render with playVideo = true
    // Re-render will happen after this function finishes executing
    // Changing the play button to pause button
    setplayVideo((prevPlayVideo) => !prevPlayVideo)

    // handleVideo function will continue to execute causing the video to start playing
    // Next time or when the pause button is clicked, playVideo is updated to false
    // Execution of the function continues with playVideo being True, pausing the video
    if (playVideo) {
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video 
        src={meal}
        ref= {vidRef}
        type="video/mp4"
        loop
        controls = {false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {/* If the video is playing show pause button else show play button */}
          {playVideo 
            ? <BsPauseFill color="#FFF" fontSize={30} /> 
            : <BsFillPlayFill color="#FFF" fontSize={30} />
          }
        </div>
      </div>
    </div>
)}

export default Intro;
