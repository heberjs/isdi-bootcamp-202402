//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useContext } from '../context.ts'
import getLoggedInfo from '../logic/getLoggedInfo.ts'




function Match({ item: match, onJoinClick, onEditMatchClick, onDeleteMatchClick, UnJoinedMatch }) {
    const { showFeedback, showConfirm } = useContext()

    const [view, setView] = useState('close')
    const [isPlayerJoined, setIsPlayerJoined] = useState(false)




    const handleEditMatchClick = match => onEditMatchClick(match)

    const handleJoinClick = match => {
        showConfirm('Join for € 6', (confirmed) => {
            if (confirmed) {
                try {
                    logic.joinMatch(match)
                        .then(() => onJoinClick())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
            }
        })

    }

    const handleDeleteClick = match =>
        showConfirm('Are you Sure to delete?', (confirmed) => {
            if (confirmed) {
                try {
                    logic.removeMatch(match)
                        .then(() => onDeleteMatchClick())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
            }
        })

    const handleUnJoinClick = match =>
        showConfirm('are you sure to leave?', (confirmed) => {
            if (confirmed) {
                try {
                    logic.unJoinMatch(match)
                        .then(() => UnJoinedMatch())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
            }
        })

    useEffect(() => {
        const PlayerJoined = match.players.some(players => players.id === getLoggedInfo().userId)
        setIsPlayerJoined(PlayerJoined)
    }, [match])




    logger.debug('Match -> render')
    return <>
        <article className='border-black border-2 flex flex-col bg-[#AEC09A] px-2 rounded-lg max-w-screen mt-4'>
            <div className='flex flex-col text-black font-semibold p-2'>

                <h3><strong>{match.title}</strong></h3>

                <div>
                    <p><strong>Field:</strong> {match.field.name}</p>
                </div>
                <div>
                    <p><strong>description:</strong> {match.description}</p>
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

                {view === 'close' && <button onClick={() => setView('open')} className='flex justify-center'> <img src="/public/info-icon.png" alt="info icon" className='w-8 h-8' /> </button>
                }
            </div>

            {view === 'open' && <div className='flex flex-col'>
                <div className='ml-2'>
                    <div>
                        <p><strong>Address: </strong>{match.field.address}</p>
                    </div>

                    <div>
                        <h3><strong>Players:</strong></h3>
                        <ul className='flex flex-col'>{match.players.map(player => <li key={player.id}>{player.fullname}</li>)}</ul>
                    </div>

                    {logic.getLoggedInfo().role === 'manager' ?
                        <>
                            <button className='mt-2 flex items-center' onClick={() => handleEditMatchClick(match)}><img src="/public/update-icon.png" alt="update icon" className='w-6 h-6' /><p className='p-1'><strong>Update</strong></p></button>

                            <button className='mt-2 flex items-center' onClick={() => handleDeleteClick(match.id)}><img src="/public/delete-icon.png" alt="delete icon" className='w-6 h-6' /><p className='p-1'><strong>Delete</strong></p></button>
                        </> :
                        (logic.getLoggedInfo().role === 'player' && !isPlayerJoined) ?

                            <button className='mt-2 flex items-center' onClick={() => handleJoinClick(match.id)}><img src="/public/join.png" alt="join icon" className='w-6 h-6' /><p className='p-1'><strong>Join me</strong></p></button> :
                            <button className='mt-2 flex items-center' onClick={() => handleUnJoinClick(match.id)}><img src="/public/unJoin-icon.png" alt="Unjoin icon" className='w-6 h-6' /><p className='p-1'><strong>Leave</strong></p></button>}


                </div>

                <button onClick={() => setView('close')} className='flex justify-center'><img src="/public/arrow-up-icon.png" alt="close arrow" className='w-8 h-8' /></button>
            </div>}



        </article>
    </>

}

export default Match
