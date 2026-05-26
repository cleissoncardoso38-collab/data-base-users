import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import PropTypes from "prop-types"
import {
  Container, ContainerIput, Form, Input,
  InputLabel, InputEmail
} from './styles'

import DefaultButton from '../../components/Button/'
import TopBackground from '../../components/Topbackground/'
import TopTitle from '../../components/topTitle'
import api from '../../services/api'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser (){
    const data = await api.post ('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
      
    })
    navigate('/listadeusuarios')
    
  }

  return (
    <Container>
      
      <TopBackground/>      

      <TopTitle>Cadastro de Usuários</TopTitle>

      <Form>
        <ContainerIput>
          <div>
            <InputLabel>Nome <span>*</span>
              <Input placeholder='Nome do usuário' ref={inputName}/>
            </InputLabel>
            </div>
            <div>
            <InputLabel>Idade <span>*</span>
              <Input placeholder='Idade do usuário' ref={inputAge}/>
            </InputLabel>
          </div>
        </ContainerIput>

        <InputEmail>
          <InputLabel>E-mail <span>*</span>
            <Input placeholder='E-mail do usuário' ref={inputEmail}/>
          </InputLabel>

        </InputEmail>


        <DefaultButton type='button' onClick={registerNewUser} theme='primary' >Cadastrar Usuário</DefaultButton>

      </Form>

      <DefaultButton type='button' onClick={()=> navigate('/listadeusuarios')}>Listar Usuários</DefaultButton>

    </Container>
  )
}

export default Home
