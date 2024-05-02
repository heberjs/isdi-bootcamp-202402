//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Match from './Match'

type MatchResponse = {
    _id: string,
    title: string,
    description: string,
    date: Date,
    field: { id: ObjectId, name: string, address: string },
    players: [{ id: ObjectId, fullname: string }],
    manager: ObjectId
}


type MatchedListProps = {
    matches: MatchResponse[],
    joinOnClick?: (matchId: string) => void
}

function MatchesList({ matches, joinOnClick }: MatchedListProps) {

    logger.debug('MatchesList -> render')

    return <>
        <section className='flex flex-col'>
            <h1 className='text-white font-bold px-8 pt-8 mb-'> Football Matches</h1>
            <div className=' px-8 pt-2 flex flex-col gap-2 '>
                {matches.map(match => <Match key={match._id} item={match} handleOnClick={joinOnClick} />)}
            </div>

        </section>
    </>
}

export default MatchesList