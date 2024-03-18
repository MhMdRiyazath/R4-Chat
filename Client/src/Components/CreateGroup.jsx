import React from 'react'
import DoneOutlineRounded from '@mui/icons-material/DoneOutlineRounded'
import { IconButton } from '@mui/material'

const CreateGroup = () => {
  return (
    <div className='flex-[0.7] flex justify-center items-center '>
        <div className='bg-white px-2 flex-[0.7] py-1 rounded-lg flex justify-between dark:dark-mode'> 
      <input type="text" 
        placeholder='Create a Group'
        className='flex-1 outline-none px-1 dark:dark-mode dark:text-white'
             />
        <IconButton className='dark:text-white'>
            <DoneOutlineRounded />
        </IconButton>
    </div>
    </div>
  )
}

export default CreateGroup
