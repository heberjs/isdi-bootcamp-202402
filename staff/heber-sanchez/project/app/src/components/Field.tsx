//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'




function Field({ item: field }) {





    logger.debug('Field -> render')
    return <article className='border-black border-2 flex flex-col bg-[#AEC09A] px-2 rounded-lg max-w-screen-lg text-black font-semibold p-2'>
        <div>
            <h3><strong>Field:</strong>{field.name}</h3>
        </div>
        <div>
            <p><strong>Address:</strong> {field.address}</p>
        </div>
    </article>
}

export default Field