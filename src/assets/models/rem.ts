import { useGLTF } from "@react-three/drei";
import { numRemSliced } from "@/constants/constant";

const urlDefault = "/assets/models/proto/sliced_0.glb";
const count = Array.from({ length: numRemSliced }, (_, i) => i);

const map = new Map(
  count.map((count) => {
    const url = `/assets/models/proto/sliced_${count}.glb`;
    useGLTF.preload(url);
    return [count, `/assets/models/proto/sliced_${count}.glb`];
  }),
);

export const SlicedModel = (count: number) => {
  const url = map.get(count);
  const { nodes } = useGLTF(url ? url : urlDefault);
  return {
    geometry: nodes.mesh_0.geometry,
    material: nodes.mesh_0.material,
  };
};
