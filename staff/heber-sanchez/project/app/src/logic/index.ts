import registerPlayer from './registerPlayer'
import registerManager from './registerManager'
import loginUser from './loginUser'
import getLoggedInfo from './getLoggedInfo'
import logoutUser from './logoutUser'
import isUserLoggedIn from './isUserLoggedIn'
import retrievePlayer from './retrievePlayer'
import retrieveManager from './retrieveManager'
import retrieveMatches from './retrieveMatches'




const logic = {
    registerPlayer,
    registerManager,
    loginUser,
    retrievePlayer,
    retrieveManager,
    getLoggedInfo,
    isUserLoggedIn,
    logoutUser,
    retrieveMatches
}

export default logic