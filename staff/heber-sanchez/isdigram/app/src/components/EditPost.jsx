import {logger} from '../utils'

import logic from '../logic/logic'

import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import './EditPost.sass'

import { useContext } from '../context'

function EditPost(props) {
    logger.debug('EditPost')

    const { showFeedback } = useContext()


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        logger.debug('EditPost -> handleSubmit', text)

        try {
            logic.modifyPost(props.post.id, text)
            .then(()=>{
                form.reset()

                props.onPostEdited()
            })
            .catch(error=> showFeedback(error), 'error')

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