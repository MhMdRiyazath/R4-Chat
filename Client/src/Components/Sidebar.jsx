import React from 'react'
import { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';


import { IconButton } from '@mui/material'
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const Sidebar = () => {
    const darkMode= useSelector(state=>state.themeKey)
    const dispatch = useDispatch()
    const [conversations, setConversations] = useState([
        {
            name: 'John Doe',
            lastMessage: 'Hey, how are you?',
            time: '2:00pm'
        }, {
            name: 'Rohn Doe',
            lastMessage: 'Hey, how are you?',
            time: '2:00pm'
        }, {
            name: 'Pohn Doe',
            lastMessage: 'Hey, how are you?',
            time: '2:00pm'
        }
    ])

    function changeTheme() {
        dispatch(toggleTheme())
        document.documentElement.classList.toggle('dark');
    }
    
const navigate = useNavigate();
    return (
        <div className='flex-[0.3] flex flex-col'>
            <div className=' bg-white rounded-2xl px-2 py-2 m-2 flex justify-between shadow-2xl dark:dark-mode'>
                <div>
                    <IconButton >
                        <AccountCircleIcon className="dark:text-white" />
                    </IconButton>
                </div>

                <div>
                    <IconButton onClick={()=>{navigate('users')}} className='dark:text-white'>
                        <PersonAddAlt1Icon  />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('groups')}} className='dark:text-white'>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('create-groups')}} className='dark:text-white'>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton onClick={changeTheme} className='dark:text-white'>
                        {darkMode ? <LightModeIcon className="text-white" /> : <NightlightIcon />}
                    </IconButton>
                    <IconButton onClick={()=>{navigate('users')}} className='dark:text-white'>
                        <LogoutIcon/>
                    </IconButton>
                </div>
            </div>
            <div className=' bg-white rounded-2xl px-3 py-1 mx-2 flex items-center shadow-2xl dark:dark-mode'>
                <div><IconButton><SearchIcon className="dark:text-white" /></IconButton></div>
                <input className='outline-none border-none text-xl ml-3 dark:text-white bg-transparent'
                    type='text'
                    placeholder='search'
                />
            </div>
            <div className=' bg-white rounded-2xl px-3 py-2 m-2 flex-1 shadow-2xl overflow-scroll no-scrollbar dark:dark-mode'>
                {conversations.map((conversation, index) => (
                    <ConversationsItem
                        key={index}
                        conversation={conversation}
                    />
                ))}

            </div>

        </div>
    )
}

export default Sidebar
