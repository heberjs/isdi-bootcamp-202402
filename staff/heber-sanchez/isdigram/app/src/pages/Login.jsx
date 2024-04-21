import {logger} from '../utils'

import logic from '../logic/logic'

import { useContext } from '../context'

function Login({onUserLoggedIn, onRegisterClick}) {
        logger.debug('Login')

        const {showFeedback} = useContext

    const handleSubmit = event=>{
        event.preventDefault();

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)
        try {
            logic.loginUser(username, password)
            .then(()=>{
                form.reset()

                onUserLoggedIn()
            })
            .catch(error=> showFeedback(error, 'error'))
                
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleRegisterClick = event=> {
        event.preventDefault()
        onRegisterClick()
    }

        logger.debug('Login -> render')

        return <main>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>

                <button className="round-button" type="submit">Login</button>
            </form>

            <a href="" onClick={handleRegisterClick}>Register</a>
        </main>
    }

export default Login