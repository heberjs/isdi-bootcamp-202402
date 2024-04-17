import {logger} from './utils'


import { useState } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import logic from './logic/logic'
// import Chat from './pages/Chat'


function App() {
    logger.debug('App')

    const [view, setView] = useState(logic.isUserLoggedIn()? 'home' : 'landing')



  const goTologin = () => setView('login')

  const handleLoginClick = ()=> goTologin()

  const handleRegisterClick = ()=> setView('register')

  const handleUserLoggedIn = ()=> setView('home')

  const handleUserLoggedOut = ()=> goTologin()

  const handleChatClick = ()=> setView('chat')

  const handleHomeClick = ()=> setView('home') 


    logger.debug('App -> render')

  return <>
    {view === 'landing' && <Landing onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick}/>}

    {view === 'login' && <Login onRegisterClick={handleRegisterClick}
     onUserLoggedIn={handleUserLoggedIn}/>}
    
    {view === 'register' && <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick}/>}
    
     {view === 'home' && <Home onChatClick={handleChatClick}
     onUserLoggedOut={handleUserLoggedOut}/>}

     {view === 'chat' && <Chat onHomeClick={handleHomeClick}/>}
     </>   
}

export default App


