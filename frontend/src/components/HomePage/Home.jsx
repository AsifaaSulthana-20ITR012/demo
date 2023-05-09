import React from 'react'

import WelcomePage from './Welcome'
import Slideshow from './SlideShow';
import HomeProduct from './HomeProduct/HomeProduct';

function Home() {
    return (
        <>
            <Slideshow />
            <HomeProduct />
            <WelcomePage />
        </>
    )
}

export default Home