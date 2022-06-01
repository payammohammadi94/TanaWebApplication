import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;

`

const Container = styled.div`
    flex :1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity:1
        

    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    width:250px;
    height:250px;
    z-index:2;


`



const Icon = styled.div`
    width:40px;
    height:40px;
    background-color: white;
    display: flex;
    align-items: center;
    border-radius:50%;
    justify-content: center;
    margin:10px;
    transition: all .5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.3);
        cursor: pointer;
    }
`


export default function PopularProductItem({item}) {
  return (
    <Container>
        <Circle />
        <Image src={item.image} alt="" />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            
            <Icon>
                <Link to="/detail-product"><SearchOutlined /></Link>
            </Icon>

            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            
        </Info>
    </Container>
  )
}
  