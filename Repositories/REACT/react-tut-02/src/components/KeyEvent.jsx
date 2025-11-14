import { useEffect, useState } from "react";

/**
 * 
 * @param {*} targetKey 
 * @returns 
 */
export function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const downHandler = (event) => {
      if (event.key === targetKey) setPressed(true);
    };

    const upHandler = (event) => {
      if (event.key === targetKey) setPressed(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return pressed;
}

/**
 * 
 * @param {*} setKey 
 */
function setKeyEvent(setKey) {
  useEffect(() => {
    const handleKeyboard = (event) => {
      setKey(event.key);
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, []);
}

/**
 *
 * @returns
 */
function KeyboardDemo() {
  const targetKey = "Enter";
  const [key, setKey] = useState("");
  setKeyEvent(setKey);
  const keyPressed = useKeyPress(targetKey);

  return (
    <>
      <div>
        <p>Last Key: {key}</p>
        <p>{keyPressed ? `${targetKey} is pressed` : `Waiting for "${targetKey}" ...`}</p>
      </div>
    </>
  );
}

export default KeyboardDemo;
