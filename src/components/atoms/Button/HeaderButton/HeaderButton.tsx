import React from 'react';

const HeaderButton = ({children}:any) => {
    return (
        <div className='bg-white-blue border-2 border-blue text-justify text-blue font-bold w-40 h-10 py-1 px-4 rounded'>
            {children}
        </div>
    );
};

export default HeaderButton;