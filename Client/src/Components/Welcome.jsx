import React from 'react'

const Welcome = () => {
    return (
        <div className='flex-1 flex flex-col justify-center items-center'>
            <img
                src="../public/communication.png"
                alt='Rchat logo'
                width={200} />
            <p className='text-center'>Welcome to Rchat Application</p>
        </div>
    )
}

export default Welcome
