//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from '../context.ts'




function Field({ item: field, onEditFieldClick, onDeleteFieldClick }) {

    const { showConfirm, showFeedback } = useContext()

    const handleEditFieldClick = (field) => onEditFieldClick(field)


    const handleDeleteClick = (field) => {

        showConfirm('Are you Sure to delete?', (confirmed) => {
            if (confirmed) {
                try {

                    logic.removeField(field)
                        .then(() => onDeleteFieldClick())

                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
            }
        })
    }

    logger.debug('Field -> render')
    return <article className='border-black border-2 flex-grow bg-[#AEC09A] px-2 rounded-lg max-w-screen text-black font-semibold p-2'>
        <div>
            <h3><strong>Field: </strong>{field.name}</h3>
        </div>
        <div>
            <p><strong>Address: </strong>{field.address}</p>
        </div>
        <div className='flex'>
            <button className='mt-2 flex items-center' onClick={() => handleEditFieldClick(field)}><img src="/public/update-icon.png" alt="update icon" className='w-6 h-6' /><p className='p-1'><strong>Update</strong></p></button>

            <button className='mt-2 flex items-center' onClick={() => handleDeleteClick(field.id)}><img src="/public/delete-icon.png" alt="delete icon" className='w-6 h-6' /><p className='p-1'><strong>Delete</strong></p></button>
        </div>
    </article >
}

export default Field