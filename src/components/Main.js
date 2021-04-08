import React from 'react'
import Create from './mainContent/Create/Create'
import Feed from './mainContent/Feed/Feed'
import { Home } from './mainContent/Home/Home'

export const Main = () => {
    return (
        <main>
            <Home />
            <Feed />
            <Create />
        </main>
    )
}
