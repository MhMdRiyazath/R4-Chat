import React from 'react'

const MessageSelf = (props) => {


    var props2={name:"You",message:"fine, how are you?"}
  return (
    <div className='flex justify-end m-3'>
      <div className='bg-gradient-to-r from-indigo-300  to-pink-300 dark:from-indigo-600  dark:to-pink-700  rounded-lg p-2 dark:text-white'>
        <p>{props.message.content}</p>
        {/* <p className='flex justify-end text-xs'>12:00am</p> */}
      </div>
    </div>
  )
}

export default MessageSelf
