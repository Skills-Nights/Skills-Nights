import React from 'react'
import PageSection from "./components/pageSection/PageSection";
import ConnectWithUs from './components/connectWithUs/ConnectWithUs';

// importing sections data
import sectionsData from "./sectionsData";

 
const App = ()=>{
  return (
    <div className="app">
    {sectionsData.map((section) => {
      return <PageSection key={section.id} {...section}></PageSection>;
    })}
    <ConnectWithUs></ConnectWithUs>
  </div>
  )
}

export default App;

