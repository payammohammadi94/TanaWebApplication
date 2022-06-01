import { EmailOutlined, Instagram, LinkedIn, PhoneAndroid, RoomOutlined, Telegram, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../Respansiv'

const Container = styled.div`
    display:flex;
    background-color:#e6dfdf;
    ${mobile({display:"flex",flexDirection:"column"})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:20px;

`

const Logo = styled.h1`
    margin:0px 5px
`

const Desc = styled.p`
    margin:10px 5px;
    text-align: justify; 
`

const SotialContainer = styled.div`
    display:flex;
    margin: 0 5px;
`

const SotialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${(props)=>props.color};
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:5px;

    &:hover{
        transform: scale(1.2);
    }
    

`



const Center= styled.div`
    flex:1;
    ${mobile({display:"none"})}
`

const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0 0 0 20px;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width:50%;
`

const Right = styled.div`
    flex:1;
    ${mobile({marginLeft: "20px"})}
`

const Addres = styled.p`
    margin-bottom:20px;
`
const Phone = styled.p`
    margin-bottom:20px;
`
const Email = styled.p`
    margin-bottom:20px;
`



export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>TANAKORA</Logo>
            
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Desc>
            
            <SotialContainer>
                <SotialIcon color="fb3958"><Instagram /></SotialIcon>
                <SotialIcon color="28D146"><WhatsApp /></SotialIcon>
                <SotialIcon color="229ED9"><Telegram /></SotialIcon>
                <SotialIcon color="0A66C2"><LinkedIn /></SotialIcon>
            </SotialContainer>
        </Left>
        
        <Center>
            <Title>Useful Link</Title>
            <List>
            <ListItem>Jeen Woman</ListItem>
            <ListItem>Jeen Man</ListItem>
            <ListItem>Shooses</ListItem>
            <ListItem>Glasses</ListItem>
            <ListItem>Perfume</ListItem>
            </List>
            
        </Center>

        <Right>
        <Title>Contact Us</Title>
        <Addres><RoomOutlined/> Kordistan sananndaj Tanakora.</Addres>
        <Phone><PhoneAndroid/> 09376990587</Phone>
        <Email><EmailOutlined/> Payammohammadi.iran@gmail.com</Email>
        </Right>
    </Container>
  )
}
