//@ts-nocheck

import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import Header from '../components/Header'


function HomeManager() {


    logger.debug('Home/Manager -> render')
    return <>
        <Header />
        <main className='flex flex-col h-screen bg-[#1A2902]'>

            <h1 className='text-white font-bold'>Your Schedule :</h1>

            <ul>

            </ul>

        </main >
    </>
}

export default HomeManager