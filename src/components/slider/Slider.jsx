import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import {SlideData} from '../../data'
import styled from 'styled-components'
import './slider.css'
import {mobile} from '../../Respansiv'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;   
    position: relative;
    overflow:hidden;
    
    ${mobile({display:"none"})}
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    cursor: pointer;
    z-index:2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg} ;
`

const ImageContainer=styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 70px;
`

const Discription = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
 

export default function Slider() {
    let [indexSlider,setIndexSlider] = useState(0)
    
    let slideHandel =(direction)=>{
        
        if (direction=="left"){
            setIndexSlider(indexSlider > 0 ? indexSlider - 1 : 1 )
        }
        else{
            setIndexSlider(indexSlider < 1 ? indexSlider + 1 : 0 )
        }

    }
  return (
    <Container >
        <Arrow direction="left" onClick={()=>slideHandel("left")}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper slideIndex={indexSlider}> 
            {SlideData.map((item)=>{
                return(
                <Slide bg={item.bg} id={item.id}>
                    
                <ImageContainer >
                    <Image  src={item.image} alt="" />
                </ImageContainer>

                <InfoContainer className="InfoContainer">
                    <Title className='Title'>{item.title}</Title>
                    <Discription className='Description'>{item.desc}</Discription>
                    <Button className='ButtonShow'>Show me</Button>
                </InfoContainer>
            </Slide>)
            })}
        </Wrapper>

        <Arrow direction='right' onClick={()=>slideHandel("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
