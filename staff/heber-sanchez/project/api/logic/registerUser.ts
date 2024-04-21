

function registerUser(fullname: string, email: string, password: string): Promise<void> {

    return User.findOne([{ email }])
        .catch(error => { throw new SystemError(error.message) })
        .then()
}