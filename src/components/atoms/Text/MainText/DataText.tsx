import React from 'react';

type Props = {
    text:string
}

const DataText = ({text}:Props) => {
    return (
        <p className="text-sm font-medium text-grey-blue dark:text-grey-blue">{text}</p>
    );
};

export default DataText;