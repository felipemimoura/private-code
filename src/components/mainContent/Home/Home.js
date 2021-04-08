import React from 'react'
import Button from '../../utils/Button/Button'
import * as S from './styles'


export const Home = () => {
    return (
        <S.Container>
            <S.Wrapper>
            <S.SubTitle food>Food App</S.SubTitle>
            <S.Title>Why stay hungry when <br></br>you can order form Bella Onojie</S.Title>
            <S.SubTitle>Download the bella onoje’s food app now on</S.SubTitle>
            <div>
                <Button>Playstore</Button>
                <Button apple>App Store</Button>
            </div>
            </S.Wrapper>
        </S.Container>
    )
}
