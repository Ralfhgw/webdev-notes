import { useEffect, useState } from "react";

/**
 * ***Eigener Hook.***
 * 
 * Abfangen eines `keydown` und `keyup` Eventhandler auf das ***Window***.
 * @param targetKey
 * @returns
 */
export function useKeyPress(targetKey: string): boolean {
  const [pressed, setPressed] = useState<boolean>(false);

  /*
  useEffect reagiert nur bei einer Aenderung des targetKey.
  */
  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) setPressed(true);
    };

    const upHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) setPressed(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // CleanUp
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return pressed;
}

/**
 * Eigener Hook
 * @param setTaste
 */
function setKeyEvent(setTaste: React.Dispatch<React.SetStateAction<string>>) {
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      setTaste(`${event.key}`);
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, []);
}

function TastaturDemo() {
  const [taste, setTaste] = useState<string>("");
  const enterPressed = useKeyPress("Enter");

  // Der Teil wurd in die Funktion setKeyEvent ausgelagert

  // useEffect(() => {
  //     const  handleKeyboard = (event: KeyboardEvent) => {
  //         setTaste(event.key);
  //     };

  //     window.addEventListener('keydown', handleKeyboard);

  //     return () => window.removeEventListener('keydown', handleKeyboard);
  // }, []);

  setKeyEvent(setTaste);

  return (
    <div>
      <p>Letzte Taste: {taste}</p>
      <p>{enterPressed ? "Enter wurde gedrueckt" : "Warte auf Enter ..."}</p>
    </div>
  );
}

export { TastaturDemo };
