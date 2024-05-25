import React from 'react';

const SettingsTeamButton = ({children}:any) => {
    return (
        <div className='bg-blue hover:bg-dark-blue text-white font-bold text-center w-52 h-10 py-1 px-4 border border-blue rounded'>
            {children}
        </div>
    );
};

export default SettingsTeamButton;