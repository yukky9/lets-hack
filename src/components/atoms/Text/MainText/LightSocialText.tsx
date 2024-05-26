import React from 'react';


type Props = {
    text: string,
    href?: string
}

const LightSocialText = ({text, href}: Props) => {


    return (
        <p className="text-xs font-light text-black dark:text-black">{text}</p>
    );
};

export default LightSocialText;