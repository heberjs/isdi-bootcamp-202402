//@ts-nocheck

import logic from '../logic'
import { useState, useEffect } from 'react'
import MatchesList from './MatchesList'
import { useContext } from '../context.ts'

function Profile() {
    const [matches, setMatches] = useState([])
    const [stamp, setStamp] = useState([])
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
    }, [stamp])

    const handleOnJoinedClick = () => {

        clearView()
        setStamp(Date.now())
    }

    const handleOnUnJoinedClick = () => {
        clearView()
        setStamp(Date.now())
    }

    return <>
        <section className='px-8 pt-2 flex flex-col gap-2'>

            <h1 className='text-white text-3xl font-bold p-4'>Your matches:</h1>

            <MatchesList matches={matches} stamp={stamp} onJoinedClick={handleOnJoinedClick} onUnJoinedClick={handleOnUnJoinedClick} />
        </section>
    </>
}

export default Profile