import { logger } from './utils'
import { Context } from './context'
import { useState } from 'react'
import logic from './logic/logic'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Feedback from './components/Feedback'
import Confirm from './components/Confirm'
import { errors } from 'com'

import Register from './pages/Register'
import Login from './pages/Login'
import HomePlayer from './pages/HomePlayer'
import HomeManager from './pages/HomeManager'
import HomeRoot from './pages/HomeRoot'

const { UnauthorizedError} = errors



function App() {

  const [feedback, setFeedback] = useState(null)
  const [confirm, setConfirm] = useState(null)

  const navigate = useNavigate()

  const goToLogin = ()=> navigate('/login')

  const handleRegisterClick = ()=> goToLogin()

  const handleUserLoggedIn = ()=> navigate('/')

  const handleLoginClick = goToLogin()

  const handleFeedback = (error, level = 'warn')=>{
    if (error instanceof UnauthorizedError) {
      logic.logoutUser()

      level = 'error'

      goToLogin()
    }

    setFeedback({message: error.message, level})
  }
const handleConfirm = (message, callback) => setConfirm({message, callback})

const handleConfirmAcceptClick = () => {
    confirm.callback(true)

    setConfirm(null)
  }

  const handleConfirmCancelClick = ()=>{
  confirm.callback(false)

  setConfirm(null)
  }



   logger.debug('App -> render')
  return <>

  <Context.Provider value={{showFeedback: handleFeedback, showConfirm: handleConfirm}}>
    <Routes>
      <Route path="/login" element={logic.isUserLoggedIn() && logic.getLoggedInUserRole() === 'player'? <Navigate to="/home"/> : <Login onRegisterClick={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />}/>
      <Route path="/register" element={logic.isUserLoggedIn()? <Navigate to= "/" />: <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick}/>}/>
      <Route path="/home"{<HomePlayer/>}/>
      <Route path="/homeManager"{<HomeManager/>}/>
      <Route path="/home"
    </Routes>
    </Context.Provider>

    {feedback && <Feedback message={feedback.message} level={feedback.level} onAcceptClick={handleFeedbackAcceptClick} />}

    {confirm && <Confirm message="hola confirm" onCancelClick={handleConfirmCancelClick} onAcceptClick={handleConfirmAcceptClick} />}
  </>

}

export default App
