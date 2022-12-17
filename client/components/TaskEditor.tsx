import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import InputDate from './InputDate'
import InputForm from './InputForm'
import InputOptions from './InputOptions'
import InputTime from './InputTime'

type Props = {
  isVisible: boolean
  setVisible: (isVisible: boolean) => void
}

const StyledModal = styled(Modal)`
  color: #636363;
`

const OptionSpacer = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom: 2px solid #636363;
  font-weight: bold;
`

const options = [
  {
    label: '高',
    value: 'high',
  },
  {
    label: '中',
    value: 'middium',
  },
  {
    label: '低',
    value: 'low',
  },
]

export default function TaskEditor(props: Props) {
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('')
  const [deadlineDate, setDeadlineDate] = useState<{ year: number; month: number; day: number }>({
    year: 2000,
    month: 9,
    day: 15,
  })
  const [deadlineTime, setDeadlineTime] = useState<{ hour: number; min: number }>({
    hour: 3,
    min: 12,
  })
  const handleClose = () => {
    props.setVisible(false)
  }

  // any滅ぼす
  const onChangeTaskName = (e: any) => {
    const name = e.target.value
    setTaskName(name)
  }

  const onChangeTaskPriority = (e: any) => {
    const priority = e.target.value
    setPriority(priority)
  }

  const onChangeDate = (year: number, month: number, day: number) => {
    setDeadlineDate({ year: year, month: month, day: day })
  }

  const onChangeTime = (hour: number, min: number) => {
    setDeadlineTime({ hour: hour, min: min })
  }

  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>タスク作成</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <InputForm
          formLabel='タスク名'
          formType='text'
          placeHolder='例: ご飯作る'
          onChange={onChangeTaskName}
          value={taskName}
        />
        <OptionSpacer>オプション設定</OptionSpacer>
        <InputOptions formLabel='優先度' options={options} onChange={onChangeTaskPriority} />
        <InputDate onChangeDate={onChangeDate} />
        <InputTime onChangeTime={onChangeTime} />
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant='primary' onClick={handleClose}>
          タスク作成
        </Button>
      </StyledModal.Footer>
    </StyledModal>
  )
}
