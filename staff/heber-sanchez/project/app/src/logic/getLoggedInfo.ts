import { util, validate } from 'com'


function getLoggedInfo() {

    validate.token(sessionStorage.token)

    const { sub: userId, role } = util.extractJwtPayload(sessionStorage.token)

    return { userId, role }
}

export default getLoggedInfo