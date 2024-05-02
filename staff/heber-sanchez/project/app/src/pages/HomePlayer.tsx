//@ts-nocheck
import { useNavigate, Routes, Route } from 'react-router-dom';
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav';
import MatchesList from '../components/MatchesList';
import Profile from '../components/Profile';


function HomePlayer() {
    const navigate = useNavigate()

    logger.debug('Home -> render')

    const [stamp, setStamp] = useState(null)
    const [matches, setMatches] = useState([])
    const [view, setView] = useState(null)

    const handleLoggedOut = () => navigate('/login')

    const loadMatches = () => {

        try {
            logic.retrieveMatches()
                .then(matches => {
                    setMatches(matches)
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadMatches()
    }, [stamp])

    const handleOnJoinedClick = (matchId) => {
        try {
            logic.joinMatch(matchId)
        } catch (error) {

        }
    }

    return <>
        <Header onUserLoggedOut={handleLoggedOut} />

        <main className='flex flex-col h-[100vh] bg-[#1A2902]'>


            <Routes>
                <Route path="/" element={<MatchesList matches={matches} stamp={stamp} joinOnClick={handleOnJoinedClick} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </main >

        <FooterNav />
    </>
}

export default HomePlayer