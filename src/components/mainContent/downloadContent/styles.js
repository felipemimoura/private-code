import styled from 'styled-components'
import download from '../../../Assets/footerimage.png'

export const Container = styled.section`
    width: 100%;
    height: 70vh;
    border: 1px solid red;
    background: url(${download})  no-repeat;
    background-size: cover;
 ` 

export const Wrapper = styled.div`
    display: flex;
    align-items: center;    
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    line-height: 57px;
    letter-spacing: 0.2;
    font-weight: bold;

`

export const Paragraph = styled.p`
    color: #Fff;
    font-size: 24px;
    line-height: 38px;
    font-weight: normal;
    letter-spacing: 0.2px;

`
