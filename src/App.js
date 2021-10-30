//import './App.css';
import Loader from './components/loader';
import Main from './components/main.js'
import Navbar from './components/navbar';
import Event from './components/eventsPopup'
import ArchivesPage1 from './components/ArchivesPage1'

import Projects from './components/projects'
import ParticleEffect from './components/particleeffect';
import Scene from './components/threejs';
import MainThree from './components/mainThree/mainthree';
import ArchivesPage2 from './components/ArchivesPage2';

function App() {
  return (
    <>
      <Navbar />
      
      <ArchivesPage1 />
      <ArchivesPage2 />
      <MainThree />
      {/* <Main />
      <Loader />
      <Event />
      <Projects />
      <ParticleEffect />
      <Scene/>  */}
    </>
  );
}

export default App;
