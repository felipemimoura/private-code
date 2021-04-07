import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    padding: 15px;
` 

export const ListContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 10px;
    font-size: 16px;
    line-height: 28px;   
    width: 50vw;

    &:first-child{
        color: red
    }
` 
export const ListItem = styled.li`
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    
    &:first-child{
        color: #fa400c;
    }
    &::first-letter{
        text-transform: uppercase
    }
    &:last-child{
        border: 1px solid black
    }
`
