import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material'
import MessageOther from './MessageOther'
import MessageSelf from './MessageSelf'
import { useSelector } from 'react-redux';



const ChatArea = () => {
    const darkMode= useSelector(state=>state.themeKey)
    

    var props = {
        conversation: {
            name: 'John Doe',
            time: '2:00pm'
        }
    }

    return (
        <div className='flex-[0.7] flex flex-col'>
            <div className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode dark:text-white'>
                <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black '>{props.conversation.name[0]} </p>
                <div className='flex flex-col flex-1'>
                    <p className='col-span-2 row-span-1 font-serif font-bold text-[rgba(0,0,0,54)] dark:dark-mode dark:text-white'>{props.conversation.name}</p>
                    <p className='font-serif flex  text-xs text-[rgb(58,57,57) ] dark:dark-mode'>{props.conversation.time}</p>
                </div>

                <IconButton>
                    <DeleteIcon className='dark:text-white' />
                </IconButton>
            </div>

            <div className='bg-white flex-1 m-2  rounded-lg gap-3 overflow-y-scroll no-scrollbar shadow-2xl dark:dark-mode'>
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
                <MessageOther />
                <MessageSelf />
            </div>
            <div className='bg-white flex items-center rounded-lg mx-2 mb-2 shadow-2xl'>
                <input type="text" className="mx-2 flex-1 p-1 outline-none " placeholder='Type a message' />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea

