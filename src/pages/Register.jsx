
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    background:linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("https://us.123rf.com/450wm/bee32/bee321702/bee32170201254/72331028-men-s-fashion.jpg?ver=6") center;
    background-size: cover;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:50%;
    padding:20px;
    background-color:#a9a299;

`

const Title = styled.h1`
    font-size:30px;
    font-weight:300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    height:2rem;
    background-color:#d9d2d2
`
const Agreement = styled.p`
    font-size:20px;
    font-weight:20px
`
const Button = styled.button`
    width:40%;
    height:3rem;
    padding:15px 20px:
    border:none;
    background-color: teal;
    cursor: pointer;
    color:white;

`




export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE NEW ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"></Input>
                <Input placeholder="Last Name"></Input>
                <Input placeholder="Username"></Input>
                <Input placeholder="Phone"></Input>
                <Input placeholder="Password"></Input>
                <Input placeholder="Password again"></Input>
            </Form>

                <Agreement>Hello World</Agreement>
                <Button>Register</Button>
                

        </Wrapper>
    </Container>
  )
}
