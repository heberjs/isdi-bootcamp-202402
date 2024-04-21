import {logger} from './utils'

import logic from './logic/logic'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
// import Chat from './pages/Chat'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Feedback from './components/Feedback'
import { useState } from 'react'
import {Context} from './context'
import Confirm from './components/Confirm'

import { errors } from 'com'

const { UnauthorizedError } = errors


function App() {
    logger.debug('App')

  const [feedBack, setFeedBack] = useState(null)

  const [confirm, setConfirm] = useState(null)

  const navigate = useNavigate()

  const goTologin = () => navigate('/login')

  const handleLoginClick = ()=> goTologin()

  const handleRegisterClick = ()=> navigate('/register')

  const handleUserLoggedIn = ()=> navigate('/')

  const handleUserLoggedOut = ()=> goTologin()

  const handleFeedbackAcceptClick = () => setFeedBack(null)

  const handleFeedback = (error, level = 'warn') => {
    if (error instanceof UnauthorizedError) {
      logic.logoutUser()

      level = 'error'

      goTologin()
    }
    setFeedBack({message: error.message, level})
  }

  const handleConfirm = (message, callback) => setConfirm({message, callback})

  const handleConfirmCancelclick = () => {
    confirm.callback(false)

    setConfirm(null)
  }

  const handleConfirmAcceptClick = ()=>{
    confirm.callback(true)

    setConfirm(null)
  }

  // const handleChatClick = ()=> setView('chat')
    logger.debug('App -> render')

  return <>
  <Context.Provider  value={[{showFeedback: handleFeedback, showConfirm: handleConfirm}]}>
  <Routes>
    <Route path="/login" element={logic.isUserLoggedIn()? <Navigate to="/"/> : <Login onRegisterClick={handleRegisterClick}
     onUserLoggedIn={handleUserLoggedIn}/>} />

     <Route path= "/register" element={logic.isUserLoggedIn()? <Navigate to="/"/> : <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick}/>} />

     <Route path="/*" element={logic.isUserLoggedIn()? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
     </Routes>
     </Context.Provider>

     {feedback && <Feedback message={feedback.message} level = {feedback.level} onAcceptClick={handleFeedbackAcceptClick} />}
     {confirm && <Confirm message="hola confirm" onCancelclick={handleConfirmCancelclick} onAcceptClick={handleConfirmAcceptClick} />}

     </>   
}

export default App


