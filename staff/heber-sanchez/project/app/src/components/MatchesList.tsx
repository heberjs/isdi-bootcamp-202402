//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Match from './Match'

function MatchesList({ matches }) {



    logger.debug('MatchesList -> render')
    return <>
        <section className='flex flex-col'>
            <h1 className='text-white font-bold px-8 pt-8 mb-'> Football Matches</h1>
            <div className=' px-8 pt-2 flex flex-col gap-2 '>
                {matches.map(match => <Match key={match.id} item={match} />)}
            </div>

        </section>
    </>
}

export default MatchesList