//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic/index.js'

// import { useContext } from '../context.ts'


function Register({ onUserRegistered, onLoginClick }) {
    // const { showFeedBack } = useContext()


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const fullname = form.fullname.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerPlayer(fullname, email, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }

    }
    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return <main>
        <h1>FutNow</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="fullname">Full name</label>
            <input type="text" id="fullname" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="passsword" id="password" />


            <button type='submit'>Register</button>
        </form>
        <p>
            Already a member? Go to <a href="" onClick={handleLoginClick}>Sign in</a>
        </p>

    </main>
}

export default Register