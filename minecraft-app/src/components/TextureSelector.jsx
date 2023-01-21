import { useEffect } from "react";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import {
  dirtImage,
  grassImage,
  glassImage,
  woodImage,
  logImage,
} from "../assets/assets";

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const { actions } = useKeyboard();
  const { texture1Key, texture2Key, texture3Key, texture4Key, texture5Key } =
    actions;
  const [activeTexture, setTexture, texturesAvailable] = useStore((state) => [
    state.texture,
    state.setTexture,
    state.texturesAvailable,
  ]);

  useEffect(() => {
    const pressedTexture = {
      texture1Key,
      texture2Key,
      texture3Key,
      texture4Key,
      texture5Key,
    };

    const texturePressed = Object.entries(pressedTexture).find(
      ([k, v]) => v === true
    );
    if (texturePressed) {
      setTexture(texturePressed[0]);
    }
  }, [texture1Key, texture2Key, texture3Key, texture4Key, texture5Key]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute bottom texture-selector">
        {Object.entries({
          dirt: dirtImage,
          grass: grassImage,
          glass: glassImage,
          wood: woodImage,
          log: logImage,
        }).map(([k, src]) => {
          return (
            <img
              src={src}
              key={k}
              alt={k}
              className={k === activeTexture ? "active" : ""}
            ></img>
          );
        })}
      </div>
    )
  );
};
