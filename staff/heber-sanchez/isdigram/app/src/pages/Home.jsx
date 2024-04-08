import {logger, showFeedback} from '../utils'

import logic from "../logic.mjs";
import { Component } from 'react';
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import EditPost from '../components/EditPost'


class Home extends Component {
    constructor(){
        logger.debug('Home Constructor')
        super()

        this.state = {user: null, view: null, stamp: null, post: null, chat: null}

    }

    componentDidMount() {
        try {
            logic.retrieveUser((error, user)=>{
                if (error) {
                    showFeedback(error)

                    return
                }

                this.setState({user})
            })
        } catch (error) {
            showFeedback(error)
        }
    }

    setState(state){
        logger.debug('Home -> setState', JSON.stringify(state))
        super.setState(state)
    }

    clearView = ()=> this.setState({view: null})

    handleChatButtonClick =()=> this.props.onChatClick()

    handleLogoutClick = ()=> {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        }finally {
            this.props.onUserLoggedOut()
        }
    }

    handleEditPostClick = post=> this.setState({view: 'edit-post', post})

    handleCreatePostCancelClick = ()=> this.clearView()

    handlePostCreated = ()=> this.setState({view : null, stamp: Date.now()})

    handleEditPostCancelClick = ()=> this.clearView()

    handlePostEdited = ()=> this.setState({view: null, stamp: Date.now(), post: null})

    handleCreatePostClick = ()=> this.setState({view: 'create-post'})

    

    render(){
        logger.debug('Home -> render')

        return <main className="main">
            {this.state.user && <h1>Hello, {this.state.user.name}!</h1>}

            <nav>
                <button 
                    onClick = {this.handleChatButtonClick}>💬</button>
                <button
                    onClick={this.handleLogoutClick}>🚪</button>
            </nav>

            <PostList stamp= {this.state.stamp} onEditPostClick={this.handleEditPostClick} />

            {this.state.view === 'create-post' && <CreatePost onCancelClick ={this.handleCreatePostCancelClick} onPostCreated = {this.handlePostCreated} />}

            {this.state.view === 'edit-post' && <EditPost post={this.state.post} onCancelClick={this.handleEditPostCancelClick} onPostEdited={this.handlePostEdited} />}

            <footer className="footer">
                
                <button onClick={this.handleCreatePostClick}
                >➕</button>

            </footer>
        </main>
    }
}

export default Home

