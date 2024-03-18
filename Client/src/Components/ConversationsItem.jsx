import React from 'react'
import { useNavigate } from 'react-router-dom';


const ConversationsItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-[32px,auto,auto] grid-rows-[auto,auto] gap-x-3 p-1 px-2 rounded-2xl cursor-pointer hover:bg-purple-200 transition transform duration-50 active:bg-white dark:hover:bg-purple-900 dark:active:bg-purple-500' 
            onClick={()=>{navigate('chat')}}
        >
            <p className='col-span-1 row-span-2 flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>
                {props.conversation.name[0]}
            </p>
            <p className='col-span-2 row-span-1 font-serif font-bold text-[rgba(0,0,0,54)] dark:text-white'>
                {props.conversation.name}
                </p>
            <p className='font-serif  text-[rgba(0,0,0,54)] dark:text-white'>
                {props.conversation.lastMessage}
                </p>
            <p className='font-serif flex justify-end text-xs text-[rgb(58,57,57)] dark:text-white'>
                {props.conversation.time}
                </p>


        </div>
    )
}

export default ConversationsItem
