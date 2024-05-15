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

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14261.461455979836!2d${field.location.longitude}!3d${field.location.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1715701763805!5m2!1ses!2ses`

    logger.debug('Field -> render')
    return <article className='border-black border-2 flex-grow  bg-[#AEC09A] px-2 rounded-lg max-w-screen text-black font-semibold p-2'>
        <div className='flex justify-between'>
            <div className=''>
                <h3 className=' border-b-2 border-[#778D45] mr-2'><strong>Field: </strong>{field.name}</h3>

                <p className='pt-2'><strong>Address: </strong>{field.address}</p>
            </div>
            <div className='mt-2'>
                <iframe
                    src={mapUrl}
                    width="150 "
                    height="150"
                    style={{ border: '2px solid black' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div className='flex justify-center items-center gap-8'>
            <button className='mt-2 flex items-center' onClick={() => handleEditFieldClick(field)}><img src="/public/update-icon.png" alt="update icon" className='w-6 h-6' /><p className='p-1'><strong>Update</strong></p></button>

            <button className='mt-2 flex items-center' onClick={() => handleDeleteClick(field.id)}><img src="/public/delete-icon.png" alt="delete icon" className='w-6 h-6' /><p className='p-1'><strong>Delete</strong></p></button>
        </div>
    </article >
}

export default Field