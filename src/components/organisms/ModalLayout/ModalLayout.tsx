import React from 'react';
import SaveButton from '../../atoms/Button/SaveButton/SaveButton';
import ModalText from '../../atoms/Text/ModalText/ModalText';

const ModalLayout = () => {
    return (
        <div className='mt-52 ml-64 translate-x-full box-border w-96 h-96 bg-white rounded-3xl text-center pt-10 shadow-2xl'>
            <ModalText title="Socail Media"/>
            <SaveButton save="Сохранить изменения"/>
        </div>
    );
};

export default ModalLayout;