//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState } from 'react'


function CreateField({ onCancelClickField, onFieldCreated }) {


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value

        const address = form.address.value

        try {
            logic.createField(name, address)
                .then(() => {
                    form.reset()

                    onFieldCreated()
                })
        } catch (error) {
            alert(error)

        }
    }

    const handleCancelClick = () => onCancelClickField()

    logger.debug('Create-field -> Render')

    return <section className='flex flex-col items-center h-screen bg-[#1A2902]'>

        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-8'>

            <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='text-white font-semibold'>Name</label>
                <input type="text" id="name" className='rounded-lg px-2 py-1' required />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="address" className='text-white'>Address</label>
                <input type="text" id="address" className='rounded-lg px-2 py-1' maxLength={120} required />
            </div>

            <button type='submit' className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4'>Create Field</button>
        </form>
        <button className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4' onClick={handleCancelClick}>Cancel</button>
    </section>



}


export default CreateField