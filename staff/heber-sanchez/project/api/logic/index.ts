import registerPlayer from './registerPlayer.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'
import registerManager from './registerManager.ts'


const logic = {
    registerPlayer,
    registerManager,
    authenticateUser,
    retrieveUser
}

export default logic