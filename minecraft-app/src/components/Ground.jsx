import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../assets/textures";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Math.PI / 2
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);
  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();

        if (e.nativeEvent.button === 0) {
          const [x, y, z] = Object.values(e.point).map((value) => {
            return Math.ceil(value);
          });
          addCube(x, y, z);
        }
      }}
    >
      <planeBufferGeometry
        attach={"geometry"}
        args={[100, 100]}
      ></planeBufferGeometry>
      <meshStandardMaterial
        attach={"material"}
        map={groundTexture}
      ></meshStandardMaterial>
    </mesh>
  );
};
