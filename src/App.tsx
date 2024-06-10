import styled from "styled-components";
import { BasicExample } from "./features/BasicExample.tsx";

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
    </Container>
  );
}

export default App;
