import React from 'react'
import  logo from '../../Assets/BellaOlonjelogo.png'
import * as S from './styles'
function BugerMenu() {
    return (
        <S.Container>
            <S.Image src={logo} />
            <S.Hamburger></S.Hamburger>
        </S.Container>
    )
}

export default BugerMenu
