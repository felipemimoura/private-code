import React from 'react'
import FooterBar from '../components/Footer/FooterBar'
import useViewport from '../Hooks/useViewport'
import MobileFooter from './MobileFooter/MobileFooter'


function Footer() {
    const {width} = useViewport()
    const breakpoint = 800
    return width < breakpoint ? <MobileFooter/> : <FooterBar />
}

export default Footer
