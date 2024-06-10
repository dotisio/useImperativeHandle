import styled from "styled-components";
import { FC, PropsWithChildren } from "react";

interface ModalProps {
  onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
}) => {
  return (
    <Overlay>
      <Container>
        <Header>
          <Close onClick={onClose}>X</Close>
        </Header>
        <Content>{children}</Content>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff45;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 20px;
  background: #242424;
  width: 500px;
  min-height: 300px;
  border-radius: 10px;
`;
const Header = styled.div`
  text-align: right;
`;
const Close = styled.span`
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
