import styled from 'styled-components'
import { Form } from 'react-bootstrap'

const today = new Date()

export default function InputDate() {
  return (
    <>
      <Form.Label>日付を選択</Form.Label>
      <Form.Control type='date' placeholder={String(today.getDate)}></Form.Control>
    </>
  )
}
