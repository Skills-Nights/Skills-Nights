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

export default App;
