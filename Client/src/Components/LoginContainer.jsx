import { Button, TextField } from '@mui/material'
import React from 'react'

const login = () => {
 
  return (
    <div className='bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-2xl'>
      <div className='flex flex-[0.3] justify-center items-center bg-purple-100 rounded-l-2xl'>
        <img src='../communication.png' alt='Logo' width={150} />
      </div>
      <div className='flex flex-[0.7] flex-col gap-5 justify-center items-center'>
        <p className='text-purple-500 font-bold text-lg'>Login To Your Account</p>
        <TextField
          className='w-[50%] max-w-[300px]'
          id="outlined-basic"
          label="Username"
          variant="outlined" />
        <TextField
          className='w-[50%] max-w-[300px]'
          id="outlined-basic"
          label="Password"
          type='password'
          variant="outlined"
          autoComplete='current-password'
        />
        <Button variant="contained">Login</Button>

      </div>
    </div>
  )
}

export default login
