import React from 'react';

const OutTeamButton = ({children}:any) => {
    return (
        <div className='bg-transparent hover:bg-white-blue text-blue font-semibold hover:text-blue text-center w-48 h-10 py-1 px-4 border-2 border-blue rounded'>
            {children}
        </div>
    );
};

export default OutTeamButton;