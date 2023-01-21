import create from "zustand";
import { nanoid } from "nanoid";
import { getLocalStorage } from "../helpers/getLocalStorage";
import { setLocalStorage } from "../helpers/setLocalStorage";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") || [],
  texturesAvailable: {
    texture1Key: "dirt",
    texture2Key: "grass",
    texture3Key: "glass",
    texture4Key: "wood",
    texture5Key: "log",
  },
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: (id) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => cube.key !== id),
    }));
  },
  setTexture: (newTexture) => {
    set((state) => ({
      texture: state.texturesAvailable[newTexture],
    }));
  },
  saveWorld: (cubes) => {
    setLocalStorage("cubes", cubes);
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
