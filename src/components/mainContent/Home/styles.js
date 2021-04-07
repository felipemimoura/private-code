import styled from 'styled-components'
import firtImage from '../../../Assets/fristImage.png'

export const Container = styled.section`
    /* border: 1px solid red; */
    /* text-align: center; */
    width: 100%;
    height: 70vh;
    /* object-fit: cover; */
    border: 1px solid red;
    background: url(${firtImage})  no-repeat;
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
    color: white;
    font-size: 58px;
    line-height: 80px;
    margin:  0 auto;
    width: 75vw;
    text-align: center;
`

export const SubTitle = styled.h3`
    font-size: 24px;
    line-height:36px;
    font-weight: ${props => props.food ? "700" : "500"};
    color: #F6F6F6;

`

