import React from 'react';
import LeftSlideText from '../../../atoms/Text/LeftSlideText/LeftSlideText';
import TeamNameText from '../../../atoms/Text/MainText/TeamNameText';

const Tasks = () => {
    return (
        <div className='box-border w-auto bg-white rounded-2xl p-4 mb-10'>
            <TeamNameText name='Задача'/>
            <LeftSlideText text='Идеальная платформа для хакатонов и IT-соревнований'/>
        </div>
    );
};

export default Tasks;