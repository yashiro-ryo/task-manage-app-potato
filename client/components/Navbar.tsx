import React from 'react'
import Link from 'next/link'
import { Dropdown, Image } from 'react-bootstrap'
import styled from 'styled-components'

const navbarHeight = 60

const Nav = styled.nav`
  width: 100%;
  height: ${navbarHeight}px;
  background-color: #4fd5d6;
  display: flex;
  justify-content: space-between;
`

const NavLeft = styled.div`
  display: flex;
`

const NavBrand = styled.span`
  line-height: ${navbarHeight}px;
  font-size: 25px;
  margin: 0 10px;
`

const NavLinkGroup = styled.div`
  line-height: ${navbarHeight}px;
`

const NavLink = styled(Link)`
  margin: 0 5px;
  &:hover {
    color: #636363;
  }
`

const NavRight = styled.div`
  display: flex;
  flex-direction: column;
`

const DropdownToggle = styled(Dropdown.Toggle)`
  // bootstrapのbtn要素を隠す
  padding: 0;
  margin: 5px;
  border: none;
  border-radius: 0px;
  background-color: #4fd5d6;
  ::after {
    display: none;
  }
  &:hover {
    background-color: #4fd6d67f;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <NavLeft>
        <NavBrand>domain name</NavBrand>
        <NavLinkGroup>
          <NavLink href='/kanban'>ToDoタスク</NavLink>
          <NavLink href='/gantchart'>ガントチャート</NavLink>
          <NavLink href='/chat'>チャット</NavLink>
        </NavLinkGroup>
      </NavLeft>
      <NavRight>
        <Dropdown>
          <DropdownToggle id='dropdown-basic'>
            <Image src='blank-user.webp' width='50px' height='50px' roundedCircle={true} />
          </DropdownToggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink href='/mypage'>マイページ</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink href='/settings'>設定</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink href='/domain/settings'>組織の設定</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink href='/signout'>ログアウト</NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavRight>
    </Nav>
  )
}
