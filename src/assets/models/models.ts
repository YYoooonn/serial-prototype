import { useGLTF } from "@react-three/drei";
import type { Group, Mesh } from "three";

export const urlButton = "/assets/models/Button.glb";
export const urlArrow = "/assets/models/Arrow.glb";
export const urlProjectTile = "/assets/models/Tile_Project.glb";
export const urlTile = "/assets/models/Tile.glb";
useGLTF.preload(urlButton);
useGLTF.preload(urlArrow);
useGLTF.preload(urlProjectTile);
useGLTF.preload(urlTile);

declare module "three-stdlib" {
  interface GLTF {
    // nodes는 파일 안에 들어있는 이름, 변경하려면 glb 파일이 변경되야함
    nodes: {
      mesh_0: Mesh;
    };
  }
}
