'use client'

import { ChatAlt2Icon, ChevronDownIcon, DotsVerticalIcon, PaperClipIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/outline'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

import { CardItem } from './components/CardItem';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import data from './data/data.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(data);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (process.browser) {
      setReady(true)
    }
  })

  const onDragEnd = (re: any) => {
    console.log(re);
    let newBoardData = boardData;
    var dragItem = newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index, 1);
    newBoardData[parseInt(re.destination.droppableId)].items.splice(re.destination.index, 0, dragItem);
    setBoardData(newBoardData);
  }

  return (
    <div className='p-10'>
      {/*Board header*/}
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <h4 className='text-2xl font-bold text-gray-600'>Drag and drop app</h4>
          <ChevronDownIcon className='w-7 h-7 text-gray-500 rounded-full bg-white p-2 bg-white ml-5 shadow-xl' />
        </div>
        <div>
          <ul className='flex space-x-3'>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <Image src='https://randomuser.me/api/portraits/men/74.jpg' width='36' height='36' className='rounded-full' alt='imagen' />
            </li>
            <li>
              <button className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full'>
                <PlusIcon className='w-5 h-5 text-gray-500' />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/*Board Columns*/}

      {ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className='grid grid-cols-4 gap-5 my-5'>
            {data.map((board, index) => {
              return (
                <div key={index}>
                  <Droppable droppableId={index.toString()}  >
                    {
                      (provider: any) => (
                        <div key={index} {...provider.droppableProps} ref={provider.innerRef} className='bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden'>
                          <span className='w-full h-[5px] bg-gradient-to-r from-pink-700 to red-200 absolute inset-x-0 top-0 '>1</span>
                          <h4 className='flex justify-between items-center mb-2'>
                            <span className='text-2xl text-gray-600'>{board.name}</span>
                            <DotsVerticalIcon className='w-5 h-5 text-gray-500' />
                          </h4>

                          <div className='overflow-y-auto overflow-x-hidden h-auto'>
                            {
                              board.items.length > 0 && (
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className='m-3'
                                    />)
                                })
                              )
                            }
                            {provider.placeholder}
                          </div>

                          <button className='flex justify-center items-center mt-6a space-x-2 text-lg'>
                            <span className='text-gray-600'>Add task</span>
                            <PlusCircleIcon className='w-5 h-5 text-gray-500' />
                          </button>
                        </div>

                      )
                    }
                  </Droppable>
                </div>
              )
            })
            }
          </div>
        </DragDropContext>
      )}


    </div>
  )
}
