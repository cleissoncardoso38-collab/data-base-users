import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(to bottom, #000080, #ff8080);
    width: 100vw;
    height: 100vh;
    padding: 40px;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    gap: 20px;
    max-width: 500px;
`
export const ContainerIput = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;   
    
    
`
export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;

    span {
        color: #f3f37d;
    }
`
export const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 12px 20px;
    outline: none;
`
export const InputEmail = styled.div`
    width: 100%;
`


