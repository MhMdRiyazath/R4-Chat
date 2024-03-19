import React, { useState } from 'react'
import DoneOutlineRounded from '@mui/icons-material/DoneOutlineRounded'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));
    const nav = useNavigate();
    if (!userData) {
      console.log("User not Authenticated");
      nav("/");
    }

const user = userData;
  const createGroup = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

   await axios.post(
      "http://localhost:3000/chat/createGroup",
      {
        name: groupName,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/app/groups");
  };

  return (
    <div className='flex-[0.7] flex justify-center items-center '>
      <div className='bg-white px-2 flex-[0.7] py-1 rounded-lg flex justify-between dark:dark-mode'>
        <input type="text"
          placeholder='Create a Group'
          className='flex-1 outline-none px-1 dark:dark-mode dark:text-white'
          onChange={(e) => setGroupName(e.target.value)}
        />
        <IconButton className='dark:text-white'
          onClick={createGroup}>
          <DoneOutlineRounded />
        </IconButton>
      </div>
    </div>
  )
}

export default CreateGroup
