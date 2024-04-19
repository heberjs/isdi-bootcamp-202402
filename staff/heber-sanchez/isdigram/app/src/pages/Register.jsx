import {logger} from '../utils'

import logic from '../logic/logic'

import { useContext } from '../context'

function Register({onUserRegistered, onLoginClick}) {
    const {showFeedback } = useContext()
        logger.debug('Register')
        

    const handleSubmit = event=>{
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)

        .then(()=> {
            form.reset()

            onUserRegistered()

        })

        .catch(error=>showFeedback(error.message, 'error'))
 
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleLoginClick = event=>{
        event.preventDefault()

        onLoginClick()
    }


        logger.debug('register -> render')
        return <main>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" id="birthdate" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button className="round-button" type="submit">Register</button>
            </form>

            <a href="" onClick={handleLoginClick}>Login</a>
        </main>
    }

export default Register