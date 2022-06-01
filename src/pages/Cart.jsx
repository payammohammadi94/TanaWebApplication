import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/navbar/Navbar'
import Announcement from '../components/annoncement/Annoncement'
import Footer from '../components/footer/Footer'
import { Add, Remove } from '@material-ui/icons'

import {mobile} from '../Respansiv'

const Container = styled.div`

`

const Wrapper=styled.div`
    padding:20px;
    
`

const Title = styled.h1`
  font-weight:300;
  text-align:center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TopButton = styled.button`
  padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color:${props=>props.type==='filled'&& "white"}
`
const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  margin:0px 10px;
  cursor: pointer; 
  ${mobile({display:"none"})}
`

const Bottom = styled.div`
  display:flex;
  
  justify-content: space-between;
  
  margin-top:30px;
  padding:20px;
  
  ${mobile({display:"flex",flexDirection: "column"})}
  `
  
  const Info = styled.div`
  flex:3;
  ${mobile({margin: "10px auto",padding: "50px"})}
  
  
`

const Product =styled.div`

  display:flex;
  justify-content: space-between;
  ${mobile({display:"flex",flexDirection: "column"})}
`
const ProductDetail =styled.div`
  flex:2 ;
  display:flex
  ${mobile({display:"flex",flexDirection: "column"})}
  
`
const Image =styled.img`
  width:200px;
  height:200px;
`
const Detail =styled.div`
  padding:20px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    
`
const ProductName =styled.span``
const ProductId =styled.span``
const ProductColor =styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:${props=>props.color};
`
const ProductSize =styled.span``

const PriceDetail = styled.div`
  flex:1;
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 
`

const PriceAmountCountainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size:24px;
  margin:0px 5px
`
const TotalAmountPrice = styled.div`
font-size:40px;
font-weight:200
`
const Hr = styled.hr`
  border:none;
  background-color: #eee;
  height: 1px ;
  ${mobile({backgroundColor: "black",height: "2px "})}
  
`
const Summary = styled.div`
  flex:1;
  border:.5px solid lightgray;
  border-radius:10%;
  padding:20px ;
  height:55vh;
  margin-left: 13px;
  

`
const SummaryTitle = styled.h1`
  font-weight:200;
`

const SummaryItem= styled.div`
  margin:30px 0px;
  display:flex;
  justify-content: space-between;
  font-weight:${props=>props.type==="total" && "200"};
  font-size:${props=>props.type==="total" && "24px"};
    
`

const SummaryItemText  = styled.span``
const SummaryItemPrice = styled.span``

const Button = styled.button`
  width:100%;
  font-weight:200;
  padding:10px;
  background-color: black;
  color: white;


`
export default function () {
  return (
    <Container>
        <Navbar />
        <Announcement  />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>Shoping Now</TopButton>
              
              <TopTexts>
                <TopText>Shoping bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
              </TopTexts>

              <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://m.media-amazon.com/images/I/61q59oGCsXL._AC_UY218_.jpg" alt="" />
                    <Detail>
                      <ProductName><b>Product:</b> Jeens Woman</ProductName>
                      <ProductId><b>ID:</b> 7867</ProductId>
                      <ProductColor color="green"/>
                      <ProductSize><b>Size:</b> 39</ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetail>
                    <PriceAmountCountainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                    </PriceAmountCountainer>
                    <TotalAmountPrice>30 $</TotalAmountPrice>
                  </PriceDetail>
                </Product>
                <Hr></Hr>
                <Product>
                  <ProductDetail>
                    <Image src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" alt="" />
                    <Detail>
                      <ProductName><b>Product:</b> Jeens Woman</ProductName>
                      <ProductId><b>ID:</b> 37898</ProductId>
                      <ProductColor color="black"/>
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Detail>
                  </ProductDetail>
                  
                  <PriceDetail>
                    <PriceAmountCountainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                    </PriceAmountCountainer>
                    <TotalAmountPrice>30 $</TotalAmountPrice>
                  </PriceDetail>
                </Product>
              </Info>

              <Summary>
                <SummaryTitle>Order Summery</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>80 $</SummaryItemPrice>
                  </SummaryItem>

                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>5.90 $</SummaryItemPrice>
                  </SummaryItem>

                  <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice> -5.90 $</SummaryItemPrice>
                  </SummaryItem>

                  <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice> 80 $</SummaryItemPrice>
                  </SummaryItem>
                  
                  <Button>Buy</Button>

              </Summary>
            </Bottom>
        </Wrapper>

        <Footer />
    </Container>
  )
}
