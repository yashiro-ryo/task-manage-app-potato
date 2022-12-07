import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import CardOption from "./CardOption";
import Task from "./Task";
import AddButton from "./AddButton";

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

const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: none;
  width: 45px;
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
      <AddButton />
    </StyledCard>
  );
}
