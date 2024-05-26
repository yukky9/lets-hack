import React from 'react';
import LeftSlideText from '../../../atoms/Text/LeftSlideText/LeftSlideText';

const ToCheckPoint = () => {
    return (
        <div className="box-border bg-white w-96 pt-6 text-center stopwatch-container bg-blue-500 p-4 rounded-lg">
            <LeftSlideText text="До чек-поинта:"/>
            <h1 className="text-4xl font-medium text-viol-blue" id="stopwatch">00:00:00</h1>
        </div>
    );
};

export default ToCheckPoint;