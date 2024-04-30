//@ts-nocheck
import { useNavigate, Routes, Route } from 'react-router-dom';
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav';
import MatchesList from '../components/MatchesList';


function HomePlayer() {
    const navigate = useNavigate()
    // const [matches, setMatches] = useState
    logger.debug('Home -> render')

    const [stamp, setStamp] = useState(null)
    const [match, setMatch] = useState(null)
    const [view, setView] = useState(null)

    const handleLoggedOut = () => navigate('/')




    return <>
        <Header onUserLoggedOut={handleLoggedOut} />

        <main className='flex flex-col h-screen bg-[#1A2902]'>

            <h1 className='text-white font-bold'>Football Matches</h1>

            <Routes>
                <Route path="/" element={<MatchesList stamp={stamp} />} />
            </Routes>

        </main >

        <FooterNav />
    </>
}

export default HomePlayer