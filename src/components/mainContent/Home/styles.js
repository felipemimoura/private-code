import styled from 'styled-components'
import firtImage from '../../../Assets/fristImage.png'

export const Container = styled.section`
    /* border: 1px solid red; */
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    object-fit: cover;
    background: url(${firtImage}) no-repeat;
    color: white;
` 

export const Title = styled.h1`
    font-size: 58px;
    line-height: 80px;
    margin:  0 auto;
    width: 75vw;
    text-align: center;
`

export const SubTitle = styled.h3`
    font-size: 24px;
    line-height:36px
`