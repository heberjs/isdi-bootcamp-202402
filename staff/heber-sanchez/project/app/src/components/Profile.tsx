//@ts-nocheck
import logic from '../logic'
import { useState, useEffect } from 'react'
import MatchesList from './MatchesList'
import getLoggedInfo from '../logic/getLoggedInfo'




function Profile() {

    const [stamp, setStamp] = useState(null)
    const [matches, setMatches] = useState([])

    const loggedUser = getLoggedInfo()


    const loadMatches = () => {

        try {
            logic.retrieveMatches()
                .then(matches => {

                    const Filteredmatches = matches.filter((match) => match.players.some(player => player._id === loggedUser.userId))
                    setMatches(Filteredmatches)
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadMatches()
    }, [stamp])


    return <>

        <section>
            <div>
                <h1></h1>

            </div>

            <MatchesList matches={matches} stamp={stamp} />
        </section>
    </>
}

export default Profile