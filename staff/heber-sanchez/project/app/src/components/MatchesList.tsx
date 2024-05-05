//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Match from './Match'

// type MatchResponse = {
//     _id: string,
//     title: string,
//     description: string,
//     date: Date,
//     field: { id: ObjectId, name: string, address: string },
//     players: [{ id: ObjectId, fullname: string }],
//     manager: ObjectId
// }


// type MatchedListProps = {
//     matches: MatchResponse[],
//     joinOnClick?: (matchId: string) => void
// }

function MatchesList({ stamp, joinOnClick, onEditMatchFormClick }) {
    logger.debug('MatchesList -> render')

    const [matches, setMatches] = useState([])

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

    const handleEditMatchClick = match => onEditMatchFormClick(match)

    return <>
        <section className='flex flex-col'>

            <div className=' px-8 pt-2 flex flex-col gap-2 '>
                {matches.map(match => <Match key={match.id} item={match} handleOnJoinClick={joinOnClick} onEditMatchClick={handleEditMatchClick} />)}
            </div>

        </section>
    </>
}

export default MatchesList