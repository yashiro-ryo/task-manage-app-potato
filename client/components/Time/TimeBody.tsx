import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import styled from 'styled-components'

// styled component
const Header = styled.div`
  margin-bottom: 5px;
`

const Footer = styled.div`
  margin-top: 5px;
`

const StyledForm = styled(Form)`
  box-shadow: none !important;
  border: none;
  &:focus {
    box-shadow: none !important;
    border: none;
  }
`

export default function TimeBody() {
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [time, setTime] = useState(`${hour}:${min}`)
  const onChangeTime = (e: any) => {
    displayTime()
  }

  const getNextHour = () => {
    if (hour === 23) {
      setHour(0)
    } else {
      setHour(hour + 1)
    }
  }

  const getPrevHour = () => {
    if (hour === 0) {
      setHour(23)
    } else {
      setHour(hour - 1)
    }
  }

  const getNextMin = () => {
    if (min === 59) {
      setMin(0)
    } else {
      setMin(min + 1)
    }
  }

  const getPrevMin = () => {
    if (min === 0) {
      setMin(59)
    } else {
      setMin(min - 1)
    }
  }

  const resetTime = () => {
    setHour(0)
    setMin(0)
    displayTime()
  }

  const displayTime = () => {
    let hourText = ''
    let minText = ''
    if (hour < 10) {
      hourText = `0${hour}`
    } else {
      hourText = `${hour}`
    }
    if (min < 10) {
      minText = `0${min}`
    } else {
      minText = `${min}`
    }
    setTime(hourText + ':' + minText)
  }

  useEffect(() => {
    displayTime()
  }, [hour, min])

  return (
    <>
      <Header>
        <NextButton cb={getNextHour} />
        <NextButton cb={getNextMin} />
      </Header>
      <div onClick={() => resetTime()}>
        <StyledForm.Control type='text' value={time} onChange={onChangeTime} />
      </div>
      <Footer>
        <PrevButton cb={getPrevHour} />
        <PrevButton cb={getPrevMin} />
      </Footer>
    </>
  )
}
