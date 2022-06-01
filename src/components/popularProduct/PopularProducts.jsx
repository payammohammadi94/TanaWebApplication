import React from 'react'
import styled from 'styled-components'
import { popularProduct } from '../../data'
import PopularProductItem from './PopularProductItem'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`

export default function PopularProducts() {
  return (
    <Container>
        {popularProduct.map((item=>(
            <PopularProductItem item={item} key={item.id}/>
        )))}
    </Container>
  )
}
