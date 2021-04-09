import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    flex-direction: ${props => props.left ? "row-reverse": "row"};
    align-items: center;
    justify-content: space-around;
    
    @media(max-width: 800px){
        justify-content: space-between;
        align-items:center;
        flex-direction: ${props => props.left ? "column-reverse": "column-reverse"};
        
    
    }
`