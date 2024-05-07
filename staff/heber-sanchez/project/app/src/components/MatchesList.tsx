//@ts-nocheck
import { logger } from '../utils'
// import logic from '../logic'
// import { useState, useEffect } from 'react'
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

function MatchesList({ matches, onEditMatchFormClick, onDeleteMatchClick, onJoinedClick, onUnJoinedClick }) {
    logger.debug('MatchesList -> render')

    const handleOnJoinClick = match => onJoinedClick(match)

    const handleEditMatchClick = match => onEditMatchFormClick(match)

    const handleOnDeleteClick = match => onDeleteMatchClick(match)

    const handleUnJoinedMatch = match => onUnJoinedClick(match)

    return <>
        <section className='flex-grow'>

            <div className=' px-8 pt-2 flex flex-col gap-2 '>
                {matches.map(match => <Match key={match.id} item={match} onJoinClick={handleOnJoinClick} onEditMatchClick={handleEditMatchClick} onDeleteMatchClick={handleOnDeleteClick} UnJoinedMatch={handleUnJoinedMatch} />)}
            </div>

        </section>
    </>
}

export default MatchesList