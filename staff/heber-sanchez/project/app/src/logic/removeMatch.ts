//@ts-nocheck
import { validate, errors } from "com"

function removeMatch(matchId) {
    validate.text(matchId, 'matchId', true)
    validate.token(sessionStorage.token)


    return fetch(`${import.meta.env.VITE_API_URL}/matches/${matchId}`, {

        method: 'DELETE',
        headers: {

            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .then(res => {
            if (res.status === 200)
                return res.json()

                    .then(body => {
                        const { error, message } = body

                        const constructor = errors[error]

                        throw new constructor(message)
                    })
        })

}

export default removeMatch