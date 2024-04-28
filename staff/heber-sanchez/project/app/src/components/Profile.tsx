import { useParams } from 'react-router-dom'

function Profile() {
    const {fullname} = useParams()


    return <h1>hello {fullname}</h1>
}

export default Profile