import React from 'react';

type Props = {
    title:string
}

const HeaderText = ({title}:Props) => {
    return (
        <p className="text-3xl font-bold text-gray-900 dark:text-black">{title}</p>
    );
};

export default HeaderText;