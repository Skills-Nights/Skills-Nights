//import './App.css';
import Loader from './components/loader';
import Main from './components/main.js'
import Navbar from './components/navbar';
import Event from './components/eventsPopup'
import Archives from './components/archives'
import Projects from './components/projects'
import ParticleEffect from './components/particleeffect';
import Scene from './components/threejs';
import MainThree from './components/mainThree/mainthree';

function App() {
  return (
    <>
      <Navbar />
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
