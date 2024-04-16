import {logger, showFeedback} from '../utils'

import logic from '../logic.js'



function Post(props) {
    
        logger.debug('Post')

    const handleDeleteClick = postId => {
        if(confirm('delete post?'))
            try {
                logic.removePost(postId)

                props.onDeleted()
            } catch (error) {
                showFeedback(error)
            }
    }

    const handleEditClick = post => props.onEditClick(post)

    const { item: post} = props

        return <article>
            <h3>{post.author.username}</h3>

            <img src={post.image}/>

            <p>{post.text}</p>

            <time>{new Date(post.date).toLocaleString('en-CA')}</time>

            {logic.getLoggedInUserId() === post.author.id && <>
                <button onClick={()=> handleDeleteClick(post.id)}>🗑️</button>
                
                <button onClick={()=> handleEditClick(post)}>📝</button>
            </>}
        </article>
    }

export default Post