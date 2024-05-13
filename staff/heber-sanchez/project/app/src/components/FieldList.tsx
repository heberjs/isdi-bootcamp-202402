//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Field from './Field'
import EditField from './EditField'
import { useContext } from '../context.ts'



function FieldList({ onCreateFieldForm, onFieldEdited }) {
    logger.debug('Field List -> Render')

    const { showFeedback, showConfirm } = useContext()

    const [fields, setFields] = useState([])
    const [view, setView] = useState(null)
    const [field, setField] = useState([])
    const [stamp, setStamp] = useState(null)


    const clearView = () => setView(null)


    const loadFields = () => {
        try {
            logic.retrieveFields()
                .then(fields => {
                    setFields(fields)

                })
                .catch(error => showFeedBack(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }

    }


    useEffect(() => {
        loadFields()
    }, [stamp])

    const handleonEditFormClick = (field) => {
        setView('edit-field')
        setField(field)
    }

    const handleOnDeletedfieldClick = () => loadFields()

    const handleCanceledFormEdit = () => clearView()

    const handleOnFieldEdited = () => {
        clearView()
        setStamp(Date.now())
        setField(field)
        onFieldEdited()
    }


    return <section className='pt-[90px] pb-[140px] min-h-screen max-h-full  flex-grow'>
        <h1 className='text-white font-semibold items-start ml-8 mt-2 mb-2'>Your Fields :</h1>
        <article className='flex-grow'>

            <div className=' px-8 pt-2 flex flex-col gap-2'>
                {fields.map(field => <Field key={field.id} item={field} stamp={stamp} onDeleteFieldClick={handleOnDeletedfieldClick} onEditFieldClick={handleonEditFormClick} />)}
            </div>

        </article>

        {view === 'edit-field' && < EditField field={field} onCancelFormEditClick={handleCanceledFormEdit} onFieldEdited={handleOnFieldEdited} />}
    </section>

}

export default FieldList