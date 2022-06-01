import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from '../../Respansiv'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position: relative;
    

`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
` 
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
` 
const Title = styled.h1`
    color:white;
    padding-bottom: 20px;
    font-weight: 600;

`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color: white;
    color:gray;
    curser:pointer;
    cursor: pointer;
`


export default function CategoryItem(props) {
    
  return (
    
        <Container>
        <Image src={props.item.image} alt="" />
        
        <Info>
            <Title>
                {props.item.title}
            </Title>
            
            <Link to="/product"><Button>SHOP NOW</Button></Link>
        </Info>

    </Container>
    
  )
}
