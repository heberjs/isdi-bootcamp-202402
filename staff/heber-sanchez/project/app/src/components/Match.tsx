//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { Link } from 'react-router-dom'

import { useContext, useEffect, useState } from 'react'

function Match({ item: match }) {
    const [view, setView] = useState('close')




    logger.debug('Match -> render')
    return <>
        <article className='border-black border-2 flex flex-col bg-white px-2'>
            <div className='flex flex-row'>
                <h3>{match.title}</h3>

                <div>
                    <p>description: {match.description}</p>
                </div>

                <div>
                    <p>Field: {match.field.name}</p>
                </div>

                <div>
                    <p>date: {match.date}</p>
                </div>
                {view === 'close' && <button onClick={() => setView('open')}>show Info</button>
                }
            </div>

            {view === 'open' && <div>
                <div>
                    <h3>Players</h3>
                    <ul>{match.players.map(player => player.fullname)}</ul>
                </div>

                <div>
                    <p>Address: {match.field.address}</p>
                </div>
                <button onClick={() => setView('close')}>X</button>
            </div>}


        </article>
    </>

}

export default Match