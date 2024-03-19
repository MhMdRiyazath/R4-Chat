import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Users = () => {
    const [users, setUsers] = useState([]);

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("Data from LocalStorage : ", userData);
    const nav = useNavigate();

    if (!userData) {
        console.log("User not Authenticated");
        nav(-1);
    }


    useEffect(() => {
        console.log("Users refreshed");
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        };
        axios.get("http://localhost:3000/user/fetchUsers", config)
            .then((response) => {
                console.log("User data refreshed in Users panel");
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                // Handle error, e.g., show a message to the user
            });
    }, []);


    const handleOnClickUser = async (user) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                },
            };
            // Await the axios request to ensure it completes before proceeding
            const response = await axios.post("http://localhost:3000/chat/", { userId: user._id }, config);
            console.log("Chat request sent to user:", user);

            if (response.status === 200) {
                nav(
                    "../chat/" +
                    user._id +
                    "&" +
                    user.name
                );

            }

        } catch (error) {
            console.error("Error sending chat request:", error);
            // Handle the error, such as displaying an error message to the user
        }
    };


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
                    <p className=' align-middle text-[rgba(0,0,0,54)] dark:text-white'>All Users</p>
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
                    {users.map((user, index) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.97 }}
                                className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode '
                                key={index}
                                onClick={() => handleOnClickUser(user)}

                            >
                                <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black'>{user.name[0]}</p>
                                <div className='flex flex-col flex-1 '>
                                    <p className='font-serif text-[rgba(0,0,0,54)] dark:text-white'> {user.name}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Users
