import { util, validate } from 'com'

function getLoggedInUserRole() {
    validate.token(sessionStorage.token)

    const { role } = util.extractJwtPayload(sessionStorage.token)

    return role
}

export default getLoggedInUserRole