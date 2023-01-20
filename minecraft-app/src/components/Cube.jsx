import { useBox } from "@react-three/cannon";
import * as textures from "../assets/textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({ id, position, texture }) => {
  const [ref] = useBox(() => ({ type: "static", position }));
  const [removeCube] = useStore((state) => [state.removeCube]);
  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.nativeEvent.button === 2) {
          removeCube(id);
        }
      }}
    >
      <boxBufferGeometry attach={"geometry"}></boxBufferGeometry>
      <meshStandardMaterial
        attach={"material"}
        map={activeTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};
