import React from 'react';

type Props = {
    title:string
}

const ModalText = ({title}:Props) => {
    return (
        <p className="text-3xl font-bold w-full text-blue dark:text-blue">{title}</p>
    );
};

export default ModalText;