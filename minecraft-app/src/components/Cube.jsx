import { useBox } from "@react-three/cannon";
import { useState } from "react";
import * as textures from "../assets/textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({ type: "static", position }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);
  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;

        if (e.nativeEvent.button === 2) {
          removeCube(id);
        } else if (e.nativeEvent.button === 0) {
          if (clickedFace === 0) {
            addCube(x + 1, y, z);
            return;
          } else if (clickedFace === 1) {
            addCube(x - 1, y, z);
            return;
          } else if (clickedFace === 2) {
            addCube(x, y + 1, z);
            return;
          } else if (clickedFace === 3) {
            addCube(x, y - 1, z);
            return;
          } else if (clickedFace === 4) {
            addCube(x, y, z + 1);
            return;
          } else if (clickedFace === 5) {
            addCube(x, y, z - 1);
            return;
          }
        }
      }}
    >
      <boxBufferGeometry attach={"geometry"}></boxBufferGeometry>
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        attach={"material"}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        map={activeTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};
