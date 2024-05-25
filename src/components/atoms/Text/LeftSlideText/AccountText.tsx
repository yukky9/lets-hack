import React from 'react';

type Props = {
    name:string,
    userName:string
}

const AccountText = ({name, userName}:Props) => {
    return (
        <div>
            <p className="text-lg font-bold text-gray-900 dark:text-black">{name} {userName}</p>
        </div>
    );
};

export default AccountText;