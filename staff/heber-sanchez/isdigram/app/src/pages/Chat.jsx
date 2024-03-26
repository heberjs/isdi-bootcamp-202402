import logic from "../logic.mjs";
import utils from "../utils.mjs";

import { Component } from "react";


class Chat extends Component {
    constructor(){
        super()
        try {
            const userList = logic.retrieveUsersWithStatus()

            this.state = {userList}



        } catch (error) {
            utils.showFeedback(error)
        }


    }

    render(){

        return <ul>
            {this.state.userList.map((user)=> <li key={user.id}>{user.username}</li>)}
        </ul>
    }
}

export default Chat