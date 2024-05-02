import logic from '../logic'
import { Link } from 'react-router-dom'

function FooterNav() {


    const userRole = logic.getLoggedInfo().role

    return <>
        <nav className="fixed bottom-0 w-full flex justify-between items-center box-border  bg-[#344C11] p-4">

            <Link to=""><img className='w-8 h-8 top-1' src="../../../public/search-icon.png" alt="search icon" /></Link>


            <Link to="/"><img className='w-8 h-8 top-1' src="../../../public/home-icon.png" alt="home icon" /></Link>

            {userRole === 'player' && <Link to="/profile"><img className='w-11 h-11 top-1' src="/public/profile-icon.png" alt="profile icon" /></Link>}
            {userRole === 'manager' && <Link to="/fields"><img className='w-11 h-11 top-1' src="/public/field-icon.png" alt="field icon" /></Link>}


        </nav >

    </>
}


export default FooterNav