import { Button } from "../components/Button.tsx";
import { Modal } from "../components/Modal.tsx";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ModalControls {
  openModal: () => void;
}

interface ModalProps {
  onResult: (result: string) => void;
}

const MyModal = forwardRef<ModalControls, ModalProps>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    props.onResult(text);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      openModal() {
        setVisible(true);
        setText("");
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
    modalRef.current?.openModal();
  };

  const handleResult = (modalResult: string) => {
    setResult(modalResult)
  }

  return (
    <>
      result: {JSON.stringify(result)}
      <Button onClick={handleOpen}>open basic</Button>
      <MyModal ref={modalRef} onResult={handleResult} />
    </>
  );
};
