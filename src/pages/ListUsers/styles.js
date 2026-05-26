import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(to bottom, #000080, #ff8080);
    min-height: 100vh;
    padding: 20px;
`
export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0 20px 0;

`
export const CardUsers = styled.div`
    display: flex;    
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 700px;
    padding: 20px;
    max-width: 400px;
    border-radius: 32px;
    background: linear-gradient(to bottom, #FF69B4, #FFFFE0);
    
    h1 {
        font-size: 25px;
        color: #fff;
    }
    p {
        font-size: 12px;
        font-weight: bold;
    }

`
export const TrashIcon = styled.img`
    width: 30px;
    cursor: pointer;
    
    

    &:hover {
        opacity: 0.8;
        
    }
    &:active {
        opacity: 0.5;
        
    }
`
export const UsersAvatar = styled.img`
    border-radius: 50px;
        width: 80px;
`