import { Card } from "react-bootstrap";
import styled from "styled-components";
import CardOption from "./CardOption";
import Task from "./Task";
import AddButton from "./AddButton";
import React from "react";
import { Group, TaskType } from "../values/task";

type Props = {
  setTaskEditorVisible: (isVisible: boolean) => void;
  onDrag: (e: React.MouseEvent) => void;
  onDragOver: (e: React.MouseEvent) => void;
  onDragStart: (e: React.MouseEvent) => void;
  onDrop: (e: React.MouseEvent) => void;
  taskGroup: Group;
};

const StyledCard = styled(Card)`
  width: 300px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const StyledCardHeader = styled.div`
  display: flex;
`;

const CardTitle = styled.h5`
  margin-bottom: 5px;
`;

export default function CardComp(props: Props) {
  return (
    <StyledCard
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      data-task-group-id={props.taskGroup.taskGroupId}
    >
      <StyledCardHeader>
        <CardTitle>{props.taskGroup.taskGroupText}</CardTitle>
        <CardOption />
      </StyledCardHeader>
      {props.taskGroup.tasks.map((value: TaskType) => {
        return (
          <Task
            onDrag={props.onDrag}
            onDragStart={props.onDragStart}
            key={value.taskId}
            taskGroupId={props.taskGroup.taskGroupId}
            task={value}
          />
        );
      })}
      <AddButton setTaskEditorVisible={props.setTaskEditorVisible} />
    </StyledCard>
  );
}
