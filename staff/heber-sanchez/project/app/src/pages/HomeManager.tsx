//@ts-nocheck
import { useNavigate, Route, Routes } from 'react-router-dom'
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav'
import MatchesList from '../components/MatchesList'
import FieldList from '../components/FieldList'
import CreateMatch from '../components/CreateMatch'
import CreateField from '../components/CreateField'
import EditMatch from '../components/EditMatch'

import { useContext } from '../context.ts'

function HomeManager() {
    const navigate = useNavigate()

    logger.debug('HomeManager -> Render')


    const [match, setMatch] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [matches, setMatches] = useState([])

    const { showFeedback } = useContext()


    const clearView = () => setView(null)
    const handleLoggedOut = () => navigate('/login')

    const loadMatches = () => {

        try {

            logic.retrieveManagerMatches()

                .then(matches => {
                    setMatches(matches)
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }

    }

    useEffect(() => {
        loadMatches()
    }, [stamp])



    const handleOnMatchCreated = () => {
        clearView()
        setStamp(Date.now)
    }



    const handleOnClickedCreateForm = () => setView(`create-match`)

    const handleOnCancelClicked = () => setView(null)

    const handleEditMatchFormClick = match => {
        setView('edit-match')
        setMatch(match)
    }
    const handleOnMatchEdited = () => {
        clearView()
        setStamp(Date.now())
        setMatch(null)
    }

    const handleOnDeleteMatchClick = () => loadMatches()



    logger.debug('Home/Manager -> render')
    return <>
        <Header onUserLoggedOut={handleLoggedOut} />


        <main className='flex flex-col h-screen bg-[#1A2902]'>

            <Routes>

                <Route path="/*" element={<MatchesList matches={matches} stamp={stamp} onEditMatchFormClick={handleEditMatchFormClick} onDeleteMatchClick={handleOnDeleteMatchClick} />} />

                <Route path="/fields" element={<FieldList stamp={stamp} onCreateFieldForm={() => setView('create-field')} />} />

            </Routes>

            {view === 'create-match' && <CreateMatch onMatchCreated={handleOnMatchCreated} onCancelClick={handleOnCancelClicked} />}


            {view === 'edit-match' && < EditMatch match={match} onMatchEdited={handleOnMatchEdited} onCancelEditClick={handleOnCancelClicked} />}



        </main >

        <FooterNav onCreateFormClick={handleOnClickedCreateForm} onCreateFieldForm={() => setView('create-field')} />
    </>
}
export default HomeManager