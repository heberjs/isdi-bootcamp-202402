//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState } from 'react'
import { useContext } from '../context.ts'


function CreateField({ onCancelClickField, onFieldCreated }) {

    const { showFeedback } = useContext()


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
                .catch(error => showFeedBack(error, 'error'))
        } catch (error) {
            showFeedback(error)

        }
    }

    const handleCancelClick = () => onCancelClickField()

    logger.debug('Create-field -> Render')

    return <section className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 '>
        <div className='border p-8 rounded-xl bg-[#1A2902] transition-opacity duration-500 opacity-100'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>

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
        </div>
    </section>



}


export default CreateField