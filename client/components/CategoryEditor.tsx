import { Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'

type Props = {
  isVisible: boolean
  setVisible: (isVisible: boolean) => void
}

const StyledModal = styled(Modal)`
  color: #636363;
`

export default function CategoryEditor(props: Props) {
  const handleClose = () => {
    props.setVisible(false)
  }
  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>カテゴリー編集</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>Woohoo, youre reading this text in a StyledModal!</StyledModal.Body>
      <StyledModal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </StyledModal.Footer>
    </StyledModal>
  )
}
