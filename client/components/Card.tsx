import { Card } from "react-bootstrap";
import styled from "styled-components";
import CardOption from "./CardOption";
import Task from "./Task";

const StyledCard = styled(Card)`
  width: 300px;
  padding: 10px;
  margin-right: 15px;
`;

const StyledCardHeader = styled.div`
  display: flex;
`;

const CardTitle = styled.h5`
  margin-bottom: 5px;
`;

export default function CardComp() {
  return (
    <StyledCard>
      <StyledCardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardOption />
      </StyledCardHeader>
      <Task />
      <Task />
      <Task />
    </StyledCard>
  );
}
