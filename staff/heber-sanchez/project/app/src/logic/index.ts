import registerPlayer from './registerPlayer'
import registerManager from './registerManager'
import loginUser from './loginUser'
import getLoggedInfo from './getLoggedInfo'
import logoutUser from './logoutUser'
import isUserLoggedIn from './isUserLoggedIn'
import retrievePlayer from './retrievePlayer'
import retrieveManager from './retrieveManager'
import retrieveMatches from './retrieveMatches'
import retrieveJoinedMatches from './retrieveJoinedMatches'
import joinMatch from './joinMatch'
import retrieveManagerMatches from './retrieveManagerMatches'
import retrieveFields from './retrieveFields'
import createField from './createField'
import createMatch from './createMatch'
import removeMatch from './removeMatch'
import editMatch from './editMatch'




const logic = {
    registerPlayer,
    registerManager,
    loginUser,
    retrievePlayer,
    retrieveManager,
    getLoggedInfo,
    isUserLoggedIn,
    logoutUser,
    retrieveMatches,
    retrieveJoinedMatches,
    joinMatch,
    retrieveManagerMatches,
    retrieveFields,
    createField,
    createMatch,
    removeMatch,
    editMatch
}

export default logic