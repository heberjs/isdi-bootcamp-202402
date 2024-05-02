import registerPlayer from './registerPlayer.ts'
import authenticateUser from './authenticateUser.ts'
import registerManager from './registerManager.ts'
import retrievePlayer from './retrievePlayer.ts'
import retrieveManager from './retrieveManager.ts'
import createField from './createField.ts'
import createMatch from './createMatch.ts'
import retrieveFields from './retrieveFields.ts'
import retrieveMatches from './retrieveMatches.ts'
import joinMatch from './joinMatch.ts'
import retrieveJoinedMatches from './retrieveJoinedMatches.ts'
import retrieveManagerMatches from './retrieveManagerMatches.ts'
import removeMatch from './removeMatch.ts'

const logic = {
    registerPlayer,
    registerManager,
    authenticateUser,
    retrievePlayer,
    retrieveManager,
    createField,
    createMatch,
    retrieveFields,
    retrieveMatches,
    joinMatch,
    retrieveJoinedMatches,
    retrieveManagerMatches,
    removeMatch


}

export default logic