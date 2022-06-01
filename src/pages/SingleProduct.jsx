import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/annoncement/Annoncement'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

import {mobile} from '../Respansiv'


const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;
    display:flex;
    ${mobile({display:"flex",flexDirection: "column"})}
    `
    const ImageContainer = styled.div`
    flex:1;`
    const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"50vh"})}
    `
    const InfoContainer = styled.div`
    flex:1;
    margin:20px
    `
    const Title = styled.h3`
    font-size:40px;
    font-weight:600;
    `
    const Description = styled.p`
    text-align:justify;
    `
    const Price = styled.span`
    font-size:30px;
    font-weight:400;
    `
    
    const FilterConteiner= styled.div`
    margin:20px 0;
    display:flex;
    justify-content: flex-start;
    ${mobile({display:"flex",justifyContent: "space-between"})}
    `
    const Filter= styled.div`
    display:flex;
    align-item:center;
    margin-right:30px
    
    `
    const FilterTitile= styled.span`
    font-size:20px;
    font-weight:200;
    `
    const FilterColor= styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:5px 5px; 
`
const FiilterSelctSize= styled.select`
margin-left:10px;

`
const FilterOptionSize= styled.option`
width:40px;
text-align:center;
`

const AddContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:40px;
    ${mobile({display:"flex",justifyContent: "space-between"})}
`
const AmountContainer = styled.div`
    display:flex;
    align-items: center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid teal;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;


`
const Button = styled.button`
    margin-left:82px;   
    padding:20px;
    height:3rem;
    border:2px solid teal;
    border-radius: 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: white;
    
    &:hover{
        background-color: #b5cbcb;
    }
`

export default function () {
  return (
    <Container>
        <Navbar />
        <Annoncement />
            <Wrapper>

        <ImageContainer>
            <Image src="https://www.thefashionisto.com/wp-content/uploads/2016/03/Mango-2016-Mens-Denim-Guide-01_jude_02-800x720.jpg" alt="" ></Image>
        </ImageContainer>
        
        <InfoContainer>
            <Title>Jeen Zara Mark</Title>
            <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description>
            <Price>20 $</Price>
            <FilterConteiner>
                <Filter>
                    <FilterTitile>Color: </FilterTitile>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="red"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    
                </Filter>

                <Filter>
                    <FilterTitile>Size:</FilterTitile>
                    <FiilterSelctSize>
                        <FilterOptionSize>S</FilterOptionSize>
                        <FilterOptionSize>M</FilterOptionSize>
                        <FilterOptionSize>X</FilterOptionSize>
                        <FilterOptionSize>Xl</FilterOptionSize>
                    </FiilterSelctSize>
                    
                </Filter>

            </FilterConteiner>
            
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>اضافه کردن به سبد</Button>
            </AddContainer>
        </InfoContainer>
            </Wrapper>
        <Footer />
    </Container>
  )
}
