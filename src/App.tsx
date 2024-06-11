import styled from "styled-components";
import { BasicExample } from "./features/BasicExample.tsx";
import { RefExample } from "./features/RefExample.tsx";
import { ImperativeHandleExample } from "./features/ImperativeHandleExample.tsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <BasicExample />
      <br />
      <ImperativeHandleExample />
      <br />
      <RefExample />
    </Container>
  );
}

export default App;
