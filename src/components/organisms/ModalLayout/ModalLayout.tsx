import React from 'react';
import SaveButton from '../../atoms/Button/SaveButton/SaveButton';
import ModalText from '../../atoms/Text/ModalText/ModalText';
import DiscordInputFeild from '../../molecules/InputFeild/DiscordInputFeild/DiscordInputFeild';
import GitHabInputFeild from '../../molecules/InputFeild/GitHabInputFeild/GitHabInputFeild';
import OtherInputFeild from '../../molecules/InputFeild/OtherInputFeild/OtherInputFeild';
import TelegramInputFeild from '../../molecules/InputFeild/TelegramInputFeild/TelegramInputFeild';
import VkInputFeild from '../../molecules/InputFeild/VkInputFeild/VkInputFeild';

const ModalLayout = () => {
    return (
        <div className='mt-48 ml-64 translate-x-full box-border w-96 h-auto bg-white rounded-3xl text-center pt-10 shadow-2xl'>
            <ModalText title="Socail Media"/>
            <div className='grid pl-10'>
                <DiscordInputFeild/>
                <TelegramInputFeild/>
                <GitHabInputFeild/>
                <VkInputFeild/>
                <OtherInputFeild/>
            </div>
            <a href='/'><SaveButton save="Сохранить изменения"/></a>
        </div>
    );
};

export default ModalLayout;