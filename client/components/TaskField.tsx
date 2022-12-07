import styled from "styled-components";
import CardComp from "./Card";

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
  return (
    <>
      <Field>
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </Field>
    </>
  );
}
