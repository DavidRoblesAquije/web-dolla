import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* heroheader */}
            <HeroSection />
            {/* InfoSections */}
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            {/* Services */}
            <Services />
            {/* InfoSections */}
            <InfoSection {...homeObjThree} />
            {/* footer */}
            <Footer />
        </>
    )
}

export default Home;
