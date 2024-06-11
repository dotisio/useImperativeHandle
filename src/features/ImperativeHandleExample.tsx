import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "../components/Button.tsx";

interface ControllableRef {
  exposedValue: boolean;
  sendEventIn: () => void;
}

// Mention performance optimization
const ControllableComponent = forwardRef<ControllableRef>((_, ref) => {
  const [value, setValue] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      exposedValue: value,
      sendEventIn: () => {
        alert("event inside");
      },
    }),
    [value],
  );

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={() => setValue((prev) => !prev)}
    ></input>
  );
});

export const ImperativeHandleExample = () => {
  const controlledRef = useRef<ControllableRef>(null);

  const handleAlert = () => {
    alert(controlledRef.current?.exposedValue);
  };

  const handleEventIn = () => {
    controlledRef.current?.sendEventIn();
  };

  return (
    <>
      <Button onClick={handleAlert}>alert</Button>
      <Button onClick={handleEventIn}>send in event</Button>
      <ControllableComponent ref={controlledRef} />
    </>
  );
};
