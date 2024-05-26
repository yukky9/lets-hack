import React from 'react';

type Props = {
    name:string
}

const TeamNameText = ({name}:Props) => {
    return (
        <p className="text-xl font-bold w-full text-gray-900 dark:text-black">{name}</p>
    );
};

export default TeamNameText;