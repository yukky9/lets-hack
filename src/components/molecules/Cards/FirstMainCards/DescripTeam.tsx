import React from 'react';
import LeftSlideText from '../../../atoms/Text/LeftSlideText/LeftSlideText';
import TeamNameText from '../../../atoms/Text/MainText/TeamNameText';

const DescripTeam = () => {
    return (
        <div className='box-border w-auto bg-white rounded-2xl p-5'>
            <TeamNameText name='Описание команды'/>
            <LeftSlideText text='Молодые потенциалы, которые любят программировать и самосовершенствоваться'/>
        </div>
    );
};

export default DescripTeam;