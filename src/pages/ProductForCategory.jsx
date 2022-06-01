import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/navbar/Navbar'
import Annoncement from '../components/annoncement/Annoncement'
import PopularProducts from '../components/popularProduct/PopularProducts'
import Footer from '../components/footer/Footer'

import {mobile} from '../Respansiv'

const Container = styled.div`

`

const Title = styled.h2`
    font-weight: Bold;
    margin: 20px;
`
const FilterContainer = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    
`
const Fillter = styled.div`
${mobile({display:"flex",flexDirection: "column"})}
`
const FilterText = styled.span`
font-size:20px;
font-weight: 600;
margin-right:20px;
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"8px 0px"})}
`
const Option = styled.option``

export default function ProductForCategory() {
  return (
    <Container >
        <Navbar />
        <Annoncement />
        <Title>Jeen Woman</Title>
        <FilterContainer>
            <Fillter>
                <FilterText>Product Fileter</FilterText>
                <Select>
                    <Option>All</Option>
                    <Option>Levi's</Option>
                    <Option>Madewell</Option>
                    <Option>Everlane</Option>
                    <Option>Reformation</Option>
                    <Option>Agolde</Option>
                </Select>

                <Select>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>X</Option>
                    <Option>Xl</Option>
                    <Option>XXL</Option>
                </Select>
            </Fillter>
            <Fillter>
                <FilterText>Sort Product</FilterText>
                <Select>
                    <Option>Newest</Option>
                    <Option>Saler</Option>
                    <Option>Older</Option>
                </Select>

            </Fillter>
        </FilterContainer>


        <PopularProducts />
        <Footer />
    </Container>
  )
}
