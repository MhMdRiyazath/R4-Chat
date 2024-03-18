import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const login = () => {

  const [isSignUp, setSignUp] = useState(true)

  return (
    <div className='bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-2xl'>
      <div className='flex flex-[0.3] justify-center items-center bg-purple-100 rounded-l-2xl'>
        <img src='../communication.png' alt='Logo' width={150} />
      </div>
      <div className='flex flex-[0.7] flex-col gap-5 justify-center items-center'>

        {isSignUp ?
          <>
            <p className='text-purple-500 font-bold text-lg'>Create a new Account </p>
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Username"
              variant="outlined" />
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Email Address"
              variant="outlined" />
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Password"
              type='password'
              variant="outlined"
              autoComplete='current-password'
            />
            <Button variant="contained">SignUp</Button>
          </>
          :
          <>
            <p className='text-purple-500 font-bold text-lg'>Login To Your Account</p>
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Username"
              variant="outlined" />
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Password"
              type='password'
              variant="outlined"
              autoComplete='current-password'
            />
            <Button variant="contained">Login</Button>
          </>
        }

        <p>{isSignUp ? "Already have an account?":"Don't have an account?"} <span className='text-purple-500 cursor-pointer' onClick={() => setSignUp(!isSignUp)}>{isSignUp ? "Login":"SignUp"}</span></p>
      </div>

    </div>
  )
}

export default login
