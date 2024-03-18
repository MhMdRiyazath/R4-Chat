import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion"


const UsersGroups = () => {

    return (
        <AnimatePresence>

            <motion.div 
            initial={{ opacity: 0, scale:0}}
            animate={{ opacity: 1, scale:1}}
            exit={{ opacity: 0, scale:0}}
            transition={{
                ease:"anticipate" ,
                duration: 0.3 }}
            className='flex-[0.7] flex flex-col '>
                <div className='bg-white flex item-center gap-3 p-3 m-2 rounded-2xl shadow-2xl dark:dark-mode'>
                    <img src="../communication.png" alt="logo" width={30} />
                    <p className=' align-middle text-[rgba(0,0,0,54)] dark:text-white'>All Groups</p>
                </div>

                <div className=' bg-white rounded-2xl px-3 py-1 mx-2 flex items-center shadow-2xl dark:dark-mode '>
                    <div>
                        <IconButton className='dark:text-white'>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <input className='outline-none border-none text-xl ml-3 dark:text-white bg-transparent'
                        type='text'
                        placeholder='search'
                    />
                </div>
                <div className=' overflow-scroll no-scrollbar flex-1 '>

                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.995 }}
                        className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '>
                        <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>a</p>
                        <div className='flex flex-col flex-1 '>
                            <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>Test user</p>
                        </div>
                    </motion.div>




                </div>

            </motion.div>
        </AnimatePresence>

    )
}

export default UsersGroups
