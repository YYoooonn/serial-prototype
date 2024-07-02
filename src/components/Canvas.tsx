import { Canvas } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  Text,
  Text3D,
} from "@react-three/drei";
import * as styles from "@/styles/canvas.css";
import Rem from "./Proto";

export const PRJTCanvas = () => {
  return (
    <div className={styles.canvas} key={"canvas"}>
      <Canvas shadows frameloop="always">
        <ambientLight intensity={10} color={"#000000"} />
        <SpotLight
          opacity={0.3}
          attenuation={10}
          penumbra={1}
          anglePower={3}
          angle={1}
          intensity={30}
          distance={25}
          position={[0, 5, 5]}
          color={"#FFFFFF"}
        />
        <color attach="background" args={["#000000"]} />
        <Rem />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
          zoom={1}
          near={0.1}
          far={1000}
          rotation={[0, 0, 0]}
        />
        <OrbitControls enabled enablePan enableRotate enableZoom={true} />
      </Canvas>
    </div>
  );
};

function Test() {
  return (
    <Center top>
      <Text3D
        font="/assets/fonts_json/helvetiker_regular.typeface.json"
        scale={1.5}
        receiveShadow
        castShadow
      >
        yyoooonn
        <meshPhysicalMaterial color={"#FFFFFF"} />
      </Text3D>
    </Center>
  );
}
