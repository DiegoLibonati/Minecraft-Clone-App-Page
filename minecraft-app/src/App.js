import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FirstPersonCamera } from "./components/FirstPersonCamera";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={0.5}></ambientLight>
        <FirstPersonCamera></FirstPersonCamera>
        <Physics>
          <Player></Player>
          <Ground></Ground>
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}

export default App;
