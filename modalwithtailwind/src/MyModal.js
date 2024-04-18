import React from 'react'
import { ReactComponent as CloseIcon } from './xmark-solid.svg';


const MyModal = ({ visible, onClose }) => {
    if (!visible) return null

    const handleOnClose = (e) => {
        if (e.target.id === "container") {
            onClose()
        }
    }

    return (
        <div
            id='container'
            onClick={handleOnClose}
            className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur sm flex justify-center items-center z-10'>
            <div className='bg-gray-200 w-80 p-5'>
                <div className='flex justify-between text-red-500 font-bold text-lg'>
                    <div></div>
                    <CloseIcon className='w-4 fill-red-500 cursor-pointer hover:fill-red-600' onClick={onClose} />
                </div>
                <form>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium leading-6 text-gray-900 mt-1'>Name</label>
                        <input type='text' placeholder='Enter Your Name' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <div className=''>
                        <label className='block'>Password</label>
                        <input type='text' placeholder='Enter Your password' className='w-full rounded-sm p-1 outline-none placeholder:text-gray-300' />
                    </div>
                    <button type='submit' className='bg-green-500 text-white px-4 py-2 mt-4 '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MyModal