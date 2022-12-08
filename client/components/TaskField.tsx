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
  const onClickAddCategory = (e: any) => {
    setCatEditorVisible(true);
  };

  // drag event
  const onDrag = (e: React.MouseEvent) => {
    e.preventDefault;
    console.log(e);
    console.log("dragされた!");
  };

  const onDragOver = (e: React.MouseEvent) => {
    e.preventDefault;
    console.log(e);
    console.log("dragoverされた!");
  };

  const onDragEnter = (e: React.MouseEvent) => {
    e.preventDefault;
    console.log(e);
    console.log("dragenterされた!");
  };

  const onDragLeave = (e: React.MouseEvent) => {
    e.preventDefault;
    console.log(e);
    console.log("dragleaveされた!");
  };

  return (
    <>
      <Field>
        {groups.map((value: Group) => {
          return (
            <CardComp
              setTaskEditorVisible={setTaskEditorVisible}
              onDrag={onDrag}
              onDragOver={onDragOver}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
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
