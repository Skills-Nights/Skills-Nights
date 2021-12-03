// import Loader from './components/loader';
// import Main from './components/main.js'
// import Navbar from './components/navbar';
// import Event from './components/eventsPopup'
// import Archives from './components/archives'
// import Projects from './components/projects'
// import ParticleEffect from './components/particleeffect';
// import Scene from './components/threejs';
// import MainThree from './components/mainThree/mainthree';
// import AboutUs from './components/aboutus/AboutUs';
import SectionButton from "./components/sectionButton/SectionButton";
import PageSection from "./components/pageSection/PageSection";

// importing sections data
import sectionsData from "./sectionsData";

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

 
function App() {
  return (
    <div className="app">
      {
        sectionsData.map(section=>{
          return <PageSection key={section.id} {...section}></PageSection>;
        })
      }
    </div>
  );
}
 
// render(<App />, document.getElementById('root'))
// type="video/mp4"
export default App;

