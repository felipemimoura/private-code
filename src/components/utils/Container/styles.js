import styled from 'styled-components'

export const Container = styled.article`
    border: 1px solid red;
    display: flex;
    flex-direction: ${props => props.left ? "row-reverse": "row"};
    align-items: center;
    justify-content: space-evenly

`