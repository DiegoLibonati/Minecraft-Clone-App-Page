import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [cubes, saveWorld, resetWorld] = useStore((state) => [
    state.cubes,
    state.saveWorld,
    state.resetWorld,
  ]);
  return (
    <div className="menu absolute">
      <button onClick={() => saveWorld(cubes)}>Save</button>
      <button onClick={() => resetWorld()}>Reset</button>
    </div>
  );
};
