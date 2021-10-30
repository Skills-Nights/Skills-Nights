// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react'
import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'
import Video from './skills.mp4'

// const setStyles = (wrapperEl, videoEl, playbackRate) => {
//   wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
//   wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
// }

function App() {
  return (
    <VideoScroll
      // onLoad={props =>
      //   setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
      // }
      playbackRate={21}
      style={{ position: 'sticky', }}
    >
      <video
        tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        style={{ width: '100%', objectFit: 'contain', backgroundColor : 'black'}}
        playsInline
        src={Video}
      >
        {/* <source type="video/mp4" src="../skills.mp4" /> */}
      </video>
    </VideoScroll>
  )
}

render(<App />, document.getElementById('root'))