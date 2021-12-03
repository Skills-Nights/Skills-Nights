// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
// import { render } from 'react-dom'
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
 
// render(<App />, document.getElementById('root'))
// type="video/mp4"
export default App;

