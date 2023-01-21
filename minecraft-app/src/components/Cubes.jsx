import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map((cube) => {
    return (
      <Cube
        key={cube.key}
        id={cube.key}
        position={cube.pos}
        texture={cube.texture}
      ></Cube>
    );
  });
};
