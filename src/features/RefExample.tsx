import { Button } from "../components/Button.tsx";
import { Modal } from "../components/Modal.tsx";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ModalControls {
  getResponse: () => Promise<string | undefined>;
}

new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const MyModal = forwardRef<ModalControls>((_, ref) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  // todo: resolve type
  const resolveRef = useRef<(value: string | undefined) => void>();

  const handleSubmit = () => {
    resolveRef.current?.(text);
    setVisible(false);
  };

  const handleCancel = () => {
    resolveRef.current?.(undefined);
    setVisible(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      getResponse() {
        setVisible(true);
        setText("");

        return new Promise<string | undefined>((resolve) => {
          resolveRef.current = resolve;
        });
      },
    }),
    [],
  );

  return (
    <>
      {visible && (
        <Modal onClose={handleCancel}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleSubmit}>submit</Button>
          <Button onClick={handleCancel}>cancel</Button>
        </Modal>
      )}
    </>
  );
});

export const RefExample = () => {
  const [result, setResult] = useState("");
  const modalRef = useRef<ModalControls>(null);

  const handleOpen = async () => {
    const modalResult = await modalRef.current?.getResponse();

    if (modalResult !== undefined) {
      setResult(modalResult);
    }
  };

  return (
    <>
      result: {JSON.stringify(result)}
      <Button onClick={handleOpen}>open basic</Button>
      <MyModal ref={modalRef} />
    </>
  );
};
