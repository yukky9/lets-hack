import React from 'react';

const StartButton = ({children}:any) => {
    return (
        <div className='bg-white-blue border-2 border-blue hover:bg-grey-blue text-center text-black text-lg w-36 h-10 py-1 px-4 rounded-full'>
            {children}
        </div>
    );
};

export default StartButton;