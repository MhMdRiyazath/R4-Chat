import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const login = () => {
  const [isSignUp, setSignUp] = useState(true)
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const [isloading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    setData((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  }
  const handleOnSignUp = async () => {


    try {
      setLoading(true)
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      
      const responseData = await response.json();
      localStorage.setItem("userData", JSON.stringify(responseData))

      console.log("regis res:", response)
      navigate("/app/welcome")
      setLoading(false)

    } catch (err) {
      console.log("login error:", err)
      setLoading(false)

    }
    console.log(data)

  }
  const handleOnLogin = async () => {


    try {
      setLoading(true)
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const responseData = await response.json();
      localStorage.setItem("userData", JSON.stringify(responseData))
      console.log("login res:", response)
      navigate("/app/welcome")
      setLoading(false)

    } catch (err) {
      console.log("login error:", err)
      setLoading(false)

    }
  }

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
              variant="outlined"
              name='name'
              onChange={handleOnChange}
            />

            <TextField
              className='w-[50%] max-w-[300px]'
              label="Email Address"
              variant="outlined"
              name='email'
              onChange={handleOnChange}
            />
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Password"
              type='password'
              variant="outlined"
              autoComplete='current-password'
              name='password'
              onChange={handleOnChange}
            />
            <Button
              variant="contained"
              onClick={handleOnSignUp}
            >SignUp</Button>
          </>
          :
          <>
            <p className='text-purple-500 font-bold text-lg'>Login To Your Account</p>
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Username"
              variant="outlined"
              name='name'
              onChange={handleOnChange}
            />
            <TextField
              className='w-[50%] max-w-[300px]'
              label="Password"
              type='password'
              variant="outlined"
              autoComplete='current-password'
              name='password'
              onChange={handleOnChange}
            />
            <Button variant="contained"
              onClick={handleOnLogin}
            >Login</Button>
          </>
        }

        <p className='font-bold'>{isSignUp ? "Already have an account " : "Don't have an account "} <span className='text-purple-500 cursor-pointer' onClick={() => setSignUp(!isSignUp)}>{isSignUp ? "Login" : "SignUp"}</span></p>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isloading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default login
