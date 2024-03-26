import { Component } from "react";
import utils from "../utils.mjs";
import logic from "../logic.mjs";


class CreatePost extends Component {
    constructor(){
        super()

    }

    render(){
        return <section className="create-post">
            <form
        onSubmit={event=> {
            event.preventDefault()

            const form = event.target

            const image = form.image.value
            const text = form.text.value

            try {
                logic.createPost(image, text)

                form.reset()

                this.props.onPostCreated()

            } catch (error) {
                utils.showFeedback()
            }
        }}
        >
            <label htmlFor="image">Image</label>
            <input type="text" id="image" />

            <label htmlFor="text">Text</label>
            <input type="text" id="text" />

            <button className="round-button submit-button" type="submit">Create</button>
        </form>

        <button className="round-button cancel-button" onClick={()=> this.props.onCancelClick()}>Cancel</button>
        </section>
    }
}

export default CreatePost