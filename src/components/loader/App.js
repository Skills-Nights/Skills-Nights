import React from 'react'
import { VideoScroll } from 'react-video-scroll'
 
const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
  wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
}
 
function App() {
  return (
    <VideoScroll
      onLoad={props =>
        setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
      }
      playbackRate={21}
      style={{ position: 'sticky' }}
    >
      <video
        tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        style={{ width: '100%', objectFit: 'contain' }}
        playsInline
      >
        <source  src="./skills.mp4" autoplay />
      </video>
    </VideoScroll>
  )
}
 
export default App;
