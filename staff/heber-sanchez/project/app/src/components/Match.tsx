//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { Link } from 'react-router-dom'

import { useContext, useEffect, useState } from 'react'

type MatchResponse = {
    title: string,
    description: string,
    date: Date,
    field: { id: ObjectId, name: string, address: string },
    players: [{ id: ObjectId, fullname: string }],
    manager: ObjectId
}


type MatchProps = {
    matches: MatchResponse[],
    handleOnClick?: (matchId: string) => void
}

function Match({ item: match, handleOnClick }: MatchProps) {
    const [view, setView] = useState('close')




    logger.debug('Match -> render')
    return <>
        <article className='border-black border-2 flex flex-col bg-[#AEC09A] px-2 rounded-lg max-w-screen-lg '>
            <div className='flex flex-col text-black font-semibold p-2'>

                <h3>{match.title}</h3>

                <div>
                    <p>Field: {match.field.name}</p>
                </div>
                <div>
                    <p>description: {match.description}</p>
                </div>

                <div>
                    <p><strong>Date: </strong>{new Date(match.date).toLocaleString(navigator.language, {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    }).replace(',', '')}</p>
                </div>

                {view === 'close' && <button onClick={() => setView('open')} className='flex justify-center'> <img src="../../public/info-icon.png" alt="info icon" className='w-8 h-8' /> </button>
                }
            </div>

            {view === 'open' && <div className='flex flex-col'>
                <div className='ml-2'>
                    <div>
                        <p><strong>Address: </strong>{match.field.address}</p>
                    </div>

                    <div>
                        <h3>Players:</h3>
                        <ul className='flex flex-col'>{match.players.map(player => <li>{player.fullname}</li>)}</ul>
                    </div>

                    <button onClick={() => handleOnClick(match._id)} className=' inline-block border-2'>Join</button>
                </div>
                <button onClick={() => setView('close')} className='flex justify-center'><img src="../../public/arrowUp-icon.png" alt="close arrow" className='w-8 h-8' /></button>
            </div>}



        </article>
    </>

}

export default Match