import { useState } from "react";
import styled from "styled-components";
import CardComp from "./Card";
import CategoryAddButton from "./CategoryAddButton";
import CategoryEditor from "./CategoryEditor";
import TaskEditor from "./TaskEditor";

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
  return (
    <>
      <Field>
        <CardComp setTaskEditorVisible={setTaskEditorVisible} />
        <CardComp setTaskEditorVisible={setTaskEditorVisible} />
        <CardComp setTaskEditorVisible={setTaskEditorVisible} />
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
