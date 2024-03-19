import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UsersGroups = () => {



    const [groups, SetGroups] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log("Data from LocalStorage : ", userData);
    const nav = useNavigate();
    if (!userData) {
        console.log("User not Authenticated");
        nav("/");
    }

    const user = userData;
    useEffect(() => {
        console.log("Users refreshed : ", user.token);
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        axios.get("http://localhost:3000/chat/fetchGroups", config)
            .then((response) => {
                console.log("Group Data from API ", response.data);
                SetGroups(response.data);
            });
    }, []);


    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease: "anticipate",
                    duration: 0.3
                }}
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
                    {groups.map((group, index) => {
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.97 }}
                                className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '
                                // onClick={() => {
                                //     const config = {
                                //         headers: {
                                //             Authorization: `Bearer ${userData.token}`,
                                //         },
                                //     };
                                //     const res = axios.put(
                                //         "http://localhost:3000/chat/addSelfToGroup",
                                //         {
                                //             userId: user._id,
                                //             chatId: group._id,
                                //         },
                                //         config

                                //     );
                                //     if (res.status === 200) {

                                //         navigate(
                                //             "chat/" +
                                //             group._id +
                                //             "&" +
                                //             group.name
                                //         );
                                //     }
                                // }}

                                >
                                <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>{group.chatName[0]}</p>
                                <div className='flex flex-col flex-1 '>
                                    <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'>{group.chatName}</p>
                                </div>
                            </motion.div>

                        );

                    })}
                </div>

            </motion.div>
        </AnimatePresence>

    )
}

export default UsersGroups
