//@ts-nocheck

import logic from '../logic'
import { useState, useEffect } from 'react'




function Header({ onUserLoggedOut }) {


    const [user, setUser] = useState(null)

    useEffect(() => {

        try {
            if (logic.getLoggedInfo().role === 'player') {
                logic.retrievePlayer()

                    .then(setUser)
                    .catch(error => alert(error))

            } else if (logic.getLoggedInfo().role === 'manager') {
                logic.retrieveManager()

                    .then(setUser)
                    .catch(error => alert(error))
            }
        } catch (error) {
            alert(error)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    return <header className='flex justify-between bg-[#344C11] p-4'>
        <div className='flex justify-center mt-2'>
            {user && <h1 className='text-white font-semibold ml-2'>{user.fullname}</h1>}
        </div>

        <div className='flex justify-center items-center'><img className='w-[200px] top-20' src="../../public/pelota-logo-fino-blanco.png" alt="" /></div>

        <button onClick={handleLogoutClick}><img src="../../public/logout-icon.png" className='w-8 h-8' alt="" /></button>
    </header >
}

export default Header