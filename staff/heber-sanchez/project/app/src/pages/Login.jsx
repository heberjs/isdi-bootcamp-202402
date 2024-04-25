
import { logger } from '../utils'
import logic from '../logic/logic.js'

import { useContext } from '../context'



function Login(onUserLoggedIn, onRegisterClick) {
    logger.debug('Login')
    const { showFeedBack } = useContext()

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit')

        try {
            logic.LoginUser(email, password)
            .then(()=>{
                form.reset()

                onUserLoggedIn()
            })
            .catch(error=> showFeedBack(error, 'error'))
        } catch (error) {
            showFeedBack(error)
        }
    }

    const handleRegisterClick = event=>{
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