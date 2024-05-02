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
        <section>
            <div>
                <h1>Your matches:</h1>
            </div>
            <MatchesList matches={matches} />
        </section>
    </>
}

export default Profile