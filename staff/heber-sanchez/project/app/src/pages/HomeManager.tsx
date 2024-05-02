//@ts-nocheck
import { useNavigate, Route, Routes } from 'react-router-dom'
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav'
import MatchesList from '../components/MatchesList'
import FieldList from '../components/FieldList'


function HomeManager() {
    const navigate = useNavigate()

    logger.debug('HomeManager -> Render')

    const [stamp, setStamp] = useState(null)
    const [matches, setMatches] = useState([])
    const [view, setView] = useState(null)

    const handleLoggedOut = () => navigate('/login')

    const loadMatches = () => {
        try {
            logic.retrieveManagerMatches()
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



    logger.debug('Home/Manager -> render')
    return <>
        <Header onUserLoggedOut={handleLoggedOut} />

        <main className='flex flex-col h-screen bg-[#1A2902]'>

            <Routes>
                <Route path="/" element={<MatchesList matches={matches} stamp={stamp} />} />
                <Route path="/fields" element={<FieldList />} />
            </Routes>
        </main >

        <FooterNav />
    </>
}

export default HomeManager