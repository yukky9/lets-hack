import React from 'react';
import LeftSlideText from '../../../atoms/Text/LeftSlideText/LeftSlideText';

const EndHack = () => {
    return (
        <div className="box-border bg-white w-96 text-center stopwatch-container bg-blue-500 p-4 rounded-lg">
            <LeftSlideText text="Время до конца хакатона"/>
            <h1 className="text-6xl font-medium text-dark-blue" id="stopwatch">00:00:00</h1>
        </div>
    );
};

export default EndHack;