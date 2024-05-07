//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useContext } from '../context.ts'



function EditField({ field, onCancelFormEditClick, onFieldEdited }) {
    const { showFeedback } = useContext()

    const handleCancelClick = () => onCancelFormEditClick()

    const handleOnSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value

        const address = form.address.value

        logger.debug('edit-field -> handlesubmit')

        try {

            logic.editField(field.id, name, address)
                .then(() => {
                    form.reset()

                    onFieldEdited()
                })
                .catch(error => showFeedback(error), 'error')
        } catch (error) {
            showFeedback(error)
        }


    }

    // return <section className='flex flex-col justify-center items-center h-screen bg-[#1A2902] '>
    return <section className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 '>
        <form onSubmit={handleOnSubmit}>
            <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='text-white font-semibold'>Name:</label>
                <input type="text" id='name' defaultValue={field.name} required className='rounded-lg px-2 py-1' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="address" className='text-white font-semibold'>Address:</label>
                <input type="text" id='address' defaultValue={field.address} required className='rounded-lg px-2 py-1' />
            </div>
            <button type='submit' className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4'>Save</button>
        </form>
        <button className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-[200px] mt-4' onClick={handleCancelClick}>Cancel</button>
    </section>


}

export default EditField