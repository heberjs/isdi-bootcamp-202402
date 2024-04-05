import {logger, showFeedback} from '../utils'

import logic from '../logic.mjs'

import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import './EditPost.sass'

function EditPost(props) {
    logger.debug('EditPost')


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        logger.debug('EditPost -> handleSubmit', text)

        try {
            logic.modifyPost(props.post.id, text)

            form.reset()

            props.onPostEdited()
        } catch (error) {
            showFeedback(error)
        }
    }
     const  handleCancelClick = ()=> props.onCancelClick()
    

        logger.debug('EditPost -> render')

        return <section className="edit-post">

            <form onSubmit={handleSubmit}>

                <label htmlFor="text">Text</label>
                <input type="text" id='text' defaultValue={props.post.text} />

                <SubmitButton>Save</SubmitButton>
            </form>

            <CancelButton onClick={handleCancelClick}/>
        </section>
    }


export default EditPost