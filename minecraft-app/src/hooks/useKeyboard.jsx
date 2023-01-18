import { useEffect, useCallback, useState } from "react";
import { actionByKey } from "../helpers/actionByKey";

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveFowardKey: false,
    moveBackwardKey: false,
    moveLeftKey: false,
    moveRightKey: false,
    jumpKey: false,
    runKey: false,
    texture1Key: false,
    texture2Key: false,
    texture3Key: false,
    texture4Key: false,
    texture5Key: false,
  });

  const handleKeyDown = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions((actionsPrev) => {
        return { ...actionsPrev, [action]: true };
      });
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    const action = actionByKey(e.code);

    if (action) {
      setActions((actionsPrev) => {
        return { ...actionsPrev, [action]: false };
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return { actions };
};
