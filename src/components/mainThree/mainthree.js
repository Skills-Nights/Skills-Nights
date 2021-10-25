import './mainthree.css';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Section } from './section';
import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass';
import { Canvas, useFrame, extend, useLoader} from "@react-three/fiber";
import { Environment, Html, useTexture, Effects } from '@react-three/drei';
import state from './state.js';
/* import GUIcontrols from './GUIdat'; */
/* import DatGui, {  DatNumber } from "react-dat-gui"; */
extend({ LUTPass });


const Sphere = (props) => {
  const texture = useTexture('./balltexture.png');
    return(
        <mesh castShadow position={[props.spherePosx, props.spherePosy, props.spherePosz]}>
          <sphereGeometry attach='geometry' args={[11, 64, 64]} />
          <meshPhysicalMaterial attach='material' envMapIntensity={0.4} map={texture} clearcoat={0.8} clearcoatRoughness={0} roughness={1} roughness={0.57} metalness={1} />
          <Environment preset="warehouse"/>
        </mesh>
    );
}

const Plane = ()=> {
    return(
      <mesh receiveShadow rotation = {[-Math.PI/2 , 0 , 0]} position={[-75, -27, 0]}>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <meshStandardMaterial attach="material" color="lightblue" />
        <shadowMaterial attach='material' opacity={1} /> 
      </mesh>
    );
}
  
const MainContext = (props)=>{
    return(
      <Section factor={1.5} offset={1}>
        <group position={[0, props.posY , 0]}>
          <Suspense fallback={null}>
            <Sphere spherePosx={props.spherePosx} spherePosy={props.spherePosy} spherePosz={props.spherePosz} />
            <Plane />
          </Suspense>
          <Html fullscreen portal={props.domContent}>
            <div className="container">
              {props.children}
            </div>
          </Html>
        </group>
      </Section>
    );
}

function MainThree(){
    const domContent = useRef();
    const scrollArea = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop);
    useEffect(() => void onScroll({ target: scrollArea.current }), []);  


    const [opts, setOpts] = useState({
      spherePosx: -30,
      spherePosy: 0,
      spherePosz: 0,
    });
  
    return (
      <>
      <Canvas
        shadows
        colorManagement
        camera = {{position: [0,0,120] , fov: 35}}
      >
        <ambientLight intensity = {1} />
        <directionalLight castShadow
            position={[3, 25, 8]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10} 
          />
        <MainContext className="mainContext" domContent={domContent} posY = {115} spherePosx={opts.spherePosx} spherePosy={opts.spherePosy} spherePosz={opts.spherePosz}>
          <div className="container">
            <h1>Skills Nights</h1>
          </div>
        </MainContext>
        <MainContext className="mainContext" domContent={domContent} posY = {0} spherePosx={opts.spherePosx} spherePosy={opts.spherePosy} spherePosz={opts.spherePosz}>
          <div className="container">
            <h1>Events</h1>
          </div>
        </MainContext>
        <MainContext className="mainContext" domContent={domContent} posY = {-114} spherePosx={opts.spherePosx} spherePosy={opts.spherePosy} spherePosz={opts.spherePosz}>
          <div className="container">
            <h1>Archives</h1>
          </div>
        </MainContext>
        <MainContext className="mainContext" domContent={domContent} posY = {-228} spherePosx={opts.spherePosx} spherePosy={opts.spherePosy} spherePosz={opts.spherePosz}>
          <div className="container">
            <h1>Team</h1>
          </div>
        </MainContext>
        <MainContext className="mainContext" domContent={domContent} posY = {-340} spherePosx={opts.spherePosx} spherePosy={opts.spherePosy} spherePosz={opts.spherePosz}>
          <div className="container">
            <h1>Connect With Us</h1>
          </div>
        </MainContext>
      </Canvas>
      {/* <DatGui data={opts} onUpdate={setOpts}>
            <DatNumber path="spherePosx" min={-100} max={100} step={5} />
            <DatNumber path="spherePosy" min={-100} max={100} step={5} />
            <DatNumber path="spherePosz" min={-100} max={100} step={5} /> 
      </DatGui> */}
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} >
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
      </>
    );
}

export default MainThree;