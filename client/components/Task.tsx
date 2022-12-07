import { Card } from "react-bootstrap";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import OptionButton from "./OptionButton";

const StyledCard = styled(Card)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const TaskText = styled.div`
  display: flex;
  justify-content: start;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
`;

export default function Task() {
  return (
    <StyledCard>
      <TaskText>タスク1</TaskText>
      <ButtonGroup>
        <DeleteButton />
        <OptionButton />
      </ButtonGroup>
    </StyledCard>
  );
}
