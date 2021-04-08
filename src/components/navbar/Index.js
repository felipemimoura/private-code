import React from 'react'
import  logo from '../../Assets/BellaOlonjelogo.png'
import * as S from './styles'

export const Index = () => {
    return (
        <S.Container>
            <img src={logo}  alt="Logo do Bella Olonje"/>
            <S.ListContainer>
                <S.ListItem>home</S.ListItem>
                <S.ListItem>product</S.ListItem>
                <S.ListItem>Faq</S.ListItem>
                <S.ListItem>Contact</S.ListItem>
            </S.ListContainer>

        
        </S.Container>
    )
}
