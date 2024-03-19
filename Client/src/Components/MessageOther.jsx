import React from 'react'

const MessageOther = (props) => {
    console.log(props.message);
    var props1 = { name: "John Doe" }
    return (
        <div className=''>
            <div className='flex gap-2 m-3'>
                <p className='flex justify-center items-center bg-[#d9d9d9] font-serif text-lg font-bold text-white h-8 w-8 rounded-full dark:text-black '>{props1.name[0]}</p>
                <div className='bg-gray-200 rounded-lg py-2 px-2 dark:bg-gray-500 dark:text-white'>
                    <p className='font-bold'>{props1.name}</p>
                    <p className=''>{props.message.content}</p>
                    {/* <p className='flex justify-end text-xs'>12:00am</p> */}
                </div>

            </div>
        </div>
    )
}

export default MessageOther
