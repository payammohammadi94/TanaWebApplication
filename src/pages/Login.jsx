import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    background:linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("https://previews.123rf.com/images/kitzcorner/kitzcorner1607/kitzcorner160700150/60523266-flat-lay-of-men-casual-fashion-outfits-on-wooden-background-top-view.jpg") center;
    background-size: cover;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:#a69f97;

`

const Title = styled.h1`
    font-size:30px;
    font-weight:300;
    
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    background-color: #f5e4e4;
`
const Agreement = styled.p`
    font-size:20px;
    font-weight:20px
`
const Button = styled.button`
    width:25%;
    height:3rem;
    padding:15px 20px:
    border:none;
    background-color: teal;
    cursor: pointer;
    color:white;

`

export default function Login() {
  return (
    <Container>
    <Wrapper>
        <Title>LOGIN</Title>
        <Form>
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
        </Form>

            <Agreement>Hello World</Agreement>
            <Button>LOGIN</Button>
    </Wrapper>
</Container>
  )
}
