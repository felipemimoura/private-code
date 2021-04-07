import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.appstore ? "none" : "#fa400c"};
    color: white;
    padding: 16px 58px;
    border-radius: 30px;
    border: ${props => props.appstore ? "0.5px solid rgba(255,255,255 ,0.8) " : "0.5px solid rgba(183,50,39, 0.2)"};
    cursor: pointer;
    font-weight: bold;
    
`