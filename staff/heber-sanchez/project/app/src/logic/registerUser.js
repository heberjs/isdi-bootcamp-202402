import { validate, errors } from 'com'


function registerUser(fullname, email, password, role) {
    validate.text(fullname)
    validate.email(email)
    validate.password(password)
    validate.text(role)

    const user = { fullname, email, password, role }

    const json = JSON.stringify(user)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if (res.status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default registerUser