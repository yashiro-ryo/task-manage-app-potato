import { Card } from "react-bootstrap";
import styled from "styled-components";
import Task from "./Task";

const StyledCard = styled(Card)`
  width: 300px;
  padding: 10px;
  margin-right: 15px;
`;

const CardTitle = styled.h5`
  margin-bottom: 5px;
`;

export default function CardComp() {
  return (
    <StyledCard>
      <CardTitle>カードタイトル</CardTitle>
      <Task />
      <Task />
      <Task />
    </StyledCard>
  );
}
