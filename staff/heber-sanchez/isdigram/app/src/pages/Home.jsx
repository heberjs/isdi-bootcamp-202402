import {logger, showFeedback} from '../utils'


import { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import EditPost from '../components/EditPost'
import logic from '../logic/logic';


function Home(props) {
    logger.debug('Home Constructor')

    const [view, setView] = useState(null)
    const [user, setUser] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [post, setPost] = useState(null)   

    useEffect(()=>{
        
        try {
        logic.retrieveUser()
        //.then(user=> setUser(user))

        .then(setUser)
        .catch(showFeedback)

    } catch (error) {
        showFeedback(error)
    }
    },[])

    const clearView = ()=> setView(null)

    const handleChatButtonClick =()=> props.onChatClick()

    const handleLogoutClick = ()=> {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        }finally {
            props.onUserLoggedOut()
        }
    }

    const handleEditPostClick = post=>{ 
    setView('edit-post') 
    setPost(post)}

    const handleCreatePostCancelClick = ()=> clearView()

    const handlePostCreated = ()=>{ 
        setView(null) 
        setStamp(Date.now())
    }

    const handleEditPostCancelClick = ()=> clearView()

    const handlePostEdited = ()=>{
        setView(null) 
        setStamp(Date.now()) 
        setPost(null)
    }

    const handleCreatePostClick = ()=> {
        setView('create-post')

    }

    
        logger.debug('Home -> render')

    return <main className="main">
            {user && <h1>Hello, {user.name}!</h1>}

            <nav>
                <button 
                    onClick = {handleChatButtonClick}>💬</button>
                <button
                    onClick={handleLogoutClick}>🚪</button>
            </nav>

            <PostList stamp= {stamp} onEditPostClick={handleEditPostClick} />

            {view === 'create-post' && <CreatePost onCancelClick ={handleCreatePostCancelClick} onPostCreated = {handlePostCreated} />}

            {view === 'edit-post' && <EditPost post={post} onCancelClick={handleEditPostCancelClick} onPostEdited={handlePostEdited} />}

            <footer className="footer">
                
                <button onClick={handleCreatePostClick}
                >➕</button>

            </footer>
        </main>
    
}

export default Home

