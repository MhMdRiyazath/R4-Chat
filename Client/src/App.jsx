import React from 'react'
import MainContainer from './Components/MainContainer'
import Login from './Components/LoginContainer'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import ChatArea from './Components/ChatArea'
import UsersGroups from './Components/UsersGroups'
import CreateGroup from './Components/CreateGroup'
import Users from './Components/Users'

const App = () => {
  return (
    <div className='bg-[#dddedd] min-h-screen flex justify-center items-center'>
  
      <Routes >
        <Route path='/' element={<Login />} />
        <Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome/>}></Route>
          <Route path='chat/:_id' element={<ChatArea/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='groups' element={<UsersGroups />}></Route>
          <Route path='create-groups' element={<CreateGroup />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
