//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'




function Field({ item: field }) {





    logger.debug('Field -> render')
    return <article>
        <div>
            <h3>{field.title}</h3>
        </div>
        <div>
            <p>Address: {field.address}</p>
        </div>
    </article>
}

export default Field