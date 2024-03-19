import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material'
import MessageOther from './MessageOther'
import MessageSelf from './MessageSelf'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from "axios";



const ChatArea = () => {

    const [messageContent, setMessageContent] = useState("");
    const messagesEndRef = useRef(null);
    const dyParams = useParams();
    const [chat_id, chat_user] = dyParams._id.split("&");
    // console.log(chat_id, chat_user);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [allMessages, setAllMessages] = useState([]);
    // console.log("Chat area id : ", chat_id._id);
    // const refresh = useSelector((state) => state.refreshKey);


    const sendMessage = () => {
 
        // console.log("SendMessage Fired to", chat_id._id);
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        };
        axios.post(
            "http://localhost:3000/message/",
            {
                content: messageContent,
                chatId: chat_id,
            },
            config
        )
            .then(({ data }) => {
                console.log("Message Fired");
            });

            setMessageContent("");
    };

    // const scrollToBottom = () => {
    //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // };

    useEffect(() => {
        console.log("Users refreshed");
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        };
        axios.get("http://localhost:3000/message/" + chat_id, config)
            .then(({ data }) => {
                setAllMessages(data);

                console.log("Data from Acess Chat API ", data);
            });
        // scrollToBottom();
    }, [messageContent,chat_user]);

    return (
        <div className='flex-[0.7] flex flex-col'>
            <div className='bg-white flex item-center gap-3 p-2 m-2 rounded-2xl shadow-2xl dark:dark-mode dark:text-white'>
                <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full self-center justify-self-center dark:text-black '>{chat_user[0]} </p>
                <div className='flex flex-col flex-1'>
                    <p className='col-span-2 row-span-1 font-serif font-bold text-[rgba(0,0,0,54)] dark:dark-mode dark:text-white'>{chat_user}</p>
                    {/* <p className='font-serif flex  text-xs text-[rgb(58,57,57) ] dark:dark-mode'>{props.conversation.time}</p> */}
                </div>

                <IconButton>
                    <DeleteIcon className='dark:text-white' />
                </IconButton>
            </div>

            <div className='bg-white flex-1 m-2  rounded-lg gap-3 overflow-y-scroll no-scrollbar shadow-2xl dark:dark-mode'>
                {allMessages
                    .slice(0)
                 
                    .map((message, index) => {
                        const sender = message.sender;
                        const self_id = userData._id;
                        if (sender._id === self_id) {
                            // console.log("I sent it ");
                            return <MessageSelf message={message} key={index} />;
                        } else {
                            // console.log("Someone Sent it");
                            return <MessageOther message={message} key={index} />;
                        }
                    })}
            </div>
            <div className='bg-white flex items-center rounded-lg mx-2 mb-2 shadow-2xl dark:text-white dark:dark-mode '>
                <input type="text" className="mx-2 flex-1 p-1 outline-none dark:text-white dark:dark-mode  "
                    placeholder='Type a message'
                    value={messageContent}
                    onChange={(e) => {
                        setMessageContent(e.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.code == "Enter") {
                            // console.log(event);
                            sendMessage();
                            
                        }
                    }}
                />
                <IconButton
                    className='dark:text-white dark:dark-mode'
                    onClick={() => {
                        sendMessage();
                    }}
                >
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea

