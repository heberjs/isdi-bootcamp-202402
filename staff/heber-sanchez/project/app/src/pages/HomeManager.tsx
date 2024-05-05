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


function HomeManager() {
    const navigate = useNavigate()

    logger.debug('HomeManager -> Render')


    const [match, setMatch] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)


    const clearView = () => setView(null)
    const handleLoggedOut = () => navigate('/login')



    const handleOnMatchCreated = () => {
        clearView()
        setStamp(Date.now)
    }

    const handleOnFieldCreated = () => {
        clearView()
        setStamp(Date.now)
    }

    const handleOnClickedCreateForm = () => setView('create form')


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

    logger.debug('Home/Manager -> render')
    return <>
        <Header onUserLoggedOut={handleLoggedOut} />


        <main className='flex flex-col h-screen bg-[#1A2902]'>

            <Routes>

                <Route path="/*" element={<MatchesList stamp={stamp} onEditMatchFormClick={handleEditMatchFormClick} />} />

                <Route path="/fields" element={<FieldList stamp={stamp} />} />

            </Routes>

            {view === 'create form' && <CreateMatch onMatchCreated={handleOnMatchCreated} onCancelClick={handleOnCancelClicked} />}

            {view === 'create-field' && <CreateField onFieldCreated={handleOnFieldCreated} onCancelClickField={handleOnCancelClicked} />}

            {view === 'edit-match' && < EditMatch match={match} onMatchEdited={handleOnMatchEdited} />}



        </main >

        <FooterNav onCreateFormClick={handleOnClickedCreateForm} />
    </>
}
export default HomeManager