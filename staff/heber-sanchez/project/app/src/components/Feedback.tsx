//@ts-nocheck
import RoundButton from './library/RoundButton'
import { logger } from '../utils'

function Feedback({ message, level, onAcceptClick }) {
    logger[level](message)

    return <div className='fixed inset-0 flex justify-center items-start p-8'>
        <div className={`border-2 p-8 rounded-xl opacity-100 border-black ${level === 'error' ? 'bg-red-500' : level === 'warn' ? 'bg-yellow-500' : 'bg-green-500'} flex flex-col items-center`} >
            <h3>{message}</h3>
            <RoundButton onClick={onAcceptClick}>Accept</RoundButton>
        </div>

    </div>
}

export default Feedback


// className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 '