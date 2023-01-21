export const actionByKey = (key) => {
  const keyActionMap = {
    KeyW: "moveForwardKey",
    KeyS: "moveBackwardKey",
    KeyA: "moveLeftKey",
    KeyD: "moveRightKey",
    Space: "jumpKey",
    ShiftLeft: "runKey",
    Digit1: "texture1Key",
    Digit2: "texture2Key",
    Digit3: "texture3Key",
    Digit4: "texture4Key",
    Digit5: "texture5Key",
  };

  return keyActionMap[key];
};
