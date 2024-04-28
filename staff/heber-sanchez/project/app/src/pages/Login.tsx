//@ts-nocheck
import { logger } from '../utils/index.ts'
import logic from '../logic/index.ts'

// import { Context, useContext } from '../context.js'



function Login({ onUserLoggedIn, onRegisterClick }) {
    logger.debug('Login')
    // const { showFeedBack } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit')

        try {
            logic.loginUser(email, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()
        onRegisterClick()
    }

    logger.debug('Login -> render')
    return <main>
        <h1>FutNow</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor='email'>E-mail</label>
            <input id='email' />

            <label htmlFor="password">Password</label>
            <input type="password" id='password' />

            <button type='submit'>Login</button>
        </form>
        <a href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Login