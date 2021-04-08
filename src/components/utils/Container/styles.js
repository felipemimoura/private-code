import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    flex-direction: ${props => props.left ? "row-reverse": "row"};
    align-items: center;
    justify-content: space-around;

`