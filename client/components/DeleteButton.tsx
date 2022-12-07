import { Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: none;
  width: 45px;
`;

export default function DeleteButton() {
  return (
    <>
      <StyledButton variant="light">
        <AiOutlineDelete />
      </StyledButton>
    </>
  );
}
