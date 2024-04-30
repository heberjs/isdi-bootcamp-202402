

function CreateMatch() {





    return <>
        <section className='flex flex-col justify-center items-center h-screen bg-[#1A2902]'>


            <form className='flex flex-col items-center mt-8'>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="title" className='text-white font-semibold'>Title</label>
                    <input type="text" id="title" className='rounded-lg px-2 py-1' />
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="description" className='text-white'>description</label>
                    <input type="text" id="description" className='rounded-lg px-2 py-1' />
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="date" className='text-white'>Date time</label>
                    <input type="datetime-local" id="date" min="2024-04-30T00:00" max="2024-12-31T23:59" className='rounded-lg px-2 py-1' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="field" className='text-white'>Field</label>
                    <input type="text" id="field" className='rounded-lg px-2 py-1' />
                </div>

                <button type='submit' className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4'>Create Match</button>
            </form>
        </section>
    </>
}

export default CreateMatch