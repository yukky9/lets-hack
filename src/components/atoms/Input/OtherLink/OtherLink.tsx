import React from 'react';

const OtherLink = () => {
    return (
        <input type="url" id="website"
               className="bg-white-blue border-2 border-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-white-blue dark:border-blue dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue"
               placeholder="flowbite.com" required/>
    );
};

export default OtherLink;