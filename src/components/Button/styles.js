import styled from "styled-components";


export const Button = styled.button`
    
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #e4dada'};
    width: ${props => props.theme === 'primary' ? '250px' : '150px'};
    height: ${props => props.theme === 'primary' ? '40px' : '50px'};
    color: #fff;
    font-weight: bold;
    border-radius: 30px;
    padding: 12px 20px;
    background: ${props => props.theme === 'primary' ? 'linear-gradient(to right, #ff66cc, #3336ff)' : 'transparent'};

    &:hover {
        ${props => props.theme === 'opacity: 0.8' ? 'none' : 'background: #fff; color: #000; opacity: 0.7'};
    }
    &:active {
        opacity: 0.5;
    }

`
