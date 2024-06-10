import { Button } from "../components/Button.tsx";
import { Modal } from "../components/Modal.tsx";
import { useState } from "react";

export const BasicExample = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    setResult(text);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setText("");
    setVisible(true);
  };

  return (
    <>
      result: {JSON.stringify(result)}
      <Button onClick={handleOpen}>open basic</Button>
      {visible && (
        <Modal onClose={handleCancel}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleSubmit}>submit</Button>
          <Button onClick={handleCancel}>cancel</Button>
        </Modal>
      )}
    </>
  );
};
