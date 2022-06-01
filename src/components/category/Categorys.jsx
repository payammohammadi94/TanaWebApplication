import React from 'react'
import styled from 'styled-components'
import {Category} from '../../data'
import CategoryItem from './CategoryItem'
import {mobile} from '../../Respansiv'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  overflow:hidden;
  ${mobile({display:"flex",flexDirection: "column"})}
`

export default function Categorys() {
  return (
    <Container> 
      {Category.map(item=>(
        <CategoryItem item={item} />
      ))}  
    </Container>
  )
}
