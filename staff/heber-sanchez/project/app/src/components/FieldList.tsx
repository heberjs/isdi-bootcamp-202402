//@ts-nocheck
import logic from '../logic'
import { useState, useEffect } from 'react'
import Field from './Field'



function FieldList() {
    const [fields, setFields] = useState([])


    const loadFields = () => {

        try {
            logic.retrieveFields()
                .then(fields => {
                    setFields(fields)
                })
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadFields()
    }, [stamp])


    return <>
        <section>
            <h1>Your Fields</h1>
            <article className='flex flex-col'>

                <div className=' px-8 pt-2 flex flex-col gap-2 '>
                    {fields.map(match => <Field key={field._id} item={field} />)}
                </div>

            </article>
        </section>
    </>
}

export default FieldList