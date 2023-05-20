import { BellIcon, SearchIcon } from '@heroicons/react/outline'

import Image from 'next/image'
import React from 'react'

export function TopBar(props) {
    return (
        <div className='h-16 pl-40 sticky bg-gradient-to-r from-purple-400 to-blue-500 w-full flex items-center justify-between'>
            <div className='flex px-5 space-x-5 items-center'>
                <SearchIcon className='w-5 h-5 text-white' />
                <input type="text " placeholder='Search for tasks' className='bg-transparent border-0 text-white placeholder-gray-200 outline-none focus:outline-none focus:ring-0a text-lg' />
            </div>
            <div className='flex space-x-6'>
                <BellIcon className='w-7 h-7 text-white' />
                <div className='flex items-center text-white space-x-4'>
                    <h3 className='font-bold mr-53'>Doe</h3>
                    <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' />
                </div>
            </div>
        </div>
    )
}
