//@ts-nocheck
import { logger } from '../utils'
import { useState } from 'react'
import logic from '../logic'



function RegisterManager({ onUserRegistered, onLoginClick }) {



    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const fullname = form.fullname.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerManager(fullname, email, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
        } catch (error) {

        }

    }
    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <main>
        <h1>FutNow</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="fullname">Full name</label>
            <input type="text" id="fullname" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="text" id="password" />


            <button type='submit'>Register</button>
        </form>
        <p>
            Already have an account? Go to <a href="" onClick={handleLoginClick}>Login</a>
        </p>



    </main>
}

export default RegisterManager