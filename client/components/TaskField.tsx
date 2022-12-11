import React, { useState } from "react";
import styled from "styled-components";
import CardComp from "./Card";
import CategoryAddButton from "./CategoryAddButton";
import CategoryEditor from "./CategoryEditor";
import TaskEditor from "./TaskEditor";
import { groups } from "../etc/dummyData";
import { Group, TaskType } from "../values/task";

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
  const [dragTarget, setDragTarget] = useState<{
    taskGroupId: number;
    taskId: number;
  }>();
  const [taskGroup, setTaskGroup] = useState<Array<Group>>(groups);
  const onClickAddCategory = (e: any) => {
    setCatEditorVisible(true);
  };

  // drag event
  const onDrag = (e: React.MouseEvent) => {
    //e.preventDefault;
    // のちにタスクの順番を変えたりするところで使用
  };

  // drag開始
  const onDragStart = (e: React.MouseEvent) => {
    const dragTaskId = e.currentTarget.getAttribute("data-task-id");
    if (dragTaskId == null) {
      return;
    }
    const taskGroupId = e.currentTarget.getAttribute("data-task-group-id");
    if (taskGroupId === null) {
      return;
    }
    console.log("dragged task group id = ", taskGroupId);
    console.log("dragged task id = ", dragTaskId);
    setDragTarget({
      taskGroupId: Number(taskGroupId),
      taskId: Number(dragTaskId),
    });
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
    const dropZoneId = e.currentTarget.getAttribute("data-drop-zone-id");
    if (dropZoneId === null) {
      return;
    }
    const taskGroupId = e.currentTarget.getAttribute("data-task-group-id");
    if (taskGroupId === null) {
      return;
    }
    console.log("dropped at task group id = ", taskGroupId);
    console.log("dropされました drop group id = ", dropZoneId);
    moveTask(Number(taskGroupId), Number(dropZoneId));
  };

  const moveTask = (taskGroupId: number, dropZoneId: number) => {
    let copyTaskGroups = taskGroup;
    let targetTask: TaskType = {
      taskId: 0,
      taskText: "",
      taskCreatedAt: "",
      priority: "",
    };
    let deleteTargetIndex = {
      groupIndex: -1,
      taskIndex: -1,
    };
    // task情報の取得
    copyTaskGroups.forEach((group: Group, groupIndex: number) => {
      group.tasks.forEach((task: TaskType, taskIndex: number) => {
        if (task.taskId === dragTarget?.taskId) {
          targetTask = {
            taskId: task.taskId,
            taskText: task.taskText,
            taskCreatedAt: task.taskCreatedAt,
            priority: task.priority,
          };
          deleteTargetIndex = {
            groupIndex: groupIndex,
            taskIndex: taskIndex,
          };
        }
      });
    });
    // 要素から消す
    copyTaskGroups[deleteTargetIndex.groupIndex].tasks.splice(
      deleteTargetIndex.taskIndex,
      1
    );
    console.log(targetTask);
    // drop先の配列に追加
    // groupを検索
    copyTaskGroups.forEach((group: Group) => {
      if (group.taskGroupId === taskGroupId) {
        // 配列の一番最後に追加する
        if (dropZoneId === group.tasks.length) {
          group.tasks.push(targetTask);
        } else {
          group.tasks.splice(dropZoneId, 0, targetTask);
        }
      }
    });
    setTaskGroup(copyTaskGroups);
    console.log(taskGroup);
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
