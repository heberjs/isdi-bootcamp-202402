//@ts-nocheck
import { useNavigate, Routes, Route } from 'react-router-dom';
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav';
import MatchesList from '../components/MatchesList';
import Profile from '../components/Profile';
import { useContext } from '../context.ts';


function HomePlayer() {
    const navigate = useNavigate()

    logger.debug('Home -> render')

    const [stamp, setStamp] = useState(null)
    const [matches, setMatches] = useState([])
    const [view, setView] = useState(null)


    const { showFeedback } = useContext()
    const clearView = () => setView(null)


    const handleLoggedOut = () => navigate('/login')

    const loadMatches = () => {
        try {
            logic.retrieveMatches()
                .then(matches => {
                    setMatches(matches)
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMatches()
    }, [])

    const handleOnJoinedClick = () => {

        clearView()
        loadMatches()
    }

    const handleOnUnJoinedClick = () => {
        clearView()
        loadMatches()
    }

    return <>
        <Header onUserLoggedOut={handleLoggedOut} />

        <main className='flex flex-col h-screen bg-[#1A2902]'>
            <Routes>
                <Route path="/" element={<MatchesList matches={matches} onJoinedClick={handleOnJoinedClick} onUnJoinedClick={handleOnUnJoinedClick} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </main >

        <FooterNav />
    </>
}

export default HomePlayer