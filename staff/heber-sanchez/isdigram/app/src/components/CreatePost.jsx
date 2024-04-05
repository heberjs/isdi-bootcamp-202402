import {logger, showFeedback} from '../utils'

import logic from "../logic.mjs";

import CancelButton from './library/CancelButton';
import SubmitButton from './library/SubmitButton';

import './CreatePost.sass'


function CreatePost (props) {
        logger.debug('CreatePost')


    const handleSubmit = event=>{
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)

            form.reset()

            props.onPostCreated()

        } catch (error) {
            showFeedback()
        }

    }

    const handleCancelClick = ()=> props.onCancelClick()

        logger.debug('CreatePost -> render')

        return <section className="create-post">

            <form onSubmit={handleSubmit}>

            <label htmlFor="image">Image</label>
            <input type="text" id="image" />

            <label htmlFor="text">Text</label>
            <input type="text" id="text" />

            <SubmitButton>Create</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick}/>
        </section>
    }

export default CreatePost