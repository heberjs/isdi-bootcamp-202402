//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Match from './Match'

function MatchesList({ stamp }) {
    const [matches, setMatches] = useState([])

    const loadMatches = () => {
        logger.debug('matchList -> loadMatchs')

        try {
            logic.retrieveMatches()
                .then(setMatches)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadMatches()
    }, [stamp])

    logger.debug('MatchesList -> render')
    return <ul className=' px-5 pt-2 flex flex-col gap-2 '>
        {matches.map(match => <Match key={match.id} item={match} />)}
    </ul>
}

export default MatchesList