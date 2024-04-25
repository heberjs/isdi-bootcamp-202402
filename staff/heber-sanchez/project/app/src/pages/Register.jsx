import { useState } from 'react'
import logic from '../logic/logic'



function Register({onUserRegistered, onLoginClick}) {

    const [role, setRole] = useState('Fullname')

    const handleRoleChange= (event)=>{
        setRole(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target
        
        const fullname = form.fullname
        const email = form.email
        const password = form.password
        const role = form.role
        try {
            logic.registerUser(fullname, email, password, role)
            .then(()=>{
                form.reset()

                onUserRegistered()
            })
        } catch (error) {
            
        }

    }
    const handleLoginClick = event=>{
        event.preventDefault()

        onLoginClick()
    }

    return <main>
        <h1>FutNow</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={handleRoleChange}>
                <option value="user">User</option>
                <option value="manager">Manager</option>
            </select>

            <label htmlFor="fullname">{role === 'manager'?'Company Name':'Fullname'}</label>
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

export default Register