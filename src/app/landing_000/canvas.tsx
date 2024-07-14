import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Text,
  OrbitControls,
  SpotLight,
  Grid,
} from "@react-three/drei";
import * as styles from "@/styles/canvas.css";
import * as THREE from "three";
import { useState } from "react";

const TEXTS = [
  "three body condition",
  "chained elephant",
  "laplace's demon",
  "thick to thin, thin to thick",
  "sweet child o mine",
  "welcome to the black parade",
  "lithium",
  "Lorem ipsum dolor sit amet,",
  "consectetur adipiscing elit,",
  "sed do eiusmod tempor incididunt",
  "ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam,",
  "quis nostrud exercitation ullamco,",
  "laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit",
  "in voluptate velit esse cillum",
  "Lorem ipsum dolor sit amet",
  "consectetur adipiscing elit",
  "Integer ut fermentum diam",
  "smells like teen spirit",
  "thunderstruck",
  "don't look back in anger",
  "hello world",
  "bohemian rhapsody",
  "dune",
  "coca cola zero",
];

export const PRJTCanvas = ({ dark }: { dark: boolean }) => {
  return (
    <div className={styles.canvas} key={"canvas"}>
      <Canvas shadows frameloop="always">
        {/* <ambientLight intensity={1000} color={"#FFFFFF"} /> */}
        <color attach="background" args={dark ? ["#000000"] : ["#FFFFFF"]} />
        <ChainedText texts={TEXTS} dark={dark} />
        <Grids dark={dark} />
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 600]}
          zoom={1}
          fov={1}
          near={0.1}
          far={4000}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

function Grids({ dark }: { dark: boolean }) {
  return (
    <group>
      <group rotation-z={Math.PI / 2}>
        <Grid
          args={[20, 4000]}
          sectionColor={dark ? "white" : "#000000"}
          sectionSize={50}
          sectionThickness={1.5}
          cellThickness={0}
          cellColor={"white"}
          cellSize={5}
          position={[0, -5, 0]}
          side={THREE.DoubleSide}
          fadeDistance={3000}
        />
        <Grid
          args={[20, 4000]}
          sectionColor={dark ? "white" : "#000000"}
          cellThickness={0}
          cellColor={"white"}
          cellSize={5}
          sectionSize={50}
          sectionThickness={1.5}
          position={[0, 5, 0]}
          side={THREE.DoubleSide}
          fadeDistance={3000}
        />
      </group>
      <group>
        <Grid
          args={[10, 4000]}
          sectionColor={dark ? "white" : "#000000"}
          cellThickness={0}
          cellColor={"white"}
          cellSize={5}
          sectionSize={50}
          sectionThickness={1.5}
          position={[0, -10, 0]}
          side={THREE.DoubleSide}
          fadeDistance={3000}
        />
        <Grid
          args={[10, 4000]}
          sectionColor={dark ? "white" : "#000000"}
          cellThickness={0}
          cellColor={"white"}
          cellSize={5}
          sectionSize={50}
          sectionThickness={1.5}
          position={[0, 10, 0]}
          side={THREE.DoubleSide}
          fadeDistance={3000}
        />
      </group>
    </group>
  );
}

function ChainedText({ texts, dark }: { texts: Array<string>; dark: boolean }) {
  const num = TEXTS.length;
  return (
    <group position={[0, 0, 0]}>
      {texts.map((t, i) => {
        const rot = num / 2 - i;
        return (
          <Test
            key={i}
            text={t}
            position={[0, 0.3 * rot, 0]}
            rotation={-0 * rot}
            dark={dark}
          />
        );
      })}
    </group>
  );
}

function Test({
  text,
  position,
  rotation,
  dark,
}: {
  text: string;
  position: [x: number, y: number, z: number];
  rotation?: number;
  dark: boolean;
}) {
  // FIXME : hover not implemented
  const [hovered, setHovered] = useState(false);
  return (
    <group
      position={position}
      rotation-x={rotation ? rotation : 0}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {Array.from({ length: 25 }, (_, i) => 3 * i).map((num) => {
        return (
          <Text
            key={num}
            fontSize={0.2}
            fontWeight={150}
            position={[0, 0, num]}
            color={dark ? "#FFFFFF" : "#000000"}
          >
            {text}
          </Text>
        );
      })}
    </group>
  );
}
