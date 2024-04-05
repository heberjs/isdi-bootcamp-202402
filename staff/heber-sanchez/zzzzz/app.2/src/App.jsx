import {logger} from './utils'

import logic from './logic.mjs'

import { Component } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Chat from './pages/Chat'


class App extends Component {
  constructor(){
    logger.debug('App')

    super()

    this.state = {view: logic.isUserLoggedIn() ? 'home': 'landing'}
  }

  //over riding para ver cuando se setea el state - interpone un callback para ver cuando se setea
  setState(state){
    //al state lo convertimos a json, es un objeto
    logger.debug('App -> setState', JSON.stringify(state))
//llama  al padre ' component
    super.setState(state)
  }

  //sirve para hacer algo cuadno este montada toda la app, se suele usar para llamar a apis o servidor
  componentDidMount() {
    logger.debug('App -> componentDidMount')
  }

  goTologin = () => this.setState({view: 'login'})

  handleLoginClick = ()=> this.goTologin()

  handleRegisterClick = ()=> this.setState({view: 'register'})

  handleUserLoggedIn = ()=> this.setState({view: 'home'})

  handleUserLoggedOut = ()=> this.goTologin()

  handleChatClick = ()=> this.setState({view: 'chat'})

  handleHomeClick = ()=> this.setState({view: 'home'}) 

  render(){
    logger.debug('App -> render')

    if(this.state.view === 'landing')
    return <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick}/>

    else if(this.state.view === 'login')
    return <Login onRegisterClick={this.handleRegisterClick}
     onUserLoggedIn={this.handleUserLoggedIn}/>
    
     else if(this.state.view === 'register')
     return <Register onLoginClick={this.handleLoginClick} onUserRegistered={this.handleLoginClick} />
    
     else if(this.state.view === 'home') //new Home().render(...)
     return <Home onChatClick={this.handleChatClick}
     onUserLoggedOut={this.handleUserLoggedOut}/>

     else if(this.state.view === 'chat')
     return <Chat onHomeClick={this.handleHomeClick}/>
    
     else
     return <h1>🤨</h1>
  }
}

export default App


