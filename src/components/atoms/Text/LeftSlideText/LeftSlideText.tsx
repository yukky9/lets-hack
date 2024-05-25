import React from 'react';

type Props = {
    text:string
}

const LeftSlideText = ({text}:Props) => {
    return (
        <p className="text-lg font-medium text-gray-900 dark:text-black">{text}</p>
    );
};

export default LeftSlideText;