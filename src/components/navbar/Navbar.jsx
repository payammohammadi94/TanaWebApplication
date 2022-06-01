
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import { Battery80Rounded, Home, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {mobile} from '../../Respansiv'

const navbarContainer = styled.div`
  height: 60px;
  margin-bottom: 30px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})} 
  
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({width:"80px",  margin: "0px 10px"})} 
   
`

const InputSearchfield = styled.input`
  border: none;
  ${mobile({width:"50px"})} 
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const LogoCenter = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"20px"})} 
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:"2",justifyContent:"center"})} 
`

const RightItem = styled.div`
font-size: 14px;
margin-left: 25px;
cursor: pointer;
${mobile({fontSize:"12px",marginLeft:"5px"})} 
`



export default function Navbar() {
  return (
    <navbarContainer>
      <Wrapper >
        <Left >
          <SearchContainer>
            <InputSearchfield />
            <Search/>
          </SearchContainer>

        </Left>

        <Center ><LogoCenter className='LogoCenter'>Payam</LogoCenter></Center>
        <Right className="Right">
          <Link to="/register" style={{textDecoration:"none",color:"black"}}><RightItem >Rigester</RightItem></Link>
          <Link to="/login" style={{textDecoration:"none",color:"black"}}><RightItem >SignIn</RightItem></Link>
          <Link to="/" style={{textDecoration:"none",color:"black"}}><RightItem ><Home /></RightItem></Link>
          <RightItem >
          <Badge badgeContent={4} color="primary">
          <Link to="/cart"><ShoppingCartOutlined color="action" /></Link>
    </Badge>
          </RightItem>
        </Right>
      </Wrapper>
    </navbarContainer>
  )
}
