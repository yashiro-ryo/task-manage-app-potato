import { useEffect, useState } from 'react'
import { Popover, OverlayTrigger, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import CalenderTable from './CalenderTable'
import NextMonthButton from './NextMonthButton'
import PrevMonthButton from './PrevMonthButton'
import YearMonthPart from './YearMonthPart'

const StyledPopover = styled(Popover)``

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Calender() {
  const [year, setYear] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)

  const initCalender = () => {
    const todayDate = new Date()
    const year = todayDate.getFullYear()
    const month = todayDate.getMonth() + 1
    setYear(year)
    setMonth(month)
  }

  const setNextMonth = () => {
    if (month === 12) {
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
  }

  const setPrevMonth = () => {
    if (month === 1) {
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
  }

  // 1回のみ実行させるための変数
  let initCalenderPrepared = false
  useEffect(() => {
    if (!initCalenderPrepared) {
      initCalender()
      initCalenderPrepared = true
    }
  }, [])
  const popover = (
    <StyledPopover id='popover-basic'>
      <StyledPopover.Body>
        <CalenderHeader>
          <PrevMonthButton setPrevMonth={setPrevMonth} />
          <YearMonthPart year={year} month={month} />
          <NextMonthButton setNextMonth={setNextMonth} />
        </CalenderHeader>
        <CalenderTable yaer={year} month={month} />
      </StyledPopover.Body>
    </StyledPopover>
  )
  return (
    <>
      <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
        <Form.Control type='date' />
      </OverlayTrigger>
    </>
  )
}
