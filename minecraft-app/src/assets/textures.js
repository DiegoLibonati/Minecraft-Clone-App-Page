import { TextureLoader } from "three";
import {
  dirtImage,
  logImage,
  grassImage,
  glassImage,
  woodImage,
} from "./assets";

const dirtTexture = new TextureLoader().load(dirtImage);
const logTexture = new TextureLoader().load(logImage);
const grassTexture = new TextureLoader().load(grassImage);
const glassTexture = new TextureLoader().load(glassImage);
const woodTexture = new TextureLoader().load(woodImage);
const groundTexture = new TextureLoader().load(grassImage);

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
};
