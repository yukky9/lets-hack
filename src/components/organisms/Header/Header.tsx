import React from 'react';
import HeaderButton from '../../atoms/Button/HeaderButton/HeaderButton';
import HeaderText from '../../atoms/Text/HeaderText/HeaderText';


const Header = () => {
    return (
        <div className='ml-96 w-auto pt-10'>
            <div className='box-border flex justify-between items-center'>
                <HeaderText title='Команда'/>
                <HeaderButton>Список команд</HeaderButton>
            </div>
        </div>
    );
};

export default Header;