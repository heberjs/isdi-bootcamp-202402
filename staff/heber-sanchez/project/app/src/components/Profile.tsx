//@ts-nocheck

import logic from '../logic'
import { useState, useEffect } from 'react'
import MatchesList from './MatchesList'

function Profile() {
    const [matches, setMatches] = useState([])

    const loadMatches = () => {

        try {
            logic.retrieveJoinedMatches()
                .then(setMatches)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadMatches()
    }, [])

    return <>
        <section className='flex flex-col justify-center items-center vh-screen'>

            <h1 className='text-white text-3xl font-bold p-4'>Your matches:</h1>

            <MatchesList matches={matches} />
        </section>
    </>
}

export default Profile