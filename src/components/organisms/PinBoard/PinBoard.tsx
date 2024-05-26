import React from 'react';
import HeaderText from '../../atoms/Text/HeaderText/HeaderText';
import PinBoardDesk from '../../molecules/PinBoardDesk/PinBoardDesk';



const PinBoard = () => {
    return (
        <div className='ml-96 box-border bg-white rounded w-auto mb-5'>
            <div className='p-3 ml-2 mr-3'>
                <HeaderText title='PinBoard'/>
                <PinBoardDesk/>
            </div>
        </div>
    );
};

export default PinBoard;