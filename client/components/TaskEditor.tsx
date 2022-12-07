import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import InputForm from "./InputForm";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

export default function TaskEditor(props: Props) {
  const handleShow = () => {
    props.setVisible(true);
  };

  const handleClose = () => {
    props.setVisible(false);
  };

  const StyledModal = styled(Modal)`
    color: #636363;
  `;

  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>タスク編集</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <InputForm formLabel="label" formType="text" placeHolder="text" />
        <InputForm formLabel="label" formType="text" placeHolder="text" />
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </StyledModal.Footer>
    </StyledModal>
  );
}
