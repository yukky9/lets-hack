import React from 'react';
import StartButton from '../../atoms/Button/StartButton/StartButton';
import LeftSlideText from '../../atoms/Text/LeftSlideText/LeftSlideText';
import Pomodoro from '../../molecules/Pomodoro/Pomodoro';

const PomodoroCard = () => {
    return (
        <div className='flex gap-10 box-border bg-white rounded-3xl h-44 w-auto mb-5 mt-5 p-10'>
            <Pomodoro/>
            <div className='mt-5 w-auto text-center'>
                <LeftSlideText text="Время на перерыв"/>
                <div className='mt-5'>
                    <StartButton>Старт</StartButton>
                </div>
            </div>
        </div>
    );
};

export default PomodoroCard;