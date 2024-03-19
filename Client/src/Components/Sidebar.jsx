import React, { useEffect } from 'react'
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
import axios from 'axios';

const Sidebar = () => {
    const darkMode = useSelector(state => state.themeKey)
    const dispatch = useDispatch()


    const [conversations, setConversations] = useState([]);
    // console.log("Conversations of Sidebar : ", conversations);
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log("Data from LocalStorage : ", userData);
    const nav = useNavigate();
    if (!userData) {
        console.log("User not Authenticated");
        nav("/");
    }

    const user = userData;
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        axios.get("http://localhost:3000/chat/", config).then((response) => {
            console.log("Data refresh in sidebar ", response.data);
            setConversations(response.data);

        });
    }, []);


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
                    <IconButton onClick={() => { navigate('users') }} className='dark:text-white'>
                        <PersonAddAlt1Icon />
                    </IconButton>
                    <IconButton onClick={() => { navigate('groups') }} className='dark:text-white'>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton onClick={() => { navigate('create-groups') }} className='dark:text-white'>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton onClick={changeTheme} className='dark:text-white'>
                        {darkMode ? <LightModeIcon className="text-white" /> : <NightlightIcon />}
                    </IconButton>
                    <IconButton onClick={() => { navigate('users') }} className='dark:text-white'>
                        <LogoutIcon />
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
                {conversations.map((conversation, index) => {
                    // console.log("current convo : ", conversation);
                    if (conversation.users.length === 1) {
                        return <div key={index}></div>;
                    }
                    if (conversation.latestMessage === undefined) {
                        // console.log("No Latest Message with ", conversation.users[1]);
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    console.log("Refresh fired from sidebar");
                                    // dispatch(refreshSidebarFun());
                                }}
                            >
                                <div
                                    key={index}
                                    className="grid grid-cols-[32px,auto,auto] grid-rows-[auto,auto] gap-x-3 p-1 px-2 rounded-2xl cursor-pointer hover:bg-purple-200 transition transform duration-50 active:bg-white dark:hover:bg-purple-900 dark:active:bg-purple-500"
                                    onClick={() => {
                                        navigate(
                                            "chat/" +
                                            conversation._id +
                                            "&" +
                                            conversation.users[1].name
                                        );
                                    }}
                                // dispatch change to refresh so as to update chatArea
                                >

                                    <p className='col-span-1 row-span-2 flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>
                                        {conversation.users[1].name[0]}
                                    </p>
                                    <p className='col-span-2 row-span-1 font-serif font-bold text-[rgba(0,0,0,54)] dark:text-white'>
                                        {conversation.users[1].name}
                                    </p>
                                    <p className='font-serif  text-[rgba(0,0,0,54)] dark:text-white'>
                                        No previous Messages, click here to start a new chat
                                    </p>
                                    {/* <p className='font-serif flex justify-end text-xs text-[rgb(58,57,57)] dark:text-white'>
                                        {props.conversation.time}
                                    </p> */}




                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-[32px,auto,auto] grid-rows-[auto,auto] gap-x-3 p-1 px-2 rounded-2xl cursor-pointer hover:bg-purple-200 transition transform duration-50 active:bg-white dark:hover:bg-purple-900 dark:active:bg-purple-500"
                                onClick={() => {
                                    navigate(
                                        "chat/" +
                                        conversation._id +
                                        "&" +
                                        conversation.users[1].name
                                    );
                                }}
                            >
                                <p className='col-span-1 row-span-2 flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>
                                    {conversation.users[1].name[0]}
                                </p>
                                <p className='col-span-2 row-span-1 font-serif font-bold text-[rgba(0,0,0,54)] dark:text-white'>
                                    {conversation.users[1].name}
                                </p>
                                <p className='font-serif  text-[rgba(0,0,0,54)] dark:text-white'>
                                    {conversation.latestMessage.content}
                                </p>
                                {/* <p className='font-serif flex justify-end text-xs text-[rgb(58,57,57)] dark:text-white'>
                                        {props.conversation.time}
                                    </p> */}


                            </div>
                        );
                    }
                })}

            </div>

        </div>
    )
}

export default Sidebar
