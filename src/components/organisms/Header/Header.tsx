import React from 'react';
import HeaderButton from '../../atoms/Button/HeaderButton/HeaderButton';
import HeaderText from '../../atoms/Text/HeaderText/HeaderText';


const Header = () => {
    return (
        <div className='ml-96 pt-10 w-full flex items-center gap-96'>
            <HeaderText title='Команда'/>
            <div className='ml-36 flex items-center px-96 pr-2'>
                <HeaderButton>Список команд</HeaderButton>
            </div>
        </div>
    );
};

export default Header;