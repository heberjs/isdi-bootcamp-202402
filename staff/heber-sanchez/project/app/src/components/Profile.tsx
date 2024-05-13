//@ts-nocheck

import logic from '../logic'
import { useState, useEffect } from 'react'
import MatchesList from './MatchesList'
import { useContext } from '../context.ts'

function Profile({ setStamp }) {
    const [matches, setMatches] = useState([])
    const [view, setView] = useState(null)

    const { showFeedback } = useContext()

    const clearView = () => setView(null)

    const loadMatches = () => {

        try {
            logic.retrieveJoinedMatches()
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
        setStamp(Date.now())
    }

    return <section className='px-8 pt-2 flex flex-col gap-2 min-h-screen max-h-full'>


        <MatchesList matches={matches} onJoinedClick={handleOnJoinedClick} onUnJoinedClick={handleOnUnJoinedClick} />
    </section>

}

export default Profile