//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState } from 'react'

function EditMatch({ match, onMatchEdited, onCancelEditClick }) {



    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value

        const description = form.description.value

        const date = form.date.value

        logger.debug('edit-match -> handleSubmit', title, description, date)

        try {

            logic.editMatch(match.id, title, description, date)
                .then(() => {
                    form.reset()

                    onMatchEdited()
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    const handleCancelClick = () => onCancelEditClick()

    const currentDate = new Date()
    const minDate = currentDate.toISOString().slice(0, 16)

    logger.debug('Edit-Match Form -> Render')
    // return <section className='flex flex-col justify-center items-center h-screen bg-[#1A2902]'>
    return <section className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 '>

        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-8'>

            <div className='flex flex-col mb-4'>
                <label htmlFor="title" className='text-white font-semibold'>Title</label>
                <input type="text" id="title" defaultValue={match.title} className='rounded-lg px-2 py-1' required />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="description" className='text-white'>description</label>
                <input type="text" id="description" defaultValue={match.description} className='rounded-lg px-2 py-1' maxLength={120} required />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="date" className='text-white'>Date time</label>
                <input type="datetime-local" defaultValue={match.date ? new Date(match.date).toISOString().slice(0, 16) : ''} id="date" min="2024-04-30T00:00" min={minDate} max="2024-12-31T23:59" className='rounded-lg px-2 py-1' />
            </div>

            <button type='submit' className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4'>Save</button>
        </form>
        <button className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-[210px] mt-4' onClick={handleCancelClick}>Cancel</button>
    </section>


}

export default EditMatch