//@ts-nocheck
import { validate, errors } from 'com'

function retrievePlayer() {
    validate.token(sessionStorage.token)

    const [, payloadB64] = sessionStorage.token.split('.')
    const payloadJSON = atob(payloadB64)

    const payload = JSON.parse(payloadJSON)

    const { sub: userId } = payload

    return fetch(`${import.meta.env.VITE_API_URL}/players/${userId}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })

        .then(res => {
            if (res.status === 200) return
            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePlayer