import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import InputForm from "./InputForm";
import InputOptions from "./InputOptions";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

const StyledModal = styled(Modal)`
  color: #636363;
`;

export default function TaskEditor(props: Props) {
  const handleClose = () => {
    props.setVisible(false);
  };

  const options = [
    {
      label: "高",
      value: "high",
    },
    {
      label: "中",
      value: "middium",
    },
    {
      label: "低",
      value: "low",
    },
  ];

  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>タスク編集</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <InputForm
          formLabel="タスク名"
          formType="text"
          placeHolder="例: ご飯作る"
        />
        <InputOptions formLabel="優先度" options={options} />
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
