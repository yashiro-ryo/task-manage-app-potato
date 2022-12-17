import { Popover, OverlayTrigger, Form } from 'react-bootstrap'
import TimeBody from './TimeBody'
import styled from 'styled-components'

const StyledPopover = styled(Popover)`
  width: 120px;
`

export default function Time() {
  const popover = (
    <StyledPopover id='popover-basic'>
      <StyledPopover.Body>
        <TimeBody />
      </StyledPopover.Body>
    </StyledPopover>
  )
  return (
    <>
      <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
        <Form.Control type='time' />
      </OverlayTrigger>
    </>
  )
}
