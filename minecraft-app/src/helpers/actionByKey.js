export const actionByKey = (key) => {
  const keyActionMap = {
    KeyW: "moveForwardKey",
    KeyS: "moveBackwardKey",
    KeyA: "moveLeftKey",
    KeyD: "moveRightKey",
    Space: "jumpKey",
    ShiftLeft: "runKey",
    Digit1: "dirtKey",
    Digit2: "grassKey",
    Digit3: "glassKey",
    Digit4: "woodKey",
    Digit5: "logKey",
  };

  return keyActionMap[key];
};
