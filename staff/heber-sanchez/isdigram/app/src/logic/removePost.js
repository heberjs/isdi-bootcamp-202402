import { errors } from 'com'

function removePost() {

    return fetch('http://localhost:8080/post', {

        method: 'DELETE',
        headers: {

            'Authorization': `Bearer ${sessionStorage.token}`
        }
    })
        .then(res => {
            if (res.status === 200)
                return res.json()


            return res.json()
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })

}
export default removePost