import React from 'react'
import Checkout from './mainContent/Checkout/Checkout'
import Create from './mainContent/Create/Create'
import Explore from './mainContent/Explore/Explore'
import Feed from './mainContent/Feed/Feed'
import { Home } from './mainContent/Home/Home'

export const Main = () => {
    return (
        <main>
            <Home />
            <Feed />
            <Create />
            <Explore/>
            <Checkout/>
        </main>
    )
}
