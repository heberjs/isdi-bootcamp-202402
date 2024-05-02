//@ts-nocheck
import { errors, validate } from 'com'

function joinMatch(matchId: string) {
    validate.text(matchId, 'matchId', true)
    validate.token(sessionStorage.token)

    const [, payloadB64] = sessionStorage.token.split('.')
    const payloadJSON = atob(payloadB64)

    const payload = JSON.parse(payloadJSON)

    const { sub: userId } = payload

    return fetch(`${import.meta.env.VITE_API_URL}/matches/join/${matchId}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${sessionStorage.token}`
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

export default joinMatch