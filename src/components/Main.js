import React from 'react'
import useViewport from '../Hooks/useViewport'
import Checkout from './mainContent/Checkout/Checkout'
import Create from './mainContent/Create/Create'
import Download from './mainContent/downloadContent/Download'
import DownloadMobile from './mainContent/DownloadMobile/DownloadMobile'
import Explore from './mainContent/Explore/Explore'
import Feed from './mainContent/Feed/Feed'
import { Home } from './mainContent/Home/Home'

export const Main = () => {
    const {width} = useViewport()
    const breakpoint = 800
    const download = width < breakpoint? <DownloadMobile /> : <Download />
    return (
        <main>
            <Home />
            <Feed />
            <Create />
            <Explore/>
            <Checkout/>
            {download}
        </main>
    )
}
