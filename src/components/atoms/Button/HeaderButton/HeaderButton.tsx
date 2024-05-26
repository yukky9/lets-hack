import React from 'react';

const HeaderButton = ({children}:any) => {
    return (
        <button className='bg-white-blue border-2 border-blue text-center text-sm text-blue font-bold w-64 h-10 p-2 pb-2 rounded'>
            {children}
        </button>
    );
};

export default HeaderButton;