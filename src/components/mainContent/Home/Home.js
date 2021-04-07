import React from 'react'
import Button from '../../utils/Button/Button'
import * as S from './styles'


export const Home = () => {
    return (
        <S.Container>
            <S.SubTitle>Food App</S.SubTitle>
            <S.Title>Why stay hungry when <br></br>you can order form Bella Onojie</S.Title>
            <h4>Download the bella onoje’s food app now on</h4>
            <div>
            <Button >PlayStore</Button>
           

            </div>
        </S.Container>
    )
}
