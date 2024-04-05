import {logger, showFeedback} from '../utils'

import logic from "../logic.mjs";

import { Component } from "react";


class Chat extends Component {
    constructor(){
        logger.debug('Chat')
        super()
        try {
            const userList = logic.retrieveUsersWithStatus()

            this.state = {userList}



        } catch (error) {
            showFeedback(error)
        }

    }

   handleOnHomeButtonClick = ()=> this.props.onHomeClick()


    render(){
        logger.debug('Chat -> render')
        return <main>
        <nav>

            <h1>Chat</h1>
            <button onClick={this.handleOnHomeButtonClick}>🏠</button>
        </nav>
        <ul>
            {this.state.userList.map((user)=> <li key={user.id}>{user.username}</li>)}
        </ul>
        </main>
    }
}

export default Chat