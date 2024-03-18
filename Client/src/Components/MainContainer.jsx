import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import Login from './LoginContainer';
import UsersGroups from './UsersGroups';
import { Outlet } from 'react-router-dom';


const MainContainer = () => {

    const [conversations, setConversations] = useState([
        {
            name: 'John Doe',
            lastMessage: 'Hey, how are you?',
            time: '2:00pm'
        },
        {
            name: 'John Doe',
            lastMessage: 'Hey, how are you?',
            time: '2:00pm'
        }
    ])

    return (
        <div className='bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-2xl'>
            <Sidebar />  
            <Outlet/>
        </div>
    )
}

export default MainContainer
