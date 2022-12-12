import { Form } from 'react-bootstrap'

type Props = {
  formLabel: string
  options: Array<Option>
}

type Option = {
  value: number | string
  label: string
}

export default function InputOptions(props: Props) {
  return (
    <>
      <Form.Label>{props.formLabel}</Form.Label>
      <Form.Select>
        {props.options.map((option: Option, index: number) => {
          return (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          )
        })}
      </Form.Select>
    </>
  )
}
