import React, { useState } from "react";
import styled from "styled-components";
import CardComp from "./Card";
import CategoryAddButton from "./CategoryAddButton";
import CategoryEditor from "./CategoryEditor";
import TaskEditor from "./TaskEditor";
import { groups } from "../etc/dummyData";
import { Group } from "../values/task";

const Field = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #cdffff;
  color: #000000;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-x: auto;
`;

export default function TaskField() {
  const [isCatEditorVisible, setCatEditorVisible] = useState(false);
  const [isTaskEditorVisible, setTaskEditorVisible] = useState(false);
  const [dragTargetTaskId, setDragTargetTaskId] = useState<number>();
  const [taskGroup, setTaskGroup] = useState<Array<Group>>(groups);
  const onClickAddCategory = (e: any) => {
    setCatEditorVisible(true);
  };

  // drag event
  const onDrag = (e: React.MouseEvent) => {
    e.preventDefault;
    // のちにタスクの順番を変えたりするところで使用
  };

  // drag開始
  const onDragStart = (e: React.MouseEvent) => {
    const dragTaskId = e.currentTarget.getAttribute("data-task-id");
    if (dragTaskId == null) {
      return;
    }
    console.log("dragged task id = ", dragTaskId);
    setDragTargetTaskId(Number(dragTaskId));
  };

  const onDragOver = (e: React.MouseEvent) => {
    e.preventDefault();
    const taskId = e.currentTarget.getAttribute("data-task-id");
    if (taskId !== null) {
      console.log(taskId);
    }
  };

  const onDrop = (e: React.MouseEvent) => {
    e.preventDefault();
    const dropGroupId = e.currentTarget.getAttribute("data-task-group-id");
    if (dropGroupId === null) {
      return;
    }
    console.log("dropされました drop group id = ", dropGroupId);
  };

  return (
    <>
      <Field>
        {taskGroup.map((value: Group) => {
          return (
            <CardComp
              setTaskEditorVisible={setTaskEditorVisible}
              onDrag={onDrag}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              key={value.taskGroupId}
              taskGroup={value}
            />
          );
        })}
        <CategoryAddButton cb={onClickAddCategory} />
        <CategoryEditor
          isVisible={isCatEditorVisible}
          setVisible={setCatEditorVisible}
        />
        <TaskEditor
          isVisible={isTaskEditorVisible}
          setVisible={setTaskEditorVisible}
        />
      </Field>
    </>
  );
}
