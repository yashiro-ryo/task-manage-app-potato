import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { TaskType } from "../values/task";
import DeleteButton from "./DeleteButton";
import OptionButton from "./OptionButton";

type Props = {
  onDrag: (e: React.MouseEvent) => void;
  onDragOver: (e: React.MouseEvent) => void;
  onDragEnter: (e: React.MouseEvent) => void;
  onDragLeave: (e: React.MouseEvent) => void;
  task: TaskType;
};

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

export default function Task(props: Props) {
  return (
    <StyledCard
      draggable={true}
      onDrag={props.onDrag}
      onDragOver={props.onDragOver}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
      data-task-id={props.task.taskId}
    >
      <TaskText>{props.task.taskText}</TaskText>
      <ButtonGroup>
        <DeleteButton />
        <OptionButton />
      </ButtonGroup>
    </StyledCard>
  );
}
