import { CalendarIcon, ChartSquareBarIcon, ServerIcon, UserGroupIcon } from '@heroicons/react/outline'

import React from 'react'

export function SideBar(props) {
    return (
        <div className='fixed inset-y-0 left-0 bg-white w-40'>
            <h1 className='flex items-center justify-center text-xl h-16 bg-purple-600 text-black font-bold'>Hussle</h1>
            <ul className='flex flex-col text-lg'>
                <li className='flex justify-center items-center flex-col py-7 border-l-4 border-purple-500 font-bold text-black'>
                    <UserGroupIcon className='w-8 h-8' />
                    Manage
                </li>
                <li className='flex justify-center items-center flex-col py-7 border-l-4 border-purple-500 font-bold text-black'>
                    <ServerIcon className='w-8 h-8' />
                    Server
                </li>
                <li className='flex justify-center items-center flex-col py-7 border-l-4 border-purple-500 font-bold text-black'>
                    <CalendarIcon className='w-8 h-8' />
                    Calendar
                </li>
                <li className='flex justify-center items-center flex-col py-7 border-l-4 border-purple-500 font-bold text-black'>
                    <ChartSquareBarIcon className='w-8 h-8' />
                    Boards
                </li>

            </ul>
        </div>
    )
}
