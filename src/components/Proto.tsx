import { animated, config, useSpring } from "@react-spring/three";
import { hoveredMat, defaultMat } from "@/assets/materials";
import { useRef, useState } from "react";
import * as THREE from "three";
import { arrayRemSliced, numRemSliced } from "@/constants/constant";

import { SlicedModel } from "@/assets/models/rem";

type slicedProps = {
  count: number;
  remHovered: boolean;
};

export default function Rem() {
  const [hovered, setHovered] = useState(false);
  return (
    <group
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      {arrayRemSliced.map((_, i) => {
        return <SlicedRem count={i} remHovered={hovered} key={i} />;
      })}
    </group>
  );
}

function SlicedRem(props: slicedProps) {
  const [hovered, setHovered] = useState(false);
  const { geometry, material } = SlicedModel(props.count);
  // const outputMaterial = hovered? hoveredMat: material;
  const outputMaterial = material;
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: config.wobbly,
  });
  const { rotation } = useSpring({
    rotation: props.remHovered ? ((numRemSliced - 1) / 2 - props.count) / 4 : 0,
    config: config.wobbly,
  });
  return (
    <animated.group
      scale={scale}
      position={[0, 0, 0]}
      rotation-y={rotation}
      onPointerOver={(e) => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      <mesh position={[0, 0, 1.5]}>
        <bufferGeometry {...geometry} />
        <material attach={"material"} {...outputMaterial} />
      </mesh>
    </animated.group>
  );
  // const { geometry, material } = SlicedModel();
  // const { scale } = useSpring({
  //   scale: hovered ? 0.003 : 0.002,
  //   config: config.gentle,
  // });
  // const { y } = useSpring({
  //   from: { y: 0 },
  //   to: { y: 6.28 },
  //   config: { duration: 12000 },
  //   loop: true,
  //   pause: !hovered,
  // });
  // return (
  //   <animated.mesh
  //     geometry={geometry}
  //     material={material}
  //     rotation-y={y}
  //     scale={0.0025}
  //     position={[0, 2.5, 0]}
  //     castShadow
  //     onPointerOver={() => {
  //       setHovered(true);
  //     }}
  //     onPointerLeave={() => {
  //       setHovered(false);
  //     }}
  //   />
  // );
}
