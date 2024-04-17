import { Schema } from "mongoose"

const { Types: { ObjectId } } = Schema

import { PostType, Post } from "../data/index.ts"

import { validate, errors } from "com"

const { NotFoundError, SystemError } = errors

function removePost(postId: string) {
    validate.text(postId, 'postId', true)

    return Post.findById(postId)
        .catch(error => { throw new SystemError(error.message) })
        .then(post => {

            if (!post) throw new NotFoundError('post not found')

            return Post.deleteOne({ _id: postId })
        })

}

export default removePost
