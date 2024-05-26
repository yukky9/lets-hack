import React from 'react';
import PromoField from '../../atoms/Field/PromoField/PromoField';
import LeftSlideText from '../../atoms/Text/LeftSlideText/LeftSlideText';
import logoPromo from '../../../components/atoms/ImageLogo/Logo/image 5.png'


const Promo = () => {
    return (
        <div className=' ml-96 flex gap-1 items-center'>
            <img src={logoPromo} alt='promo'/>
            <div className='items-center text-center'>
                <LeftSlideText text='дарит промокод:'/>
                <PromoField>hW1sLMR2u8sHBh8WAR</PromoField>
            </div>
        </div>
    );
};

export default Promo;