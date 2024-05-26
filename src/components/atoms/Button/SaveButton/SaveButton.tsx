import React from 'react';

const SaveButton = ({save}:any) => {
    return (
        <button
            className='bg-white-blue w-44 text-center text-sm text-blue font-bold h-10 p-2 pb-2 rounded-full'>
            {save}
        </button>
    );
};

export default SaveButton;